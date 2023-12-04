import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import clsx from 'clsx';
import styles from './Row.module.scss';
import * as services from '~/services';
import Movie from '~/components/Movie';

function Row({ title, genres = 'Top Rated' }) {
    const [listMovies, setListMovies] = useState([]);

    useEffect(() => {
        switch (genres) {
            case 'Top Rated':
                const fetchApiTopRate = async () => {
                    const results = await services.topRatedService();
                    setListMovies(results);
                };
                fetchApiTopRate();
                break;
            case 'Action Movies':
                const fetchApiActionMovies = async () => {
                    const results = await services.actionMoviesService();
                    setListMovies(results);
                };
                fetchApiActionMovies();
                break;
            case 'Comedy Movies':
                const fetchApiComedyMovies = async () => {
                    const results = await services.comedyMoviesService();
                    setListMovies(results);
                };
                fetchApiComedyMovies();
                break;
            case 'Horror Movies':
                const fetchApiHorrorMovies = async () => {
                    const results = await services.horrorMoviesService();
                    setListMovies(results);
                };
                fetchApiHorrorMovies();
                break;
            case 'Romance Movies':
                const fetchApiRomanceMovies = async () => {
                    const results = await services.romanceMoviesService();
                    setListMovies(results);
                };
                fetchApiRomanceMovies();
                break;
            case 'Documentaries':
                const fetchApiDocumentaries = async () => {
                    const results = await services.documentariesService();
                    setListMovies(results);
                };
                fetchApiDocumentaries();
                break;
            default:
                throw new Error(`Invalid`);
        }
    }, [genres]);

    const numberMoviesInSlide = 7;

    const numberOfSlides = Math.ceil(listMovies?.length / numberMoviesInSlide);

    const slides = [];
    for (let i = 0; i < numberOfSlides; i++) {
        const startIdx = i * numberMoviesInSlide;

        // Nếu muốn hiển thị 1 nửa video đầu tiên ở slide movie tiếp theo thì
        // set endIdx = startIdx + 8 và set CSS
        const endIdx = startIdx + numberMoviesInSlide;
        const moviesInSlide = listMovies.slice(startIdx, endIdx);

        slides.push(
            <Carousel.Item key={`slide-${i}`}>
                <div className={clsx(styles.rowPoster)}>
                    {moviesInSlide.map((movie, index) => {
                        return (
                            <Movie
                                key={`movie-${index}`}
                                movieInfo={movie}
                                indexMovieInSlide={index}
                                numberMoviesInSlide={numberMoviesInSlide}
                            />
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
};

export default Row;
