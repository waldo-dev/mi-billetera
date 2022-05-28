import React from "react";
import Home from "./views/Home";
import { UserProvider } from "./context/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./views/LoginAndRegister/LoginAndRegister";
import { LoginAndRegisterProvider } from "./context/loginAndRegisterContext";

function App() {
  return (
    <UserProvider>
      <LoginAndRegisterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginAndRegister />} />
          </Routes>
        </BrowserRouter>
      </LoginAndRegisterProvider>
    </UserProvider>
  );
}

export default App;
