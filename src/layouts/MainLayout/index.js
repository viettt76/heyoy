import clsx from 'clsx';
import Header from '../Header/Header';
import styles from './HomeLayout.module.scss'
import Container from '../Container';
import Footer from '../Footer';

function MainLayout() {
    return (
        <div>
            <Header />
            <div className={clsx(styles.slider)}></div>
            <Container />
            <Footer />
        </div>
    );
}

export default MainLayout;
