import React, { useState } from "react";
import style from "./ExpensesForm.module.css";
import { useGlobalContext } from "../../context/globalContext";
import { addExpense } from "../../actions/actions";

const ExpensesForm = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expensePrice, setExpensePrice] = useState("");

  const { user } = useGlobalContext();
  const { _id } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    //addExpense(expenseName, expensePrice, _id).then((expense) =>
    //  console.log(expense)
    //);
  };

  return (
    <>
      <p className={style.title}>Nuevo gasto</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nombre"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Precio"
          value={expensePrice}
          onChange={(e) => setExpensePrice(e.target.value)}
        />
        <button onSubmit={(e) => handleSubmit(e)}>Agregar</button>
      </form>
    </>
  );
};

export default ExpensesForm;
