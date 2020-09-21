import React from 'react'
import useFetchVideos from '../../hooks/useFetchVideos'
import useModal from '../../hooks/useModal';
import ModalDetails from '../Modal/ModalDetails'
import './RowItem.css'

const baseURL = "https://image.tmdb.org/t/p/original/";

function RowItem({ movie, isLargeRow, titleId, mediaType }) {
    const videos = useFetchVideos({ mediaType, titleId })
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
            {videos && <ModalDetails videos={videos} open={open} handleClose={handleClose} />}
        </>
    )
}

export default RowItem
