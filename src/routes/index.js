import ListMoviesLayout from '~/layouts/ListMoviesLayout';
import HeaderFooterLayout from '~/layouts/HeaderFooterLayout';

import Home from '~/pages/Home';
import Watch from '~/pages/Watch';
import Query from '~/pages/Query';
import MoviesPopular from '~/pages/MoviesPopular';
import Movies from '~/pages/Movies';

import { paths } from '~/utils/constant';

// Khi đăng nhập
export const publicRoutes = [
    { path: paths.HOME, component: Home },
    // { path: paths.MOVIES_POPULAR, component: MoviesPopular, layout: null },
    { path: '/movie/*', component: Movies, layout: null },
    // { path: '/movie/now-playing', component: MoviesNowPlaying },
    { path: paths.WATCH_MOVIE, component: Watch, layout: HeaderFooterLayout },
    { path: paths.QUERY, component: Query, layout: ListMoviesLayout },
];

// Khi không đăng nhập
export const privateRoutes = [];
