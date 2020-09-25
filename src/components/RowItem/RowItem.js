import React, { useState, useEffect } from 'react'
import useModal from '../../hooks/useModal';
import useFetch from '../../hooks/useFetch'
import ModalDetails from '../Modal/ModalDetails'
import assignYoutubeTrailer from '../../helper/assignYoutubeTrailer';
import requests from '../../api/requests';
import './RowItem.css'

const baseURL = "https://image.tmdb.org/t/p/original/";

function RowItem({ movie, isLargeRow, titleId, mediaType }) {

    const [videos, setVideos] = useState([]);

    const { response, isLoading } = useFetch({
        method: "get",
        url: `/${mediaType}/${titleId}/${requests.fetchVideos}`,
    });

    useEffect(() => {
        if (response !== null && !isLoading) {
            setVideos(assignYoutubeTrailer(response.results));
        }
    }, [response, isLoading]);

    const { open, handleOpen, handleClose } = useModal()

    return (
        <>
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={titleId}
                src={`${baseURL}${movie.poster_path}`}
                alt={movie.name || movie.title}
                onClick={handleOpen}
            />
            {titleId && <ModalDetails open={open} handleClose={handleClose} videos={videos} mediaType={mediaType} titleId={titleId} />}
        </>
    )
}

export default RowItem
