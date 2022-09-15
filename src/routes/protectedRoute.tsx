import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

export default function ProtectedRoute() {
  let { user } = useAuth();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  return <Outlet />;
}
