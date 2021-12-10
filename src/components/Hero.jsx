import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { API_URL } from '../utils/global';
import { cutToLength } from '../utils/utils';

let Hero = () => {

  const [movieSpecs, setMovieSpecs] = useState({});
 
  useEffect( async () => {
      let response = await fetch(`${API_URL}/movie`); 
      let movie = await response.json();
      setMovieSpecs(movie);
  }, []);

  return (
    <section className="container relative p-4 h-full">
      <div className="flex flex-col-reverse sm:flex-row justify-around sm:justify-between items-center text-center h-full font-poppins">
        <div className="sm:w-1/2 sm:text-left sm:ml-10">
          <p className="text-gray-400 sm:text-xl lg:text-2xl ">Help us find you the</p>
          <h1 className="text-purple-600 font-bold text-4xl xs:text-5xl lg:text-7xl my-2">
            Perfect Movie
          </h1>
          <p className="hidden sm:block text-gray-500 lg:text-xl mb-4 max-w-xl sm:text-lg">
            Help us find you the perfect movie to watch you don't have to hustle
            through tons of movies to watch a good movie.
          </p>
          <button className="round_btn text-white bg-purple-600">
            Find Movie
          </button>
        </div>
        <div className="flex flex-col items-center sm:w-1/2 lg:w-2/5">
          <p className="text-gray-400 sm:text-lg">You may like</p>
          <h3 className="font-bold text-lg xs:text-xl sm:text-2xl lg:text-3xl text-purple-600">
            {movieSpecs.name ? cutToLength(movieSpecs.name, 25) : 'Loading'}
          </h3>
          <img
            className="w-1/2 xs:w-2/5 sm:w-1/2 my-3 sm:my-6 mx-auto rounded shadow-lg"
            src={movieSpecs.img_url || 'images/hero-img-load.jpg'}
            alt=""
          />
          <button className="round_btn text-white bg-purple-600">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;