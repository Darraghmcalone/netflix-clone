import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import './Row.css'
import RowItem from '../RowItem/RowItem';

export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <RowItem key={movie.id} movie={movie} titleId={movie.id} isLargeRow={isLargeRow} />
                ))}
            </div>
        </div>
    )
}
