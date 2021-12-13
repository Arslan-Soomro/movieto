import React, { useRef } from "react";
import { loginUser } from "../utils/utils";
import { TOKEN_NAME } from "../utils/global";

let Login = () => {

  //TODO create a global token state, that changes thing when updated, probably at app
  let usernameRef = useRef();
  let passwordRef = useRef();

  return (
    <form className="flex flex-col w-max gap-4 py-4 px-2" onClick={(e) => e.preventDefault()}>
      <h2 className="font-bold text-purple-600 text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl my-4">
        Login
      </h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="purp_input"
        ref={usernameRef}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="purp_input"
        ref={passwordRef}
      />
      <button
          type="submit"
          className="purp_outline_btn"
          onClick={ async () => {
            //TODO create a seprate function for this
            //TODO also on succesfully getting the token we must navigate to home page or wish list
            //TODO incase we don't get a token, display the returned message
            const response = await loginUser(usernameRef.current.value, passwordRef.current.value);
            if(response.data){
              window.localStorage.setItem(TOKEN_NAME, response.data.token);
            }
          }}
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
