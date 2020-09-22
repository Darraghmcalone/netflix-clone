import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import useModal from '../../hooks/useModal';
import ModalDetails from '../Modal/ModalDetails'
import './RowItem.css'
import requests from '../../api/requests';
import assignYoutubeTrailer from '../../helper/assignYoutubeTrailer';

const baseURL = "https://image.tmdb.org/t/p/original/";

function RowItem({ movie, isLargeRow, titleId, mediaType }) {
    const { response, isLoading } = useFetch({
        method: "get",
        url: `/${mediaType}/${titleId}/${requests.fetchVideos}`,
    });
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (response !== null) {
            setVideos(assignYoutubeTrailer(response.results));
        }
    }, [response]);

    const { open, handleOpen, handleClose } = useModal()

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={titleId}
                src={`${baseURL}${movie.poster_path}`}
                alt={movie.name || movie.title}
                onClick={handleOpen}
            />
            {videos && <ModalDetails videos={videos} open={open} handleClose={handleClose} />}
        </>
    )
}

export default RowItem
