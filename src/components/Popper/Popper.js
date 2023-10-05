import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import clsx from 'clsx';
import styles from './Popper.module.scss';

function Popper({ className, content, children }) {
    const _content = <div className={clsx(styles.content)}>{content}</div>;

    return (
        <Tippy className={className} interactive content={_content} placement="bottom">
            {children}
        </Tippy>
    );
}

export default Popper;
