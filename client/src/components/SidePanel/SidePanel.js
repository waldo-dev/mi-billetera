import React from "react";
import style from "./SidePanel.module.css";

const SidePanel = () => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.itemList}>Mis Gastos</li>
        <li className={style.itemList}>Listas de Compras</li>
      </ul>
    </div>
  );
};

export default SidePanel;
