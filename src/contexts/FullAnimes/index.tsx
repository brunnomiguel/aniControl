import { jikanApi } from "../../services/api";
import { Ianime, Ilinks } from "../../@types/components/fullAnimes.types";
import { createContext, useContext, ReactNode, useState } from "react";

interface IfullAnimesProvider {
  children: ReactNode;
}

interface IfullAnimesContext {
  allAnimes: Ianime[];
  topAnimes: Ianime[];
  seasonsAnimes: Ianime[];
  linksStreaming: Ilinks[];
  linksExternal: Ilinks[];
  getAllAnimes: (page: number) => Promise<void>;
  getTopAnimes: () => Promise<void>;
  getSeasonsAnimes: () => Promise<void>;
  getLinksStreaming: (animeId: number) => Promise<void>;
  getLinksExternal: (animeId: number) => Promise<void>;
  searchAnime: (animeName: string) => Promise<void>;
}

const FullAnimesContext = createContext<IfullAnimesContext>(
  {} as IfullAnimesContext
);

export const useFullAnimes = () => {
  const context = useContext(FullAnimesContext);

  if (!context) {
    throw new Error("useFullAnimes must be used within an AuthProvider");
  }

  return context;
};

export const FullAnimesProvider = ({ children }: IfullAnimesProvider) => {
  const [allAnimes, setAllAnimes] = useState<Ianime[]>([]);
  const [topAnimes, setTopAnimes] = useState<Ianime[]>([]);
  const [seasonsAnimes, setSeasonsAnimes] = useState<Ianime[]>([]);
  const [linksStreaming, setLinksStreaming] = useState<Ilinks[]>([]);
  const [linksExternal, setLinksExternal] = useState<Ilinks[]>([]);

  const getAllAnimes = async (page: number) => {
    try {
      const response = await jikanApi.get(`/anime?page=${page}`);
      setAllAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopAnimes = async () => {
    try {
      const response = await jikanApi.get("/top/anime?limit=10");
      setTopAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSeasonsAnimes = async () => {
    try {
      const response = await jikanApi.get("/seasons/now?limit=10");
      setSeasonsAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLinksExternal = async (animeId: number) => {
    try {
      const response = await jikanApi.get(`/anime/${animeId}/external`);
      setLinksExternal(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLinksStreaming = async (animeId: number) => {
    try {
      const response = await jikanApi.get(`/anime/${animeId}/streaming`);
      setLinksStreaming(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchAnime = async (animeName: string) => {
    try {
      const response = await jikanApi.get(`/anime?letter=${animeName}`);
      setAllAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FullAnimesContext.Provider
      value={{
        allAnimes,
        topAnimes,
        seasonsAnimes,
        linksExternal,
        linksStreaming,
        getAllAnimes,
        getTopAnimes,
        getSeasonsAnimes,
        getLinksExternal,
        getLinksStreaming,
        searchAnime,
      }}
    >
      {children}
    </FullAnimesContext.Provider>
  );
};
