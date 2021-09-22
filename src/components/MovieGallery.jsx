import React from "react";
import MovieCard from "./MovieCard";
import PageBar from "./PageBar";

let MovieGallery = () => {
    return (
        <section className="py-4 px-2">
            <div className="container grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-3 p-1 xs:p-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
            <PageBar />
        </section>

    )
    
}

export default MovieGallery;