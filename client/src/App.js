import React from "react";
import "./App.css";
import Home from "./views/Home/Home";
import { GlobalContextProvider } from "./context/globalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./views/LoginAndRegister/LoginAndRegister";

function App() {
  return (
    <div className="app">
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<LoginAndRegister />} />
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
