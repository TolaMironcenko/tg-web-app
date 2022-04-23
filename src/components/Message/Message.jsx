import React from 'react';
import styles from './Message.module.css'

const Mes = ({children}) => {
    return (
        <div className={styles.mes}>
            {children}
        </div>
    );
};

export default Mes;