import React from "react";

/*Needs Work Specially with looks*/
let PageBar = () => {
    return(
       <div className="bg-white text-gray-700 font-poppins mx-auto my-4 flex justify-center w-max border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <button className="pg_btn border-r w-22 rounded-l-lg">Prev</button>
            
            <div className="hidden xs:block">
                <button className="pg_btn border-r w-12">1</button>
                <button className="pg_btn border-r w-12">2</button>
                <button className="pg_btn border-r w-12">3</button>
                <button className="pg_btn border-r w-12">4</button> 
                <button className="pg_btn border-r w-12">5</button>
                <button className="pg_btn border-r w-12">6</button>
            </div>
            
            <button className="pg_btn w-22 rounded-r-lg">Next</button>
       </div>
    )
}

export default PageBar;