import React from "react";

let Navbar = () => {
  return (
    <div className="absolute z-10 px-3 sm:px-10 w-full font-poppins flex items-center justify-between md:justify-start top-2 xs:top-4">
      <h3 className="font-bold sm:text-xl text-purple-600">Movieto</h3>
      <div className="text-purple-600 text-sm xs:text-base">
        <button className="bg-purple-50 hover:bg-purple-100 active:bg-purple-200 mx-4 px-3 py-1 rounded-full cursor-pointer">
          Login
        </button>
        <button className="bg-purple-50 hover:bg-purple-100 active:bg-purple-200 px-3 py-1 rounded-full cursor-pointer">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
