import React, { useEffect, useState } from "react";
import ExpensesForm from "./ExpensesForm";
import style from "./Expenses.module.css";
import { getUser } from "../../actions/actions";
import { useGlobalContext } from "../../context/globalContext";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const { user } = useGlobalContext();
  const { _id } = user;

  useEffect(() => {
    if (_id) {
      getUser(_id).then((result) => setExpenses(result.data.expenses));
    }
  }, [_id, expenses]);
  return (
    <div className={style.container}>
      <ExpensesForm />
      <p className={style.title}>Ultimos gastos</p>
      <ul className={style.list}>
        {expenses.length
          ? expenses.map((expense, i) => {
              if (i < 4) return <li key={i}>{expense}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default Expenses;
