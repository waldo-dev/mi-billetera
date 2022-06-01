import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { logout } from "../../actions/actions";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [itemListHidden, setItemListHidden] = useState("none");

  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const styles = {
    itemList: {
      display: itemListHidden,
      margin: 0,
      color: "0x000000",
      textDecoration: "none",
    },
    logout: {
      display: itemListHidden,
      margin: 0,
      cursor: "pointer",
    },
  };

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
      <Link to="/" className={style.logo}>
        Mi Billetera
      </Link>
      <div className={style.userSettings}>
        <p className={style.itemListUser}>{user ? user.name : null}</p>
        <img
          src="./expand_more.png"
          alt="expand more"
          className={style.expandMore}
          onClick={() => {
            if (itemListHidden === "none") {
              setItemListHidden("block");
            } else {
              setItemListHidden("none");
            }
          }}
        />
        <ul className={style.list}>
          <Link style={styles.itemList} to="/expenses">
            Mis gastos
          </Link>
          <p style={styles.logout} onClick={() => handleLogout()}>
            Logout
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
