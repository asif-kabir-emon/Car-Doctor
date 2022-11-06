import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Hearder/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="relative min-h-screen">
      <Header></Header>
      <Outlet></Outlet>
      <Footer className="absolute inset-x-0 bottom-0"></Footer>
    </div>
  );
};

export default Main;
