import React, { useState } from "react";
import style from "./LoginForm.module.css";
import { login } from "../../actions/userActions";
import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    login(data).then(({ data }) => {
      if (data) {
        setUser(data);
        navigate("/");
      }
    });
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className={style.labelInputContainer}>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className={style.labelInputContainer}>
          <label htmlFor="password">Confirmar contraseña</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button onClick={(e) => handleLogin(e)} className={style.button}>
          Ingresar
        </button>
        <p>
          ¿No tienes cuenta? <Link to="/signup">Registrate</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
