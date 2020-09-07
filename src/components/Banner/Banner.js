import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Banner.css'

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            const { results } = request.data;
            setMovie(results[Math.floor(Math.random() * results.length - 1)])
            return request
        }
        fetchData()
    }, [fetchUrl])
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
                )`,
                backgroundPosition: "center center"
            }}>
            <div className="banner__contents">
                {/* Title */}
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                {/* div -> 2*buttons */}
                {/* Description */}
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
            </div>
        </header>
    )
}

export default Banner