import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { getUser } from "../../actions/actions";
import BudgetForm from "./BudgetForm";
import style from "./Budget.module.css";

const Budget = () => {
  const [budget, setBudget] = useState("");
  const [showUpdateBudget, setShowUpdateBudget] = useState(false);

  const { user } = useGlobalContext();
  const { _id } = user;

  useEffect(() => {
    if (_id) {
      getUser(_id).then((result) => setBudget(result.data.budget));
    }
  }, [_id, budget]);

  return (
    <div className={style.container}>
      {budget !== "" && budget === "0" ? (
        <>
          <BudgetForm setShowUpdateBudget={setShowUpdateBudget} />
        </>
      ) : (
        <>
          <span className={style.budgetSpan}>Presupuesto </span>
          <div>
            <h3 className={style.budget}> ${budget}</h3>
            <img
              src="./edit.png"
              alt="edit"
              onClick={() => {
                if (showUpdateBudget === false) {
                  setShowUpdateBudget(true);
                } else {
                  setShowUpdateBudget(false);
                }
              }}
              className={style.budgetEdit}
            />
          </div>
        </>
      )}
      {showUpdateBudget ? (
        <BudgetForm setShowUpdateBudget={setShowUpdateBudget} />
      ) : null}
    </div>
  );
};

export default Budget;
