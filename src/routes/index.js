import Home from '~/pages/Home';
import Popular from '~/pages/Popular';
import NowPlaying from '~/pages/NowPlaying';
import New from '~/pages/New';
import Watch from '~/pages/Watch';
import Query from '~/pages/Query';
import ListMoviesLayout from '~/layouts/ListMoviesLayout';

// Khi đăng nhập
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/popular', component: Popular },
    { path: '/now-playing', component: NowPlaying },
    { path: '/movie/new', component: New, layout: null },
    { path: '/watch/id/:id', component: Watch, layout: null },
    { path: '/keyword/:keyword/page/:currentPage', component: Query, layout: ListMoviesLayout },
];

// Khi không đăng nhập
export const privateRoutes = [];
