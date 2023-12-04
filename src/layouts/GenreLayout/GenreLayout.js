import { useEffect, useRef, useState } from 'react';
import { Button, Accordion, Dropdown } from 'react-bootstrap';
import _ from 'lodash';
import clsx from 'clsx';
import styles from './GenreLayout.module.scss';
import Header from '~/layouts/components/Header';
import Movie from '~/components/Movie';
import { moviesNowPlayingService, moviesPopularService, moviesTopRatedService, moviesUpcomingService } from '~/services';

const sorts = [
    { name: 'Popularity Descending', sortField: 'popularity', sortBy: 'desc' },
    { name: 'Popularity Ascending', sortField: 'popularity', sortBy: 'asc' },
    { name: 'Rating Descending', sortField: 'vote_average', sortBy: 'desc' },
    { name: 'Rating Ascending', sortField: 'vote_average', sortBy: 'asc' },
];

function GenreLayout({ title }) {
    const titlePrev = useRef();

    const [listMovies, setListMovies] = useState([]);
    const [page, setPage] = useState('');
    const [sortListMovies, setSortListMovies] = useState('Popularity Descending');

    // Create state render to change the title the component will
    // call API with page 1 and list movies empty
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (titlePrev.current !== title) {
            titlePrev.current = title;
            setPage(1);
            setListMovies([]);
            setRender(!render);
        } else {
            const fetchApiMoviesPopular = async () => {
                let res;
                switch (title) {
                    case 'Movies Popular':
                        res = await moviesPopularService(page);
                        break;
                    case 'Movies Now Playing':
                        res = await moviesNowPlayingService(page);
                        break;
                    case 'Upcoming':
                        res = await moviesUpcomingService(page);
                        break;
                    case 'Top Rated':
                        res = await moviesTopRatedService(page);
                        break;
                    default:
                        res = await moviesPopularService(page);
                }
                setListMovies((prev) => prev.concat(res));
            };
            fetchApiMoviesPopular();
        }
    }, [page, title, render]);

    const handleLoadAdd = () => {
        setPage((prev) => prev + 1);
    };

    const handleSort = (sort) => {
        setSortListMovies(sort.name);
        let cloneListMovies = _.cloneDeep(listMovies);
        cloneListMovies = _.orderBy(cloneListMovies, sort.sortField, sort.sortBy);
        setListMovies(cloneListMovies);
    };

    return (
        <div>
            <Header />
            <div className={clsx(styles.wrapper)}>
                <div className={clsx(styles.sidebar, 'col-sm-3')}>
                    <h3>{title}</h3>
                    <Accordion className={clsx(styles.selects)}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sort Results By</Accordion.Header>
                            <Accordion.Body>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {sortListMovies}
                                        <Dropdown.Menu>
                                            {sorts.map((sort, index) => {
                                                return (
                                                    <Dropdown.Item
                                                        key={`sort-${index}`}
                                                        onClick={() => handleSort(sort)}
                                                    >
                                                        {sort.name}
                                                    </Dropdown.Item>
                                                );
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className={clsx(styles.listMovies, 'col-sm-9')}>
                    {listMovies.map((movie, index) => {
                        return (
                            <div key={`movie-${index}`} className={clsx(styles.movie)}>
                                <Movie movieInfo={movie} />
                            </div>
                        );
                    })}
                    <div className={clsx(styles.loadAdd)}>
                        <Button size="lg" className={clsx(styles.loadAddBtn)} onClick={handleLoadAdd}>
                            Tải thêm
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenreLayout;
