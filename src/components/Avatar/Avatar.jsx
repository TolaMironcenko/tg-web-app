import React from 'react';
import styles from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img className={styles.avatarimg} src="https://static.remove.bg/remove-bg-web/5cc729f2c60683544f035949b665ce17223fd2ec/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="avatar" />
        </div>
    );
};

export default Avatar;