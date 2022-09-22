import { useAuth } from "../contexts/Auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  let { user } = useAuth();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  return <Outlet />;
}
