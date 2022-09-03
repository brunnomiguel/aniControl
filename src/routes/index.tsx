import { Route, Routes } from "react-router-dom";
import { Browse } from "../pages/Browse";
import { Dashboard } from "../pages/Dashboard";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

import ProtectedRoute from "./protectedRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/browse" element={<Browse />} />
      {/* <Route element={<ProtectedRoute />}>
        
      </Route> */}
    </Routes>
  );
};
