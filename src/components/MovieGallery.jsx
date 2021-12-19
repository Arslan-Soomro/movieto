import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import PageBar from "./PageBar";
import MovieModal from "./MovieModal";
import { render } from "react-dom";

/*
Given some movie data, MovieGallery translates that data onto movieCards.
Other variables manage what part of data is to be displayed and how.
*/


const MovieGallery = ({data, setCurPage, totalPages, modalBtnText, modalBtnClickHandler, modalMsgText, iconType, iconSrc}) => {

    //TODO set the img src attribute of a movie card to some default background to avoid showing previous movie posters till new ones load

    const [movieModalData, setMovieModalData] = useState(null);//Provide a link to fetch (specific) movie contents and null to fetch no movies, if no movies than modal is hidden
    const mContainerRef = useRef();//Ref To Help Scroll To Top

    const updateCount = useRef(0);

    //TODO setup something so that the page doesn't go down on start, may be setup intersection with movie gallery, so only when movie gallery is visible this function is gonna work


    useEffect(() => {   
        //To Scroll To Top

        //This stops from websiite scrolling down when it initilay loads
        if(updateCount.current > 1){
            mContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        

        //Incase the given data is not array we default data to an empty array, to stop getting errors like .map is not a function, which is a specific function of array
        if(!Array.isArray(data)){
            data = [];
        }else{
            updateCount.current += 1;
        }

    }, [data]);

    return (
        <section id="movies-cont" className="py-4 px-2" ref={mContainerRef}>
            {/* Shows A Specific Movie's Data if Data is Available */}
            {movieModalData ? <MovieModal exitAction={() => setMovieModalData(null)} modalMovData={movieModalData} btnText={modalBtnText} btnClickHandler={modalBtnClickHandler} msgText={modalMsgText} /> : null}
            
            {/* Maps Available Movies to Movie Cards and then shows them collectively */}
            <div className="container grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-3 p-1 xs:p-4">
                {data ? data.map((rawData, i) => <MovieCard key={i} iconClickHandler={modalBtnClickHandler} iconSrc={iconSrc} iconType={iconType} rawData={rawData} clickHandler={() => setMovieModalData(rawData)} />) : <div className="spinner absolute bottom-0"></div> /* Play around spinner so it fits perfectly on both home and wishlist */ }
            </div>

            {/* If there are too many movies, we use PageBar component to divide movies upon different pages */}
            {totalPages ? (totalPages > 1 ?
            <PageBar setCurPage={setCurPage} totalPages={totalPages} /> : null) 
            : null}

        </section>
    )
    
}

export default MovieGallery;