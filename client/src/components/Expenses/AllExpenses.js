import React, { useEffect, useState } from "react";
import { getUser } from "../../actions/actions";
import { useGlobalContext } from "../../context/globalContext";
import style from "./AllExpenses.module.css";

const AllExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  const { user } = useGlobalContext();
  const { _id } = user;

  useEffect(() => {
    if (_id) {
      getUser(_id).then((result) =>
        setExpenses(result.data.expenses.reverse())
      );
    }
  }, [_id, expenses]);

  return (
    <div>
      <h3>Mis Gastos</h3>
      <ul className={style.list}>
        {expenses.length
          ? expenses.map((expense, i) => {
              return (
                <li key={i}>
                  <span>{expense.name}: </span> <span>${expense.price}</span>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default AllExpenses;
