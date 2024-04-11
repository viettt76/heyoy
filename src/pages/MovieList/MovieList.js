import { Route, Routes } from 'react-router-dom';
import MovieListLayout from '~/layouts/MovieListLayout';
import { paths } from '~/utils/constant';

const MovieList = () => {
    return (
        <Routes>
            <Route path={paths.MOVIES_POPULAR} element={<MovieListLayout title="Movies Popular" />} />
            <Route path={paths.MOVIES_NOW_PLAYING} element={<MovieListLayout title="Movies Now Playing" />} />
            <Route path={paths.MOVIES_UPCOMING} element={<MovieListLayout title="Upcoming" />} />
            <Route path={paths.MOVIES_TOP_RATED} element={<MovieListLayout title="Top Rated" />} />
        </Routes>
    );
};

export default MovieList;
