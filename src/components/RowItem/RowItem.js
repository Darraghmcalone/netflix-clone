import React from 'react'
import useModal from '../../hooks/useModal';
import ModalDetails from '../Modal/ModalDetails'
import './RowItem.css'

const baseURL = "https://image.tmdb.org/t/p/original/";

function RowItem({ movie, isLargeRow, titleId, mediaType }) {

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
            {titleId && <ModalDetails open={open} handleClose={handleClose} mediaType={mediaType} titleId={titleId} />}
        </>
    )
}

export default RowItem
