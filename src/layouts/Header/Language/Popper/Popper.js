import { useContext } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import clsx from 'clsx';
import styles from './Popper.module.scss';
import { LanguageContext } from '../Language';

const Popper = ({ language, addOption, placement = 'bottom', children }) => {
    const [show, setShow] = useContext(LanguageContext);

    const handleHide = () => {
        setShow(false);
    };

    const classes = clsx(styles.wrapper, {
        [styles.addOption]: addOption,
    });

    const _content = (
        <div className={clsx(styles.content)}>
            <h3>{language.title}</h3>
            <select className={clsx(styles.select)}>
                {language.data.map((item, index) => {
                    return <option key={index}>{item.title}</option>;
                })}
            </select>
        </div>
    );

    return (
        <Tippy
            visible={show}
            interactive
            placement={placement}
            content={_content}
            className={classes}
            onClickOutside={handleHide}
        >
            {children}
        </Tippy>
    );
};

export default Popper;
