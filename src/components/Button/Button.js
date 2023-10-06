import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = forwardRef(({ to, href, text, menu, closeSearch, outline, avatar, children, onClick }, ref) => {
    let Type = 'a';
    if (to) {
        Type = Link;
    }

    const classes = clsx(styles.btn, {
        [styles.text]: text,
        [styles.menu]: menu,
        [styles.outline]: outline,
    });

    return (
        <Type ref={ref} className={classes} to={to} href={href} onClick={onClick}>
            {children}
        </Type>
    );
});

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.bool,
    menu: PropTypes.bool,
    outline: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default Button;
