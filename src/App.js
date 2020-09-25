import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import requests from '../src/api/requests';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import { Typography } from '@material-ui/core';


function App() {

  return (
    <div className="app">

      {requests.fetchNetflixOriginals &&
        requests.fetchTrending &&
        requests.fetchTopRated &&
        requests.fetchActionMovies &&
        requests.fetchRomanceMovies &&
        requests.fetchComedyMovies &&
        requests.fetchDocumentaries &&
        requests.fetchHorrorMovies
        ? (
          <>
            <Nav />
            <Banner fetchUrl={requests.fetchNetflixOriginals} mediaType='tv' />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow mediaType='tv' />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} mediaType='movie' />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} mediaType='movie' />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} mediaType='movie' />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} mediaType='movie' />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} mediaType='movie' />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} mediaType='movie' />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} mediaType='movie' />
          </>
        ) : (
          <Typography variant="h3" color="secondary" align="center">
            Loading
          </Typography>
        )}
    </div>
  );
}

export default App;
