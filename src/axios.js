import axios from "axios";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY || "63eb19776c3c2086479e9791ecf93907";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default instance

export const getVideosFromMovie = async (titleId) => {
    const videosResponse = await axios({
        url: `https://api.themoviedb.org/3/movie/${titleId}/videos?api_key=${API_KEY}`,
    });
    return videosResponse.data.results;
};
