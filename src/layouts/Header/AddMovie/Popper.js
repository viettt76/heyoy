import { useContext } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import clsx from 'clsx';
import styles from './AddMovie.module.scss';
import { AddMovieContext } from './AddMovie';

const Popper = ({ options, data, addMessage, placement = 'bottom', children }) => {
    const [show, setShow] = useContext(AddMovieContext);

    const handleHide = () => {
        setShow(false);
    };

    const classes = clsx(styles.popper, {
        [styles.addMessage]: addMessage,
    });

    const _content = <div>{data.map((item, index) => {
        return <p 
            key={index} 
            className={clsx(styles.contentItem, {
                [styles.options]: options
            })}
        >
            {item}
        </p>
    })}
    </div>

    return (
        <Tippy
            visible={show}
            interactive
            content={_content}
            placement={placement}
            className={classes}
            onClickOutside={handleHide}
        >
            {children}
        </Tippy>
    );
};

export default Popper;
