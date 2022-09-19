import { createContext, useContext, useState, ReactNode } from "react";

import { jsonApi } from "../../services/api";

import { useNavigate } from "react-router-dom";

interface IauthProvider {
  children: ReactNode;
}

interface Iuser {
  id: number;
  name: string;
  email: string;
}

interface IauthState {
  accessToken: string;
  user: Iuser;
}

interface IsignInCredentials {
  email: string;
  password: string;
}

interface IauthContextData {
  user: Iuser;
  accessToken: string;
  signIn: (credentials: IsignInCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<IauthContextData>({} as IauthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }: IauthProvider) => {
  const [data, setData] = useState<IauthState>(() => {
    const accessToken = localStorage.getItem("@AniControl:accessToken");
    const user = localStorage.getItem("@AniControl:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as IauthState;
  });

  const navigate = useNavigate();

  const signIn = async ({ email, password }: IsignInCredentials) => {
    const response = await jsonApi.post("/signin/", { email, password });

    const { accessToken, user } = response.data;

    localStorage.setItem("@AniControl:accessToken", accessToken);
    localStorage.setItem("@AniControl:user", JSON.stringify(user));

    setData({ accessToken, user });

    navigate("/dashboard", { replace: true });
  };

  const signOut = () => {
    localStorage.removeItem("@AniControl:accessToken");
    localStorage.removeItem("@AniControl:user");

    setData({} as IauthState);
  };

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
