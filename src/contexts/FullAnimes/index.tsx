import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState,
} from "react";
import { jikanApi } from "../../services/api";
import { animeProps, externalProps, streamingProps } from "./fullAnimes.types";

interface FullAnimesProviderProps {
  children: ReactNode;
}

interface FullAnimesContextData {
  animeById: animeProps;
  allAnimes: animeProps[];
  topAnimes: animeProps[];
  seasonsAnimes: animeProps[];
  linksStreaming: streamingProps[];
  linksExternal: externalProps[];
  getAllAnimes: (page: number) => Promise<void>;
  getAnimeFullById: (id: number) => Promise<void>;
  getTopAnimes: () => Promise<void>;
  getSeasonsAnimes: () => Promise<void>;
  getLinksStreaming: (animeId: number) => Promise<void>;
  getLinksExternal: (animeId: number) => Promise<void>;
}

const FullAnimesContext = createContext<FullAnimesContextData>(
  {} as FullAnimesContextData
);

export const useFullAnimes = () => {
  const context = useContext(FullAnimesContext);

  if (!context) {
    throw new Error("useFullAnimes must be used within an AuthProvider");
  }

  return context;
};

export const FullAnimesProvider = ({ children }: FullAnimesProviderProps) => {
  const [allAnimes, setAllAnimes] = useState<animeProps[]>([]);
  const [topAnimes, setTopAnimes] = useState<animeProps[]>([]);
  const [seasonsAnimes, setSeasonsAnimes] = useState<animeProps[]>([]);
  const [animeById, setAnimeById] = useState<animeProps>({} as animeProps);
  const [linksStreaming, setLinksStreaming] = useState<streamingProps[]>([]);
  const [linksExternal, setLinksExternal] = useState<externalProps[]>([]);

  const getAllAnimes = useCallback(async (page: number) => {
    try {
      const response = await jikanApi.get(`/anime?page=${page}`);
      setAllAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAnimeFullById = useCallback(async (id: number) => {
    try {
      const { data } = await jikanApi.get(`anime/${id}/full`);
      setAnimeById(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getTopAnimes = useCallback(async () => {
    try {
      const response = await jikanApi.get("/top/anime?limit=10");
      setTopAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getSeasonsAnimes = useCallback(async () => {
    try {
      const response = await jikanApi.get("/seasons/now?limit=10");
      setSeasonsAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getLinksExternal = useCallback(async (animeId: number) => {
    try {
      const response = await jikanApi.get(`/anime/${animeId}/external`);
      setLinksExternal(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getLinksStreaming = useCallback(async (animeId: number) => {
    try {
      const response = await jikanApi.get(`/anime/${animeId}/streaming`);
      setLinksStreaming(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <FullAnimesContext.Provider
      value={{
        allAnimes,
        animeById,
        topAnimes,
        seasonsAnimes,
        linksExternal,
        linksStreaming,
        getAllAnimes,
        getTopAnimes,
        getSeasonsAnimes,
        getAnimeFullById,
        getLinksExternal,
        getLinksStreaming,
      }}
    >
      {children}
    </FullAnimesContext.Provider>
  );
};
