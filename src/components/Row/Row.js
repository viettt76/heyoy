import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import clsx from 'clsx';
import styles from './Row.module.scss';

import * as services from '~/services';

function Row({ title, genres = 'Top Rated' }) {
    const [listMovies, setListMovies] = useState([]);

    useEffect(() => {
        switch (genres) {
            case 'Top Rated':
                const fetchApiTopRate = async () => {
                    const results = await services.topRated()
                    setListMovies(results)
                }
                fetchApiTopRate()
                break;
            case 'Action Movies':
                const fetchApiActionMovies = async () => {
                    const results = await services.actionMovies()
                    setListMovies(results)
                }
                fetchApiActionMovies()
                break;
            case 'Comedy Movies': 
                const fetchApiComedyMovies = async () => {
                    const results = await services.comedyMovies()
                    setListMovies(results)
                }
                fetchApiComedyMovies()
                break;
            case 'Horror Movies': 
                const fetchApiHorrorMovies = async () => {
                    const results = await services.horrorMovies()
                    setListMovies(results)
                }
                fetchApiHorrorMovies()
                break;
            case 'Romance Movies': 
                const fetchApiRomanceMovies = async () => {
                    const results = await services.romanceMovies()
                    setListMovies(results)
                }
                fetchApiRomanceMovies()
                break;
            case 'Documentaries': 
                const fetchApiDocumentaries = async () => {
                    const results = await services.documentaries()
                    setListMovies(results)
                }
                fetchApiDocumentaries()
                break;
            default:
                throw new Error(`Invalid`);
        }
    }, []);

    const numberOfSlides = Math.ceil(listMovies.length / 7);

    const slides = [];
    for (let i = 0; i < numberOfSlides; i++) {
        const startIdx = i * 7;

        // Nếu muốn hiển thị 1 nửa video đầu tiên ở slide movie tiếp theo thì
        // set endIdx = startIdx + 8 và set CSS
        const endIdx = startIdx + 7;
        const moviesInSlide = listMovies.slice(startIdx, endIdx);

        slides.push(
            <Carousel.Item key={`slide-${i}`}>
                <div className={clsx(styles.rowPoster)}>
                    {moviesInSlide.map((movie, index) => {
                        return (
                            <div
                                key={`movie-${index}`}
                                style={{
                                    backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`,
                                }}
                                className={clsx(styles.moviePoster)}
                            ></div>
                        );
                    })}
                </div>
            </Carousel.Item>,
        );
    }

    return (
        <div className={clsx(styles.row)}>
            <h4 className={clsx(styles.rowTitle)}>{title}</h4>
            <Carousel interval={null}>{slides}</Carousel>
        </div>
    );
}

Row.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.string,
}

export default Row;
