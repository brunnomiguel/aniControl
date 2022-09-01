import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { jsonApi } from "../../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@AniControl:accessToken");
    const user = localStorage.getItem("AniControl:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await jsonApi.post("/signin/", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@AniControl:accessToken", accessToken);
    localStorage.setItem("@AniControl:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@AniControl:accessToken");
    localStorage.removeItem("@AniControl:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        accessToken: data.accessToken,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
