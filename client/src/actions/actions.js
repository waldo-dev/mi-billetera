import axios from "axios";
axios.defaults.withCredentials = true;

const register = async (data) => {
  try {
    const newUser = await axios.post(
      "http://localhost:8000/api/user/signup",
      data
    );
    return newUser;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const login = async (data) => {
  try {
    const user = await axios.post(
      "http://localhost:8000/api/user/signin",
      data
    );
    return user;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const logout = async () => {
  try {
    await axios.post("http://localhost:8000/api/user/logout", {
      withCredentials: true,
    });
    window.localStorage.clear();
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (id) => {
  try {
    const user = await axios.get(`http://localhost:8000/api/user/${id}`, {
      withCredentials: true,
    });
    return user;
  } catch (err) {
    console.error(err);
  }
};

const updateBudget = async (id, newBudget) => {
  try {
    const user = await getUser(id);
    const { data } = user;
    const budget = await axios.put(
      `http://localhost:8000/api/user/${id}/budget`,
      {
        name: data.name,
        _id: data._id,
        email: data.email,
        password: data.password,
        expenses: data.expenses,
        scripts: data.scripts,
        budget: newBudget,
      },
      {
        withCredentials: true,
      }
    );
    return budget;
  } catch (err) {
    console.error(err);
  }
};

const addExpense = async (data) => {
  try {
    const { expenseName, expensePrice, _id } = data;
    const newExpense = await axios.post(
      "http://localhost:8000/api/expense",
      {
        name: expenseName,
        price: expensePrice,
        userId: _id,
      },
      { withCredentials: true }
    );
    return newExpense;
  } catch (err) {
    console.error(err);
  }
};

export { register, login, logout, getUser, updateBudget, addExpense };
