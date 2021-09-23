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

    </form>
  );
};

export default Login;
