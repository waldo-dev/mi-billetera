import axios from "axios";

const register = async (data) => {
  try {
    const newUser = await axios.post("http://localhost:8000/api/signup", data);
    return newUser;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const login = async (data) => {
  try {
    const user = await axios.post("http://localhost:8000/api/signin", data);
    return user;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const logout = async () => {
  try {
    await axios.post("http://localhost:8000/api/logout");
    window.localStorage.clear();
  } catch (err) {
    console.error(err);
  }
};

export { register, login, logout };
