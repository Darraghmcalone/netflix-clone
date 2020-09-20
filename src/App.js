import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import requests from './api/requests';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';


function App() {

  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} mediaType='tv'/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow mediaType='tv' />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} mediaType='movie' />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} mediaType='movie' />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} mediaType='movie' />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} mediaType='movie' />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} mediaType='movie' />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} mediaType='movie' />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} mediaType='movie' />
    </div>
  );
}

export default App;
