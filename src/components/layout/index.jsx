import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTap";
import MainLoader from "../main-loader";

const Layout = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ScrollToTop />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
