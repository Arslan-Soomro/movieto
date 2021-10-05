import React, {useState, useEffect} from 'react';

const getMovieData = async (url) => {
    const host = 'http://localhost:3838/';
    const fullUrl = `${host}movie?link=${url}`;
    const res = await fetch(fullUrl);
    const jsonData = await res.json();

    console.log(jsonData);

    return jsonData;
}

const MovieModal = ({modalLink, exitAction}) => {

    const [modalData, setModalData] = useState(null);
    
    useEffect(() => {
        const host = 'http://localhost:3838/';
        const fullUrl = `${host}tmdb?link=${modalLink}`;
        fetch(fullUrl)
         .then(res => res.json())
         .then(data => setModalData(data));
    }, [])

    if(!modalData){
        return (
            <div className="w-full h-full fixed top-0 left-0 z-50 bg-[#00000055] flex justify-center items-center py-2">
                <h1 className="text-white">Loading</h1>
            </div>
        )
    }

    return(
        <div className="w-full h-full fixed top-0 left-0 z-50 bg-[#00000055] flex justify-center items-center py-2">
            <div className="relative bg-white border-2 border-purple-700 flex flex-col md:flex-row items-center w-11/12 max-w-4xl px-6 py-4 md:py-6 rounded container">
                <img src="images/close.svg" className="w-4 h-4 absolute top-4 right-4 cursor-pointer" onClick={() => exitAction(null)} />
                <div className="max-w-[150px] md:max-w-[201px] w-96 z-10 h-full">
                    <img src={modalData.imgsrc} className="rounded shadow-lg w-full h-auto" />
                </div>
                <div className="py-3 xs:px-8 font-poppins text-center sm:text-left">
                    <h2 className="font-bold text-2xl text-gray-800 md:text-4xl">{modalData.title}</h2>
                    <p className="text-gray-400 sm:text-lg">{modalData.tagline}</p>
                    <p className="text-gray-800 sm:text-lg my-2">{modalData.disc}</p>
                    <p className="font-bold">Score: 101%</p>
                    <p className="text-gray-400">{modalData.genre}</p>
                    <p className="text-gray-400">2001 july, 4</p>
                    <button className="p-2 mt-2 border border-purple-600 rounded text-purple-600">Add to Watchlist</button>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;