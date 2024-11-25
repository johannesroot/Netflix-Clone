import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/Requests';

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        
      />
       <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
         
      />
        <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        
      />
        <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        
      />
        {/* <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
        <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
        <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
        <Row
        title="Tv Show"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={true}
      /> */}
     
    </>
  );
};

export default RowList;
