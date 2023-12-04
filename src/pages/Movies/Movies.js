import { Route, Routes } from 'react-router-dom';
import GenreLayout from '~/layouts/GenreLayout';

const Movies = () => {
    return (
        <Routes>
            <Route path="/popular" element={<GenreLayout title="Movies Popular" />} />
            <Route path="/now-playing" element={<GenreLayout title="Movies Now Playing" />} />
            <Route path="/upcoming" element={<GenreLayout title="Upcoming" />} />
            <Route path="/top-rated" element={<GenreLayout title="Top Rated" />} />
        </Routes>
    );
};

export default Movies;
