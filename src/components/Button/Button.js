import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss'
import { forwardRef } from 'react';

const Button = forwardRef(({ to, href, logo, text, menu ,children, onClick }, ref) => {
    let Type = 'a';
    if (to) {
        Type = Link;
    }

    const classes = clsx(styles.btn ,{
        [styles.text]: text,
        [styles.menu]: menu,
        [styles.logo]: logo,
    })

    return (
        <Type ref={ref} className={classes} to={to} href={href} onClick={onClick}>
            {children}
        </Type>
    );
})

export default Button;
