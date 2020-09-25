import React, { useState, useEffect } from 'react';
import ModalDetails from '../Modal/ModalDetails'
import useModal from '../../hooks/useModal';
import useFetch from '../../hooks/useFetch';
import requests from '../../api/requests';
import assignYoutubeTrailer from '../../helper/assignYoutubeTrailer';
import './Banner.css'

function Banner({ fetchUrl, mediaType }) {
    const [movie, setMovie] = useState([])
    const { open, handleOpen, handleClose } = useModal()
    const [videos, setVideos] = useState([]);

    const { response: bannerRes, isLoading: isBannerLoading } = useFetch({
        method: "get",
        url: `${fetchUrl}`,
    });

    const { response: videoRes, isLoading: isVidLoading } = useFetch({
        method: "get",
        url: `/${mediaType}/${movie?.id}/${requests.fetchVideos}`,
    });

    useEffect(() => {
        if (bannerRes !== null && !isBannerLoading) {
            const { results } = bannerRes;
            setMovie(results[Math.floor(Math.random() * results.length - 1)])
        }
    }, [bannerRes, isBannerLoading]);

    useEffect(() => {
        if (videoRes !== null && !isVidLoading) {
            setVideos(assignYoutubeTrailer(videoRes.results));
        }
    }, [videoRes, isVidLoading]);

    const truncate = (str, n) => str?.length > n ? str.substr(0, n - 1) + '...' : str;

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
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
