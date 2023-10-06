import { useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import styles from './MultiMenu.module.scss';
import MenuItem from './MenuItem';

const MultiMenu = ({ placement = 'bottom', children, data }) => {
    const [history, setHistory] = useState([{ data: data }]);
    const currentMenu = history[history.length - 1];

    const renderMenu = (attrs) => (
        <div className={clsx(styles.wrapper)} tabIndex="-1" {...attrs}>
            {currentMenu.title ? (
                <div className={clsx(styles.header)}>
                    <FontAwesomeIcon className={clsx(styles.back)} icon={faChevronLeft} onClick={handleBack} />
                    <h3 className={clsx(styles.title)}>{currentMenu.title}</h3>
                </div>
            ) : (
                <></>
            )}
            {currentMenu.data.map((item, index) => {
                const isParent = !!item.children
                return (
                    <MenuItem
                        key={index}
                        item={item}
                        onClick={() => {
                            if (isParent) {
                                setHistory([...history, item.children]);
                            }
                        }}
                    />
                );
            })}
        </div>
    );

    const handleBack = () => {
        setHistory((history) => history.slice(0, history.length - 1));
    };

    const handleResetMenu = () => {
        setHistory((history) => history.slice(0, 1));
    };

    return (
        <Tippy
            delay={[200, 500]}
            zIndex="999999"
            interactive
            placement={placement}
            hideOnClick={false}
            render={renderMenu}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
};

MultiMenu.propTypes = {
    placement: PropTypes.string,
    children: PropTypes.node.isRequired,
    data: PropTypes.array.isRequired,
}

export default MultiMenu;
