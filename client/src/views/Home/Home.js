import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SidePanel from "../../components/SidePanel/SidePanel";
import style from "./Home.module.css";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.mainContainer}>
        <SidePanel />
        <Routes>
          <Route path="/" element={<div></div>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Home;
