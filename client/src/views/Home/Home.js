import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomeContent from "../../components/HomeContent/HomeContent";

const Home = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />}></Route>
      </Routes>
    </>
  );
};

export default Home;
