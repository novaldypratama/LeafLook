import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_white.svg";
import { LoginContext } from "../App";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useContext(() => {
    console.log(loggedIn);
  });

  return (
    <nav className="bg-[#2F311B]">
      <div className="flex justify-between items-center py-4 px-6">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div>
          <div className="flex flex-row space-x-14 px-6">
            <Link to="/check-plant-page">
              <button className="text-white font-roboto text-[15px] hover:transform hover:scale-105 hover:rotate-4 transition-all duration-700">
                CHECK PLANT
              </button>
            </Link>
            {/* <Link to="/">
              <button className="text-white font-roboto text-[15px]">
                MY PLANT
              </button>
            </Link> */}
            <Link to={loggedIn ? "/" : "/register"}>
              <button onClick={loggedIn ? handleLogout : null} className="text-white text-center font-roboto text-[15px] border-solid rounded-md px-2 border-2 border-white hover:scale-110 transform transition-all duration-200">
                {loggedIn ? "LOGOUT" : "REGISTER"}
              </button>
            </Link>
            <Link to={loggedIn ? null : "/login"}>
              <button className="bg-white text-[#2F311B] text-center rounded-md px-4 font-roboto text-[15px] border-white hover:scale-110 transform transition-all duration-200">
                {loggedIn ? null : "LOGIN"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
