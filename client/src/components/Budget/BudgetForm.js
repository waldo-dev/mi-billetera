import React, { useState } from "react";
import { updateBudget } from "../../actions/actions";
import { useGlobalContext } from "../../context/globalContext";

const BudgetForm = ({ setShowUpdateBudget }) => {
  const [budgetInput, setBudgetInput] = useState("");
  const { user } = useGlobalContext();
  const { _id } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBudget(_id, budgetInput);
    setShowUpdateBudget(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="string"
        placeholder="Actualizar presupuesto"
        value={budgetInput}
        onChange={(e) => setBudgetInput(e.target.value)}
      ></input>
    </form>
  );
};

export default BudgetForm;
