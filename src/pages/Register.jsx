import React from "react";
import Navbar from "../components/Navbar"
import Login from "../components/Login";
import Signup from "../components/Signup";

let Register = () => {
    let signup = true;

    return (
        <section className="font-poppins container h-full flex items-center justify-between">
            <Navbar />
            <div className="flex-grow flex justify-center">
                {signup ? <Signup /> : <Login />}
            </div>
            <div className="hidden sm:block bg-purple-600 h-full w-1/3">
                <img src="images/side-asset.png" className="h-full w-full object-cover"></img>
            </div>
        </section>
    )
}

export default Register;