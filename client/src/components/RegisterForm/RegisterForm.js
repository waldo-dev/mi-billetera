import React, { useState } from "react";
import style from "./RegisterForm.module.css";
import { register } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    register(data).then(({ data }) => {
      if (data) {
        navigate("/login");
      }
    });
  };

  return (
    <form onSubmit={(e) => handleRegister(e)} className={style.container}>
      <div className={style.labelInputContainer}>
        <label htmlFor="name">Nombre</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
        />
      </div>
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
        <label htmlFor="password">Contraseña</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div className={style.labelInputContainer}>
        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
        />
      </div>
      <button onClick={(e) => handleRegister(e)}>Registrarme</button>
    </form>
  );
};

export default RegisterForm;
