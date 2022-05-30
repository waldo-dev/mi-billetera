import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SidePanel from "../../components/SidePanel/SidePanel";
import style from "./Home.module.css";
import { Routes, Route } from "react-router-dom";
import Budget from "../../components/Budget/Budget";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.mainContainer}>
        <SidePanel />
        <Routes>
          <Route path="/" element={<Budget />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Home;
