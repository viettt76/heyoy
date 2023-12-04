import clsx from 'clsx';
import styles from './Container.module.scss';
import Row from '~/components/Row/Row';

function Container() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Row title='Top Rated' genres = 'Top Rated' />
            <Row title='Action Movies' genres = 'Action Movies' />
            <Row title='Comedy Movies' genres = 'Comedy Movies' />
            <Row title='Horror Movies' genres = 'Horror Movies' />
            <Row title='Romance Movies' genres = 'Romance Movies' />
            <Row title='Documentaries' genres = 'Documentaries' />
        </div>
    );
}

export default Container;
