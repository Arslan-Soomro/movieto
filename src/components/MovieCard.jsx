import React, { useState } from "react";

let MovieCard = (props) => {
    return (    
       <div className="w-32 xs:w-36 sm:w-40 lg:w-44 my-1 cursor-pointer">
            <img src={props.imgSrc} className="w-full h-auto rounded mx-auto shadow-lg cursor-pointer" onClick={props.clickHandler} />
            <h3 className="font-poppins font-normal text-center text-gray-800 text-sm xs:text-base lg:text-lg mt-3">{props.movieTitle}</h3>
        </div>
    )
}

export default MovieCard;