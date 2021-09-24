import React from "react";

let Signup = () => {
  return (
    <form className="flex flex-col w-max gap-4 py-4 px-2">
      <h2 className="font-bold text-purple-600 text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl my-4">
        Signup
      </h2>
      <input
        type="text"
        name="fullname"
        placeholder="Name"
        className="purp_input"
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="purp_input"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="purp_input"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="purp_input"
      />
      <input
        type="password"
        name="confirm-password"
        placeholder="confirm password"
        className="purp_input"
      />
      <div className="flex justify-between">
        <button
          type="reset"
          className="purp_outline_btn"
        >
          Reset
        </button>
        <button
          type="submit"
          className="purp_outline_btn"
        >
          Signup
        </button>
      </div>
      <p className="text-sm xs:text-base text-gray-700 mt-2">
        Already have an account !{" "}
        <a className="text-purple-600 font-bold cursor-pointer">Login</a>
      </p>
    </form>
  );
};

export default Signup;
