import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios'; // Assuming axios instance is configured
import './Row.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchData();
  }, [fetchUrl]);


  
  const handleClick = (movie) => {
    if(trailerUrl) {
        setTrailerUrl('')
    }else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search)
            console.log(urlParams);
            console.log(urlParams.get('v'));
            setTrailerUrl(urlParams.get('v'));
        })
    }
}

const opts = {
    height: '390',
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
}



  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
      <div style={{padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} 

      </div>
    </div>
  );
};

export default Row;
