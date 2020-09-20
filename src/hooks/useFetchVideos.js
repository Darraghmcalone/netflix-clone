import { useState, useEffect } from 'react'
import axios from '../api/axios'
import requests from '../api/requests';
import assignYoutubeTrailer from '../helper/assignYoutubeTrailer'

const useFetchVideos = ({mediaType, titleId}) => {
    const [videos, setVideos] = useState('');
    useEffect(() => {
        async function fetchVideos() {
            const request = await axios.get(`/${mediaType}/${titleId}/${requests.fetchVideos}`)
            setVideos(assignYoutubeTrailer(request.data.results))
            return request
        }
        fetchVideos()
    }, [mediaType, titleId]);
    return videos
}
export default useFetchVideos