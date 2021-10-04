import React from "react";
import Hero from '../components/Hero';
import MovieGallery from "../components/MovieGallery";
import Footer from "../components/Footer";
import movieData from '../scripts/movieData.json';

let Home = () => {
    return(
        <section className="h-full">
                <Hero />
                <MovieGallery data={movieData} itemsPerPage={20} />
                <Footer />
        </section>
    )
}

export default Home;