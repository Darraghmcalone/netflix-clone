const API_KEY = '63eb19776c3c2086479e9791ecf93907'

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-UK`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-UK&with_genres=99`,
    fetchVideos: `videos?api_key=${API_KEY}`,
    fetchDetails: `?api_key=${API_KEY}&append_to_response=videos,recommendations,credits&language=en-US`
  };
  
  export default requests;