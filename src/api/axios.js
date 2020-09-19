import axios from "axios";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY || "63eb19776c3c2086479e9791ecf93907";
const baseUrl = 'https://api.themoviedb.org/3';

const instance = axios.create({
    baseURL: baseUrl
})

export default instance

export const getVideos = async (type, titleId) => {
    const videosResponse = await axios({
        url: `${baseUrl}/${type}/${titleId}/videos?api_key=${API_KEY}`,
    });
    return videosResponse.data.results;
};
