import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = forwardRef(({ to, href, logo, text, menu, closeSearch, outline, avatar, children, onClick }, ref) => {
    let Type = 'a';
    if (to) {
        Type = Link;
    }

    const classes = clsx(styles.btn, {
        [styles.text]: text,
        [styles.menu]: menu,
        [styles.logo]: logo,
        [styles.outline]: outline,
        [styles.closeSearch]: closeSearch,
        [styles.avatar]: avatar
    });

    return (
        <Type ref={ref} className={classes} to={to} href={href} onClick={onClick}>
            {children}
        </Type>
    );
});

export default Button;
