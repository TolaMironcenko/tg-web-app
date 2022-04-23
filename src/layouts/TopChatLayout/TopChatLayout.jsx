import React from 'react';
import styles from './TopChatLayout.module.css'

const TopChatLayout = ({children}) => {
    return (
        <div className={styles.topchat}>
            {children}
        </div>
    );
};

export default TopChatLayout;