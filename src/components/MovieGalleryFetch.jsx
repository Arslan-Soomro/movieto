import React, { useState, useEffect, createContext, useContext } from "react";
import { UserContext } from "../utils/contexts";
import MovieGallery from "./MovieGallery";
import { TOKEN_NAME } from '../utils/global';
import { getFrom, postTo } from "../utils/utils";
import { useNavigate } from "react-router-dom";


//Responsible for fetching appropriate data
const MovieGalleryFecth = () => {

    const [curPage, setCurPage] = useState(1); //Current Page to fetch data according to page
    const [movieData, setMovieData] = useState({}); //Movie data according to the page is stored here
    const [modalMsg, setModalMsg] = useState("");

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    //To Initialize the application with movie data, count and total pages
    useEffect(async () => {

        const data = await getFrom(`/movie/all?page=${curPage}`);
        const count = await getFrom(`/movie/count`);
        
        //MovieData stores actual data of movies, total count of movies in database, and the totalpages that can be provided if pagination is used
        setMovieData({data: data, count: count.data.count, totalPages: count.data.totalPages})

    }, []);

    //To change data whenever the page changes
    useEffect(async () => {

        const data = await getFrom(`/movie/all?page=${curPage}`);

        setMovieData({...movieData, data: data});

    }, [curPage]);


    const addToWatch = async ({ movieId }) => {

        console.log("Waht");
        
        const resData = await postTo('/watchlist/add', { token: window.localStorage.getItem(TOKEN_NAME), movie_id: movieId}, true, setUser);

        if(!user.isLogged){
            navigate('/login');
        }

        setModalMsg(resData.message);
    
    }

    return <MovieGallery data={movieData.data} setCurPage={setCurPage} totalPages={movieData.totalPages} modalBtnText="Add to Watchlist" modalMsgText={modalMsg} modalBtnClickHandler={addToWatch} />
};

export default MovieGalleryFecth;