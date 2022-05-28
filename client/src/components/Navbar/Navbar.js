import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { logout } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(
    (navigate) => {
      if (!user) {
        navigate("/login");
      }
    },
    [user]
  );
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.itemListUser}>{user ? user.name : null}</li>
        <li className={style.itemListLogo}>Mi Billetera</li>
        <li>
          <button className={style.logoutButton} onClick={() => handleLogout()}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
