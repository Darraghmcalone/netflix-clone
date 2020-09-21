import React, { useState, useEffect } from 'react';
import ModalDetails from '../Modal/ModalDetails'
import useModal from '../../hooks/useModal';
import useFetchVideos from '../../hooks/useFetchVideos';
import axios from '../../api/axios'
import './Banner.css'

function Banner({ fetchUrl, mediaType }) {
    const [movie, setMovie] = useState([])
    const { open, handleOpen, handleClose } = useModal()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            const { results } = request?.data;
            if (typeof (results) !== undefined && typeof (results) !== undefined) {
                setMovie(results[Math.floor(Math.random() * results.length - 1)])
            }
            return request
        }
        fetchData()
    }, [fetchUrl])

    const titleId = movie?.id || 81354

    const videos = useFetchVideos({ mediaType, titleId })

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${movie?.backdrop_path || '/uZKqLBIZcjaB5NEpFr4umT8ezoW.jpg'}
                )`,
                backgroundPosition: "center"
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button" onClick={handleOpen}>Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner__fade-bottom" />
            {videos && <ModalDetails videos={videos} open={open} handleClose={handleClose} />}
        </header>
    )
}

export default Banner
