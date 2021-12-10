import React, { useState, useEffect } from "react";
import MovieGallery from "./MovieGallery";
import { API_URL } from '../global';


//Responsible for fetching appropriate data
const MovieGalleryFecth = () => {

    const [curPage, setCurPage] = useState(1); //Current Page to fetch data according to page
    const [movieData, setMovieData] = useState({}); //Movie data according to the page is stored here


    useEffect(async () => {

        const dataRes = await fetch(`${API_URL}/movie/all?page=${curPage}`);
        const data = await dataRes.json();
        const countRes = await fetch(`${API_URL}/movie/count`);
        const count = await countRes.json();
        
        //MovieData stores actual data of movies, total count of movies in database, and the totalpages that can be provided if pagination is used
        setMovieData({data: data, count: count.data.count, totalPages: count.data.totalPages})

        console.log(`${API_URL}/movie/all?page=${curPage}`);

    }, [curPage]);

    return <MovieGallery data={movieData.data} setCurPage={setCurPage} totalPages={movieData.totalPages} />
};

export default MovieGalleryFecth;