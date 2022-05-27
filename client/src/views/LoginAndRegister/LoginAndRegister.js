import React, { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginAndRegister.module.css";

const LoginAndRegister = () => {
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleregisterOrLogin = (e, type) => {
    switch (type) {
      case "register":
        setShowLogin(false);
        setShowRegister(true);
        break;
      case "login":
        setShowLogin(true);
        setShowRegister(false);
        break;
      default:
        setShowLogin(false);
        setShowRegister(true);
        break;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.sloganContainer}>
        <h3 className={style.sloganTitle}>Manten tus finanzas ordenadas</h3>
        <img className={style.image} src="" alt="" />
      </div>
      <div className={style.LoginRegisterContainer}>
        <div className={style.topContainer}>
          <button onClick={(e) => handleregisterOrLogin(e, "register")}>
            Registrar
          </button>
          <button onClick={(e) => handleregisterOrLogin(e, "login")}>
            Ingresar
          </button>
        </div>
        <span>Registrar</span>
        <span>Ingresar</span>
        {showLogin ? <LoginForm /> : null}
        {showRegister ? <RegisterForm /> : null}
      </div>
    </div>
  );
};

export default LoginAndRegister;
