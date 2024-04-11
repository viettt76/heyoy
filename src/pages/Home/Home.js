import clsx from 'clsx';
import styles from './Home.module.scss';
import Row from '~/components/Row/Row';
import { useEffect, useState } from 'react';
import { getGenresMovieList } from '~/services';

function Home() {
    const [genresMovieList, setGenresMovieList] = useState([]);

    useEffect(() => {
        const fetchGenresMovieList = async () => {
            let res = await getGenresMovieList();
            if (res?.length > 0) {
                setGenresMovieList(res);
            } else {
                setGenresMovieList([]);
            }
        };
        fetchGenresMovieList();
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            {genresMovieList?.map((genres) => {
                return <Row key={`row-${genres?.id}`} title={genres?.name} id={genres?.id} />;
            })}
        </div>
    );
}

export default Home;
