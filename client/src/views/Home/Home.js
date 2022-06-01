import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HomeContent from "../../components/HomeContent/HomeContent";
import AllExpenses from "../../components/Expenses/AllExpenses";

const Home = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />}></Route>
        <Route path="/expenses" element={<AllExpenses />}></Route>
      </Routes>
    </>
  );
};

export default Home;
