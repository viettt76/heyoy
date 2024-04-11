import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Accordion, Dropdown } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import clsx from 'clsx';
import styles from './MovieListByGenres.module.scss';
import * as services from '~/services';
import Movie from '~/components/Movie';

const sorts = [
    { name: 'Popularity Descending', sortField: 'popularity', sortBy: 'desc' },
    { name: 'Popularity Ascending', sortField: 'popularity', sortBy: 'asc' },
    { name: 'Rating Descending', sortField: 'vote_average', sortBy: 'desc' },
    { name: 'Rating Ascending', sortField: 'vote_average', sortBy: 'asc' },
];

const MovieListByGenres = () => {
    const navigate = useNavigate();
    const { id, page } = useParams();
    const location = useLocation();
    const { title } = location.state;
    const [listMovies, setListMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [sortListMovies, setSortListMovies] = useState('Popularity Descending');

    useEffect(() => {
        const fetchMovieByGenres = async () => {
            const res = await services.getMovieByGenres(id, page);
            if (res?.results?.length > 0) {
                setListMovies(res?.results);
            } else {
                navigate(-1);
            }
            setTotalPage(res?.total_pages);
        };
        fetchMovieByGenres();
    }, [id, page, navigate]);

    const handleSort = (sort) => {
        setSortListMovies(sort.name);
        let cloneListMovies = _.cloneDeep(listMovies);
        cloneListMovies = _.orderBy(cloneListMovies, sort.sortField, sort.sortBy);
        setListMovies(cloneListMovies);
    };

    const handlePageClick = (e) => {
        navigate(`/movie/list/genres/${id}&page/${e.selected + 1}`, { state: { title } });
    };

    return (
        <div>
            <div className={clsx(styles.wrapper)}>
                <h3 className={clsx(styles['title'])}>{title} Movies</h3>
                <div className={clsx(styles.sidebar, 'col-sm-3')}>
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
                <div className={clsx(styles.listMovies)}>
                    {listMovies?.map((movie, index) => {
                        return (
                            <div key={`movie-${index}`} className={clsx(styles.movie)}>
                                <Movie movieInfo={movie} />
                            </div>
                        );
                    })}
                </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={totalPage}
                    previousLabel="< previous"
                    marginPagesDisplayed={3}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </div>
    );
};

export default MovieListByGenres;
