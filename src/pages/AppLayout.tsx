import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/UI/Navbar";

const AppLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
