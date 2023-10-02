import { useState, createContext } from 'react';
import clsx from 'clsx';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import Popper from './Popper';
import styles from './AddMovie.module.scss';

export const AddMovieContext = createContext();

function AddMovie({ userCurrent }) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    };

    return (
        <AddMovieContext.Provider value={[show, setShow]}>
            {userCurrent ? (
                <h1>Nếu có đăng nhập</h1>
            ) : (
                <div>
                    <Popper addMessage content={`Can't find a movie or TV show? Login to create it.`}>
                        <Button text>
                            <FontAwesomeIcon className={clsx(styles.addIcon)} icon={faPlus} onClick={handleClick} />
                        </Button>
                    </Popper>
                </div>
            )}
        </AddMovieContext.Provider>
    );
}

export default AddMovie;
