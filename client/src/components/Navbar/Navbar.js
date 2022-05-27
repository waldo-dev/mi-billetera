import React, { useEffect } from "react";
import { useUser } from "../../context/userContext";
import { logout } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(
    (navigate) => {
      if (!user) {
        navigate("/login");
      }
    },
    [user]
  );
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <ul>
        <li>Bienvenid@ {user ? user.name : null}</li>
        <li>
          <button onClick={() => handleLogout()}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
