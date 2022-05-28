import React from "react";
import Home from "./views/Home/Home";
import { GlobalContextProvider } from "./context/globalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./views/LoginAndRegister/LoginAndRegister";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<LoginAndRegister />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
