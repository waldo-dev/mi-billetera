import React, { useEffect, useState } from "react";
import ExpensesForm from "./ExpensesForm";
import style from "./Expenses.module.css";
import { getUser } from "../../actions/actions";
import { useGlobalContext } from "../../context/globalContext";

const Expenses = () => {
  const { user, expenses, setExpenses } = useGlobalContext();
  const { _id } = user;

  useEffect(() => {
    if (_id) {
      getUser(_id).then((result) =>
        setExpenses(result.data.expenses.reverse())
      );
    }
  }, [_id, expenses]);

  return (
    <div className={style.container}>
      <ExpensesForm />
      <p className={style.title}>Ultimos gastos</p>
      <ul className={style.list}>
        {expenses.length
          ? expenses.map((expense, i) => {
              if (i < 4) {
                return (
                  <li key={i}>
                    <span>{expense.name}: </span> <span>${expense.price}</span>
                  </li>
                );
              }
            })
          : null}
      </ul>
    </div>
  );
};

export default Expenses;
