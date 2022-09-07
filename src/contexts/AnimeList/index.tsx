/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useContext, useState, useCallback } from "react";

import { animeProps } from "../FullAnimes/fullAnimes.types";
import { jsonApi } from "../../services/api";
import { useAuth } from "../Auth";
import { useToast } from "@chakra-ui/react";

interface IAnimeListProps {
  children: ReactNode;
}

export interface IanimelistItem {
  anime: { data: animeProps };
  status: string;
  rating: number;
  episodes: number;
  userId: number;
  id: number;
  favorite: boolean;
}

interface IanimeListContextData {
  userAnimes: IanimelistItem[];
  addAnime: (anime: object) => Promise<void>;
  removeAnime: (animeId: number) => Promise<void>;
  getUserAnimes: () => Promise<void>;
  updateAnime: (newInfo: object, animeId: number) => Promise<void>;
}

const animeListContext = createContext<IanimeListContextData>({} as IanimeListContextData);

export const useAnimeList = () => {
  const context = useContext(animeListContext);

  if (!context) {
    throw new Error("useAnimeList must be used within an animeListProvider");
  }

  return context;
};

export const AnimeListProvider = ({ children }: IAnimeListProps) => {
  const [userAnimes, setUserAnimes] = useState<IanimelistItem[]>([]);

  const { accessToken, user } = useAuth();

  const toast = useToast();

  const addAnime = useCallback(async (anime: object) => {
    const body = {
      anime: { data: anime },
      status: "planToWatch",
      rating: 0,
      episodes: 1,
      userId: user.id,
      favorite: false,
    };

    await jsonApi
      .post("/animesList/", body, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setUserAnimes([...userAnimes, res.data]);
        toast({
          title: "Success!",
          description: "Anime included with success",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const removeAnime = useCallback(async (animeId: number) => {
    await jsonApi
      .delete(`animesList/${animeId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        getUserAnimes();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const getUserAnimes = useCallback(async () => {
    await jsonApi
      .get(`animesList?user_id=${user.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setUserAnimes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateAnime = useCallback(async (newInfo: object, animeId: number) => {
    await jsonApi
      .patch(`animesList/${animeId}`, newInfo, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        getUserAnimes();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <animeListContext.Provider value={{ userAnimes, addAnime, removeAnime, getUserAnimes, updateAnime }}>
      {children}
    </animeListContext.Provider>
  );
};
