import React, { useState, useEffect, useContext } from "react";
import MovieGallery from "./MovieGallery";
import { UserContext } from "../utils/contexts";
import { API_URL, TOKEN_NAME } from "../utils/global";

const Watchlist = () => {

    const {user, setUser} = useContext(UserContext);
    
    //An empty array is better than a null value because then using .map like functions wouldn't produce an error.
    const [watchList, setWatchlistData] = useState([]);

    useEffect(async () => {    
        //TODO cleanup, add Error Handeling, Separate this into a new function

        const accessToken = window.localStorage.getItem(TOKEN_NAME);

        if(accessToken){
            const res = await fetch(`${API_URL}/watchlist`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({token: accessToken}),
            });

            const data = await res.json();

            //Maybe check status and then assign proper data

            setWatchlistData(data);
        }
        
    }, []);

    const removeFromWatch = async ( { movieId } ) => {
        
        const response = await fetch(`${API_URL}/watchlist/remove`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token : window.localStorage.getItem(TOKEN_NAME),
                movie_id: movieId
            }),
        });
        
        const removedMoviedata = await response.json();


        //TODO separate below statements from above before moving this into watchlist.
        //TODO generate a message when a movie is removed
        //TODO close the modal when movie is removed
        
        //Removes the movie from the data stored in state to reflect change without having to reload the page
        setWatchlistData((prevData) => {
            return prevData.filter((item) => item.id != movieId);
        });
        
    }

    return(
        <div className=" w-full pt-12">
            <MovieGallery data={watchList} modalBtnText={"Remove from Watchlist"} modalBtnClickHandler={removeFromWatch}  />
        </div>
        
    );
};

export default Watchlist;