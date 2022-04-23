import React from 'react';
import styles from './ChatsLayout.module.css'

const MessagesLayout = ({children}) => {
    return (
        <div className={styles.messages}>
            {children}
        </div>
    );
};

export default MessagesLayout;