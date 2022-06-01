import React, { useState } from "react";
import style from "./RegisterForm.module.css";
import { register } from "../../actions/actions";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      }
    });
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Registrarse</h2>
      <form onSubmit={(e) => handleRegister(e)}>
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
        <button onClick={(e) => handleRegister(e)} className={style.button}>
          Registrarme
        </button>
        <p>
          ¿Ya tienes cuenta?{" "}
          <span onClick={() => {}} className={style.link}>
            Ingresa
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
