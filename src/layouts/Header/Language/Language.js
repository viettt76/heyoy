import { useState, createContext } from 'react';
import clsx from 'clsx';
import Button from '~/components/Button';
import Popper from '~/components/Popper';
import styles from './Language.module.scss';

export const LanguageContext = createContext();

function Language() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    };

    return (
        // <LanguageContext.Provider value={[show, setShow]}>
            <div>
                {/* <Popper content={`hello ae`}>
                    <Button text onClick={handleClick}>
                        VI
                    </Button>
                </Popper> */}
                VI
            </div>
        // </LanguageContext.Provider>
    );
}

export default Language;
