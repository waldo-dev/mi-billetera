import React from "react";
import Home from "./views/Home";
import { UserProvider } from "./context/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./views/LoginAndRegister/LoginAndRegister";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginAndRegister />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
