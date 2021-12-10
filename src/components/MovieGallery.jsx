import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import PageBarOld from "./PageBarOld";
import PageBar from "./PageBar";
import MovieModal from "./MovieModal";

/*
Given some movie data, MovieGallery translates that data onto movieCards.
Other variables manage what part of data is to be displayed and how.
*/


const MovieGallery = ({data, setCurPage, totalPages}) => {

    const [movieModalData, setMovieModalData] = useState(null);//Provide a link to fetch (specific) movie contents and null to fetch no movies, if no movies than modal is hidden
    const mContainerRef = useRef();//Ref To Help Scroll To Top

    /*
    //For Debugging Purposes
    useEffect(() => {
        console.log(movieModalData);
    }, [movieModalData]);
    */

    useEffect(() => {   
        //To Scroll To Top
        mContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [data]);

    return (
        <section className="py-4 px-2" ref={mContainerRef}>
            {movieModalData ? <MovieModal exitAction={() => setMovieModalData(null)} modalLink={movieModalData} /> : null}
            
            <div className="container grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-3 p-1 xs:p-4">
                {data ? data.map((rawData, i) => <MovieCard key={i} movieTitle={rawData.name} imgSrc={rawData.img_url} clickHandler={() => setMovieModalData(rawData.url)} />) : <div className="spinner absolute bottom-0"></div> }
            </div>
      
            <PageBar setCurPage={setCurPage} totalPages={totalPages}/>
        </section>

    )
    
}

export default MovieGallery;