import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './SearchResult.module.scss';
import { SearchIcon } from '~/components/Icons';

function SearchResult({ data }) {
    return (
        <ul>
            {data.map((item, id) => {
                return (
                    <li className={clsx(styles.searchResult)} key={id}>
                        <SearchIcon className={styles.searchIcon} />
                        <span className={clsx(styles.name)}>{item.title}</span>
                    </li>
                );
            })}
        </ul>
    );
}

SearchResult.propTypes = {
    data: PropTypes.array.isRequired
}

export default SearchResult;
