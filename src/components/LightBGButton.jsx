import React from 'react';
import { Link } from 'react-router-dom';

//A Styled button with light background, often used in navbar
//text - what the button dispalys
//goto - upon click where should it take the user
//clickHandler - functionality you want to provide on clicking this element

const LightBGButton = ({ text, goto, clickHandler }) => {
    //clickHandler();
    return(
        <Link to={goto}>
            <button onClick={clickHandler} className="bg-purple-50 hover:bg-purple-100 active:bg-purple-200 mx-4 px-3 py-1 rounded-full cursor-pointer">
                {text}
            </button>
        </Link>
    )
};

export default LightBGButton;