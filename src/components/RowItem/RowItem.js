import React, { useState } from 'react'
import useFetchVideos from '../../hooks/useFetchVideos'
import Modal from '@material-ui/core/Modal';
import './RowItem.css'

const baseURL = "https://image.tmdb.org/t/p/original/";

function RowItem({ movie, isLargeRow, titleId, mediaType }) {
    const videos = useFetchVideos({ mediaType, titleId })
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={titleId}
                src={`${baseURL}${movie.poster_path}`}
                alt={movie.name || movie.title}
                onClick={handleOpen}
            />
            {videos &&
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div className="modal">
                        <iframe
                            src={videos}
                            className="youtubeIframe"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                        />
                    </div>
                </Modal>
            }
        </>
    )
}

export default RowItem
