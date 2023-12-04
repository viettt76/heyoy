import clsx from 'clsx';
import Header from '../components/Header';
import styles from './MainLayout.module.scss';
import Container from './Container';
import Footer from '../components/Footer';

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
