import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from "c:/Users/HP/Desktop/Evangadi/Phase-4/Netflix-Clone/Netflix/src/utils/axios";
import requests from "../../utils/Requests";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const movies = response.data.results;
        setMovie(movies[Math.floor(Math.random() * movies.length)]);
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
      }
    })()

   }, []);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path || ''}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name || 'No Title'}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button play">Play</button>
            <button className="banner_button list">My List</button>
          </div>
          {movie?.overview && (
            <h1 className="banner_description">
              {movie.overview.length > 150
                ? movie.overview.slice(0, 147) + '...'
                : movie.overview}
            </h1>
          )}
        </div>
        <div className="banner_fadeBottom" />
      </div>
      
    </>
  );
};

export default Banner;
