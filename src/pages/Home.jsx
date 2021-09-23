import React from "react";
import Hero from '../components/Hero';
import MovieGallery from "../components/MovieGallery";
import Footer from "../components/Footer";

let Home = () => {
    return(
        <section className="h-full">
                <Hero />
                <MovieGallery />
                <Footer />
        </section>
    )
}

export default Home;