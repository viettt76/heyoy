import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const Menu = ({ placement = 'bottom', children, data = [] }) => {
    return (
        <Tippy
            zIndex='999999'
            interactive
            placement={placement}
            render={(attrs) => (
                <div className={clsx(styles.wrapper)} tabIndex="-1" {...attrs}>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={clsx(styles.item)}>
                                <Button menu to={item.to} href={item.href}>
                                    {item.title}
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
