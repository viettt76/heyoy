import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import clsx from 'clsx';
import styles from './UserAction.module.scss';
import MultiMenu from '~/components/MultiMenu';
import Button from '~/components/Button';
import avatar from '~/assets/images/avatar.jpeg';
import Popper from '~/components/Popper/Popper';

const userPopList = [
    {
        title: 'Xem hồ sơ',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/user',
    },
    {
        title: 'Danh sách xem sau',
        icon: <FontAwesomeIcon icon={faClock} />,
        to: '/playlist',
    },
    {
        title: 'Cài đặt',
        icon: <FontAwesomeIcon icon={faGear} />,
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'VI',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'EN',
                    title: 'Tiếng Anh',
                },
            ],
        },
    },
    {
        title: 'Đăng xuất',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        separate: true,
    }
];

function UserAction({ userCurrent }) {
    const [showUserPoplist, setShowUserPoplist] = useState(true);

    return (
        <div>
            {userCurrent ? (
                <div className={clsx(styles.authAction)}>
                    <div className={clsx(styles.auth)}>
                        <Button text>
                            <FontAwesomeIcon className={clsx(styles.notify)} icon={faBell} />
                        </Button>
                    </div>
                    <div className={clsx(styles.auth)}>
                        {showUserPoplist ? (
                            <MultiMenu data={userPopList}>
                                <Button text avatar>
                                    <img className={styles.avatar} src={avatar} alt="Đào Lê Phương Hoa" />
                                </Button>
                            </MultiMenu>
                        ) : (
                            <Popper className={clsx(styles.avatarPopper)} content="Hồ sơ và cài đặt">
                                <Button>
                                    <img className={styles.avatar} src={avatar} alt="Đào Lê Phương Hoa" />
                                </Button>
                            </Popper>
                        )}
                    </div>
                </div>
            ) : (
                <div className={clsx(styles.authAction)}>
                    <div className={clsx(styles.auth)}>
                        <Button text to={'/login'}>
                            Đăng nhập
                        </Button>
                    </div>
                    <div className={clsx(styles.auth)}>
                        <Button text to={'/register'}>
                            Đăng ký
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

UserAction.propTypes = {
    userCurrent: PropTypes.bool.isRequired,
}

export default UserAction;
