import React, { useState, useEffect, createContext, useContext } from "react";
import { UserContext } from "../utils/contexts";
import MovieGallery from "./MovieGallery";
import { API_URL } from '../utils/global';


//Responsible for fetching appropriate data
const MovieGalleryFecth = () => {

    const [curPage, setCurPage] = useState(1); //Current Page to fetch data according to page
    const [movieData, setMovieData] = useState({}); //Movie data according to the page is stored here

    const { user, setUser } = useContext(UserContext);

    //To Initialize the application with movie data, count and total pages
    useEffect(async () => {

        const dataRes = await fetch(`${API_URL}/movie/all?page=${curPage}`);
        const data = await dataRes.json();
        const countRes = await fetch(`${API_URL}/movie/count`);
        const count = await countRes.json();
        
        //MovieData stores actual data of movies, total count of movies in database, and the totalpages that can be provided if pagination is used
        setMovieData({data: data, count: count.data.count, totalPages: count.data.totalPages})

    }, []);

    //To change data whenever the page changes
    useEffect(async () => {

        const dataRes = await fetch(`${API_URL}/movie/all?page=${curPage}`);
        const data = await dataRes.json();

        setMovieData({...movieData, data: data});

    }, [curPage]);


    //TODO Name the whole data something and then split it, Add some mechanisim to catch any errors
    //TODO move this function into utils
    //TODO if user is not logged in, log the user in first
    const addToWatch = async ({ movieId }) => {

        const response = await fetch(`${API_URL}/watchlist/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token : user.token,
                movie_id: movieId
            }),
        });
        const data = await response.json();
        //console.log(data);
    }

    return <MovieGallery data={movieData.data} setCurPage={setCurPage} totalPages={movieData.totalPages} modalBtnText="Add to Watchlist" modalBtnClickHandler={addToWatch} />
};

export default MovieGalleryFecth;