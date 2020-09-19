import React, { useState, useEffect } from 'react'
import assignYoutubeTrailer from './services/assignYoutubeTrailer'
import axios from '../../api/axios'
import requests from '../../api/requests';
import Modal from '@material-ui/core/Modal';
import './RowItem.css'

const baseURL = "https://image.tmdb.org/t/p/original/";

function RowItem({ movie, isLargeRow, titleId, mediaType }) {
    const [videos, setVideos] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        async function fetchVideos() {
            const request = await axios.get(`/${mediaType}/${titleId}/${requests.fetchVideos}`)
            setVideos(assignYoutubeTrailer(request.data.results))
            return request
        }
        fetchVideos()
    }, [mediaType, titleId]);

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
