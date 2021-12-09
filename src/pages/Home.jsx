import React, { useState, useEffect } from "react";
import Hero from '../components/Hero';
import MovieGallery from "../components/MovieGallery";
import Footer from "../components/Footer";
import { API_URL } from '../global';
//import movieData from '../scripts/movieData.json';

/*
Home returns a section which contains hero, moviegallery and footer components.
The MovieGallery component recives moviedata as data param and 20 as itemsPerPage.
data is what is displayed to user, and itemsPerPage param decides how many items to show on one page.
movieData is the data about movies that is already scraped from tmdb site.
*/

let getRandNum = (max) => {
    return Math.floor(Math.random() * max);
}

//TODO Change the overall data transfer (efficient), or use the api here to get all data at once and then spread across the application(unefficient)

//TODO The Data is decided to go from here, change curPage to get different data

let Home = () => {

    
    const [curPage, setCurPage] = useState(1); //Current Page to fetch data according to page
    const [movieData, setMovieData] = useState({}); //Movie data according to the page is stored here

    useEffect(async () => {
        const response = await fetch(`${API_URL}/movie/all?page=${curPage}`);
    }, [curPage]);

    return(
        <section className="h-full">
            <Hero />
                <MovieGallery data={movieData} setCurPage={setCurPage} />
            <Footer />
        </section>
    )
}

export default Home;