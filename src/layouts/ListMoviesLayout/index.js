import { useParams } from 'react-router-dom';

import Header from '../Header/Header';
import ListMovies from '~/components/ListMovies';

function ListMoviesLayout() {
    const {keyword} = useParams()

    return (
        <div>
            <Header />
            <ListMovies keyword={keyword} />
        </div>
    );
}

export default ListMoviesLayout;
