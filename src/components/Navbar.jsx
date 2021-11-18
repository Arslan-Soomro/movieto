import React from "react";
import { Link } from 'react-router-dom';

let Navbar = () => {
  return (
    <div className="absolute z-10 top-2 xs:top-4 w-full">
      <div className="container px-3 sm:px-10 font-poppins flex items-center justify-between md:justify-start">
        <Link to="/">
          <h3 className="font-bold xs:text-xl text-purple-600">Movieto</h3>
        </Link>
        <div className="text-purple-600 text-sm xs:text-base">
          <Link to="/login">
            <button className="bg-purple-50 hover:bg-purple-100 active:bg-purple-200 mx-4 px-3 py-1 rounded-full cursor-pointer">
              Login
            </button>
          </Link>
          <Link to="/signup">
          <button className="bg-purple-50 hover:bg-purple-100 active:bg-purple-200 px-3 py-1 rounded-full cursor-pointer">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
