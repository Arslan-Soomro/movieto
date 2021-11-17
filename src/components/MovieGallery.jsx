import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import PageBar from "./PageBar";
import MovieModal from "./MovieModal";

/*
Given some movie data, MovieGallery translates that data onto movieCards.
Other variables manage what part of data is to be displayed and how.
*/


let MovieGallery = ({data}) => {

    const [toDisplayData, setToDisplayData] = useState([]);//Data That is displayed on current page
    const [movieModalData, setMovieModalData] = useState(null);//Provide a link to fetch (specific) movie contents and null to fetch no movies, if no movies than modal is hidden
    const mContainerRef = useRef();//Ref To Help Scroll To Top

    //For Debugging Purposes
    useEffect(() => {
        console.log(movieModalData);
    }, [movieModalData]);


    useEffect(() => {   
        //To Scroll To Top
        mContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [toDisplayData]);


    return (
        <section className="py-4 px-2" ref={mContainerRef}>
            {movieModalData ? <MovieModal exitAction={() => setMovieModalData(null)} modalLink={movieModalData} /> : null}
            <div className="container grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-3 p-1 xs:p-4">
                {toDisplayData.map((rawData, i) => <MovieCard key={i} movieTitle={rawData.title} imgSrc={rawData.imgSrc} clickHandler={() => setMovieModalData(rawData.link)} />)}
            </div>
            <PageBar maximiumPages={6} minimumItems={20} items={data} setItems={setToDisplayData} />
        </section>

    )
    
}

export default MovieGallery;