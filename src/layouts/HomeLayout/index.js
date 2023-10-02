import Header from '../Header/Header';
import clsx from 'clsx';
import styles from './HomeLayout.module.scss'

function HomeLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={clsx(styles.slider)}></div>
            <div className={clsx(styles.container)}>{children}</div>
        </div>
    );
}

export default HomeLayout;
