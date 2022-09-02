import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState,
} from "react";
import { jikanApi } from "../../services/api";
import { animeProps } from "./fullAnimes.types";

interface FullAnimesProviderProps {
  children: ReactNode;
}

interface FullAnimesContextData {
  animeById: animeProps;
  allAnimes: animeProps[];
  topAnimes: animeProps[];
  getAllAnimes: (page: number) => Promise<void>;
  getAnimeFullById: (id: number) => Promise<void>;
  getTopAnimes: () => Promise<void>;
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
  const [animeById, setAnimeById] = useState<animeProps>({} as animeProps);

  const getAllAnimes = useCallback(async (page: number) => {
    try {
      const response = await jikanApi.get(`/anime?limit=15&page=${page}`);
      setAllAnimes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getAnimeFullById = useCallback(async (id: number) => {
    try {
      const { data } = await jikanApi.get(`anime/${id}/full`);
      setAnimeById(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getTopAnimes = useCallback(async () => {
    try {
      const response = await jikanApi.get("/top/anime");
      setTopAnimes(response.data.data);
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
        getAllAnimes,
        getTopAnimes,
        getAnimeFullById,
      }}
    >
      {children}
    </FullAnimesContext.Provider>
  );
};
