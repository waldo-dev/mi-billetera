import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { getUser } from "../../actions/userActions";

const Budget = () => {
  const { user } = useGlobalContext();
  const { _id } = user;
  const [budget, setBudget] = useState();

  useEffect(() => {
    if (_id) {
      getUser(_id).then((result) => setBudget(result.data.budget));
    }
  }, []);

  return <div>{budget ? budget : null}</div>;
};

export default Budget;
