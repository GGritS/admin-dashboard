import React, { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../components/admin-dashboard";

import { SideBar } from "../components/sidebar";

export const Root: FC = () => {
  const [isLogined] = useState(true);
  return (
    <>
      <SideBar />
      {isLogined ? (
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/setDB">set DB Page</Route>
        </Routes>
      )}
    </>
  );
};
