import React from "react";
import Home from "./views/Home";
import RegisterForm from "./views/Register";
import LoginForm from "./views/Login";
import { UserProvider } from "./context/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
