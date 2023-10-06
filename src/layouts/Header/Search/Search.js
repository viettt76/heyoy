import { forwardRef, useState, createContext, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import search from '~/services/searchService';
import { useDebounced } from '~/hooks';
import styles from './Search.module.scss';
import Button from '~/components/Button';
import { ClearIcon, LoadIcon } from '~/components/Icons';
import { SearchIcon as SearchIconInput } from '~/components/Icons';
import SearchResult from './SearchResult';

const SearchIcon = forwardRef(({ onClick }, ref) => {
    const [showWrapperSearch, setShowWrapperSearch] = useContext(SearchContext);

    const handleShowWrapperSearch = () => {
        setShowWrapperSearch(!showWrapperSearch);
    };

    return (
        <div ref={ref} onClick={handleShowWrapperSearch}>
            <FontAwesomeIcon className={clsx(styles.searchIcon)} icon={faMagnifyingGlass} />
        </div>
    );
});

const SearchContext = createContext();

function Search() {
    const inputRef = useRef();
    const [showWrapperSearch, setShowWrapperSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounced(searchValue, 500).trim();

    useEffect(() => {
        setLoading(true);
        const fetchApi = async () => {
            try {
                setLoading(true);
                const result = await search({ debounceValue });
                setSearchResult(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    const handleClearInput = () => {
        setSearchValue('');

        inputRef.current.focus();
    };

    return (
        <SearchContext.Provider value={[showWrapperSearch, setShowWrapperSearch]}>
            {!showWrapperSearch ? (
                <SearchIcon />
            ) : (
                <div>
                    <Tippy
                        visible={showWrapperSearch}
                        interactive
                        render={(attrs) => (
                            <div className={clsx(styles.wrapper)} tabIndex="-1" {...attrs}>
                                <div className={clsx(styles.wrapperInput)}>
                                    <SearchIconInput className={clsx(styles.searchIconInput)} />
                                    <input
                                        ref={inputRef}
                                        value={searchValue}
                                        spellCheck="false"
                                        className={clsx(styles.searchInput)}
                                        placeholder="Search for a movie, tv show, person..."
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                    {searchValue && !loading && (
                                        <ClearIcon className={clsx(styles.clearIcon)} onClick={handleClearInput} />
                                    )}
                                    {searchValue && loading && <LoadIcon className={clsx(styles.loadIcon)} />}
                                </div>
                                <SearchResult data={searchResult} />
                            </div>
                        )}
                        onClickOutside={() => setShowWrapperSearch(false)}
                    >
                        <Button
                            onClick={() => {
                                setShowWrapperSearch(!showWrapperSearch);
                            }}
                        >
                            <FontAwesomeIcon className={clsx(styles.closeSearch)} icon={faXmark} />
                        </Button>
                    </Tippy>
                </div>
            )}
        </SearchContext.Provider>
    );
}

SearchIcon.propTypes = {
    onClick: PropTypes.func,
}

export default Search;
