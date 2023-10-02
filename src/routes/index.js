import { HomeLayout } from '~/layouts';
import Home from '~/pages/Home';
import Popular from '~/pages/Popular';
import NowPlaying from '~/pages/NowPlaying';
import New from '~/pages/New';

// Khi đăng nhập
export const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/popular', component: Popular },
    { path: '/now-playing', component: NowPlaying },
    { path: '/movie/new', component: New, layout: null },
];

// Khi không đăng nhập
export const privateRoutes = [];
