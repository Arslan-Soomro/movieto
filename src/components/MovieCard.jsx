import React from "react";

let MovieCard = () => {
    return (    
       <div className="w-32 xs:w-36 sm:w-40 lg:w-44 my-1">
            <img src="images/card-counter-poster.jpg" className="w-full h-auto rounded mx-auto shadow-lg" />
            <h3 className="font-poppins font-normal text-center text-gray-800 text-sm xs:text-base lg:text-lg mt-3">The Card Counter</h3>
        </div>
    )
}

export default MovieCard;