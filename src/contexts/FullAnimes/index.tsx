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
  getAllAnimes: () => void;
  getAnimeFullById: (id: number) => Promise<void>;
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
  const [animeById, setAnimeById] = useState<animeProps>({} as animeProps);

  const getAllAnimes = useCallback(async () => {
    try {
      const { data } = await jikanApi.get("/anime");
      setAllAnimes(data);
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

  return (
    <FullAnimesContext.Provider
      value={{ allAnimes, animeById, getAllAnimes, getAnimeFullById }}
    >
      {children}
    </FullAnimesContext.Provider>
  );
};
