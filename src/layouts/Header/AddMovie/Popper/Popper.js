import { useContext } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import clsx from 'clsx';
import styles from './Popper.module.scss';
import { AddMovieContext } from '../AddMovie';

const Popper = ({ content, addMessage, placement = 'bottom', children }) => {
    const [show, setShow] = useContext(AddMovieContext);

    const handleHide = () => {
        setShow(false)
    }

    const classes = clsx(styles.wrapper, {
        [styles.addMessage]: addMessage,
    });
    
    const _content = <span className={clsx(styles.content)}>{content}</span>;

    return (
        <Tippy visible={show} interactive placement={placement} content={_content} className={classes} onClickOutside={handleHide}>
            {children}
        </Tippy>
    );
};

export default Popper;
