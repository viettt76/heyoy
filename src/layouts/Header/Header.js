import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import logo from '~/assets/logo.png';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import AddMovie from './AddMovie';
import Language from './Language';

const menuLeft = [
    {
        title: 'Movies',
        data: [
            {
                title: 'Popular',
                to: '/movie',
            },
            {
                title: 'Now Playing',
                to: '/movie/now-playing',
            },
            {
                title: 'Upcoming',
                to: '/movie/upcoming',
            },
            {
                title: 'Top Rated',
                to: '/movie/top-rated',
            },
        ],
    },
    {
        title: 'TV Shows',
        data: [
            {
                title: 'Popular',
                to: '/tv',
            },
            {
                title: 'Airing Today',
                to: '/tv/airing-today',
            },
            {
                title: 'On TV',
                to: '/tv/on-the-air',
            },
            {
                title: 'Top Rated',
                to: '/tv/top-rated',
            },
        ],
    },
    {
        title: 'People',
        data: [
            {
                title: 'Popular People',
                to: '/person',
            },
        ],
    },
    {
        title: 'More',
        data: [
            {
                title: 'Discussions',
                to: '/discuss',
            },
            {
                title: 'Leaderboard',
                to: '/leaderboard',
            },
            {
                title: 'Support',
                to: '/talk',
            },
            {
                title: 'API',
                href: 'https://developer.themoviedb.org/docs',
            },
        ],
    },
];

const menuRight = [
    {
        title: `Can't find a movie or TV show?
            Login to create it.`,
        data: [
            {
                title: `Can't find a movie or TV show?
                    Login to create it.
                `,
                to: '/movie',
            },
        ],
    },
];

function Header() {
    const userCurrent = false;

    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.headerRight)}>
                <Button logo to={'/'}>
                    <img className={clsx(styles.logo)} src={logo} alt="Heyoy" />
                </Button>
                <ul className={clsx(styles.nav)}>
                    {menuLeft.map((item, index) => {
                        return (
                            <li key={index} className={clsx(styles.navItem)}>
                                <Menu placement="bottom-start" data={item.data}>
                                    <Button text>{item.title}</Button>
                                </Menu>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={clsx(styles.headerLeft)}>
                <AddMovie userCurrent={userCurrent} />

                <Language />
                
                <div className={clsx(styles.auth)}>
                    <Button text to={'/login'}>
                        Đăng nhập
                    </Button>
                </div>
                <div className={clsx(styles.auth)}>
                    <Button text to={'/register'}>
                        Đăng ký
                    </Button>
                </div>
                <FontAwesomeIcon className={clsx(styles.searchIcon)} icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default Header;
