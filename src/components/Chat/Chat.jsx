import React from 'react';
import styles from './Chat.module.css'

const Message = ({children}) => {
    return (
        <div className={styles.message}>
            {children}
        </div>
    );
};

export default Message;