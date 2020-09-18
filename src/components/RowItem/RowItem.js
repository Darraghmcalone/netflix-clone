import React, { useState, useEffect } from 'react'
import { getVideosFromMovie } from '../../axios';
import Modal from '@material-ui/core/Modal';
import './RowItem.css'

const baseURL = "https://image.tmdb.org/t/p/original/";

const assignYoutubeTrailer = (videos) => {
    const YOUTUBE_URLBASE = 'https://www.youtube.com/embed/';

    if (videos.length === 0) {
        return '';
    }

    const validVideos = videos.filter(video => video.site.toLowerCase() === 'youtube');
    const trailers = validVideos.filter(video => video.type.toLowerCase() === 'trailer');
    const teasers = validVideos.filter(video => video.type.toLowerCase() === 'teaser');

    if (trailers.length !== 0) {
        return YOUTUBE_URLBASE + trailers[0].key;
    }

    if (teasers.length !== 0) {
        return YOUTUBE_URLBASE + teasers[0].key;
    }

    return '';
};

function RowItem({ movie, isLargeRow, titleId }) {
    const [videos, setVideos] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getVideosFromMovie(titleId)
            .then(candidateVideos => setVideos(assignYoutubeTrailer(candidateVideos)));
    }, [titleId]);

    console.log(movie)

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
