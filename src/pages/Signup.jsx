import React from "react";
import Navbar from "../components/Navbar"

let Signup = () => {
    return (
        <section className="font-poppins container h-full flex items-center justify-evenly">
            <Navbar />
            <form className="flex flex-col gap-4 py-4 px-2">
                <h2 className="font-bold text-purple-600 text-center text-2xl xs:text-3xl my-4">Signup</h2>
                <input type="text" name="fullname" placeholder="Name" className="purp_input" />
                <input type="text" name="username" placeholder="Username" className="purp_input" />
                <input type="text" name="email" placeholder="Email" className="purp_input" />
                <input type="password" name="password" placeholder="password" className="purp_input" />
                <input type="password" name="confirm-password" placeholder="confirm password" className="purp_input" />
                <div className="flex justify-between">
                    <button type="reset" className="border border-purple-600 text-purple-700 text-sm xs:text-base px-2 py-1 rounded font-bold">Reset</button>
                    <button type="submit" className="border border-purple-600 text-purple-700 text-sm xs:text-base px-2 py-1 rounded font-bold">Submit</button>
                </div>
                <p className="text-sm xs:text-base text-gray-700 mt-4">Already have an account ! <a className="text-purple-600 font-bold cursor-pointer">Login</a></p>
            </form>
            <div className="hidden sm:block bg-purple-600 h-full w-1/3">
                <img src="images/side-asset.png" className="h-full w-full object-cover"></img>
            </div>
        </section>
    )
}

export default Signup;