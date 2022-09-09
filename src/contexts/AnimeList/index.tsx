/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { useEffect } from "react";
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
  addAnime: (anime: object, animeId: number) => Promise<void>;
  removeAnime: (animeId: number) => Promise<void>;
  getUserAnimes: () => Promise<void>;
  updateAnime: (newInfo: object, animeId: number) => Promise<void>;
  searchAnimeList: (animeName: string) => void;
}

const animeListContext = createContext<IanimeListContextData>(
  {} as IanimeListContextData
);

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

  useEffect(() => {
    getUserAnimes();
  }, []);

  const addAnime = async (anime: object, animeId: number) => {
    const body = {
      anime: { data: anime },
      status: "planToWatch",
      rating: 0,
      episodes: 1,
      userId: user.id,
      favorite: false,
    };

    const verifyAnime = userAnimes.findIndex(
      (anime) => anime.anime.data.mal_id === animeId
    );

    console.log(userAnimes);

    if (verifyAnime === -1) {
      await jsonApi
        .post("/animesList/", body, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((_) => {
          getUserAnimes();
          toast({
            title: "Success!",
            description: "Anime included with success",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        })
        .catch((err) => console.log(err));
    } else {
      toast({
        title: "Oopss!",
        description: "The anime has already been added",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const removeAnime = async (animeId: number) => {
    await jsonApi
      .delete(`animesList/${animeId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        getUserAnimes();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const getUserAnimes = async () => {
    await jsonApi
      .get(`animesList?user_id=${user.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setUserAnimes(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateAnime = async (newInfo: object, animeId: number) => {
    await jsonApi
      .patch(`animesList/${animeId}`, newInfo, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((_) => {
        getUserAnimes();
      })
      .catch((err) => console.log(err));
  };

  const searchAnimeList = (animeName: string) => {
    animeName.toLocaleLowerCase();
    if (animeName === "") {
      getUserAnimes();
    } else {
      const filteredAnimes = userAnimes.filter((anime) =>
        anime.anime.data.title.toLocaleLowerCase().includes(animeName)
      );
      console.log(filteredAnimes);
      setUserAnimes(filteredAnimes);
    }
  };

  return (
    <animeListContext.Provider
      value={{
        userAnimes,
        addAnime,
        removeAnime,
        getUserAnimes,
        updateAnime,
        searchAnimeList,
      }}
    >
      {children}
    </animeListContext.Provider>
  );
};
