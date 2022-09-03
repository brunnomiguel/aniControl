import { Route, Routes } from "react-router-dom";
import { Browse } from "../pages/Browse";
import { Dashboard } from "../pages/Dashboard";
import { SignUp } from "../pages/SignUp";

import ProtectedRoute from "./protectedRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route element={<ProtectedRoute />}>
        
      </Route> */}
      <Route path="/browse" element={<Browse />} />
      {/* <Route element={<ProtectedRoute />}>
        
      </Route> */}
    </Routes>
  );
};
