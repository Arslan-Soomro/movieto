import React from "react";

let Login = () => {
  return (
    <form className="flex flex-col w-max gap-4 py-4 px-2">
      <h2 className="font-bold text-purple-600 text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl my-4">
        Login
      </h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="purp_input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="purp_input"
      />
      <button
          type="submit"
          className="purp_outline_btn"
        >
          Login
        </button>
      <p className="text-sm xs:text-base text-gray-700 mt-2">
        Don't have an account !{" "}
        <a className="text-purple-600 font-bold cursor-pointer">Signup</a>
      </p>
    </form>
  );
};

export default Login;
