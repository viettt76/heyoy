import clsx from 'clsx';
import Header from '../Header/Header';
import styles from './HomeLayout.module.scss'
import Container from '../Container';
import Footer from '../Footer';

function HomeLayout() {
    return (
        <div>
            <Header />
            <div className={clsx(styles.slider)}></div>
            <div className={clsx(styles.container)}><Container /></div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
