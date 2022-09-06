import { useAuth } from "../../contexts/Auth";
import { LandingContent } from "./LandingContent";

export const LandingPage = () => {
  const { signIn } = useAuth();

  signIn({ email: "kenzinho@mail.com", password: "123456" });
  return <LandingContent />;
};
