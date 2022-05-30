import React from "react";
import { useGlobalContext } from "../../context/globalContext";

const Budget = () => {
  const { user } = useGlobalContext();

  return <div>Budget</div>;
};

export default Budget;
