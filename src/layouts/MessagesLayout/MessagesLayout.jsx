import React from 'react';
import styles from './MessagesLayout.module.css'

const ChatLayout = ({children}) => {
    return (
        <div className={styles.chatlayout}>
            {children}
        </div>
    );
};

export default ChatLayout;