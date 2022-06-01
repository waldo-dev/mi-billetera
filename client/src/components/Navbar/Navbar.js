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
      <h3 className={style.logo}>Mi Billetera</h3>
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
          <Link style={styles.itemList} to="/">
            Mis gastos
          </Link>
          <Link style={styles.itemList} to="/">
            Mis listas
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
