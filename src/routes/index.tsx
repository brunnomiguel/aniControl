import { Route, Routes } from "react-router-dom";
import { Browse } from "../pages/Browse";
import { Dashboard } from "../pages/Dashboard";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import ProtectedRoute from "./protectedRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/browse" element={<Browse />} />
      </Route>
    </Routes>
  );
};
