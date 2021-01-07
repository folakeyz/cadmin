import React from 'react'
import styles from './styles.module.css';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

export default function ProfileNav() {
    return (
        <div className={styles.nav}>
             <div className={styles.grid}>
             <div className={styles.text}>
                <NotificationsActiveIcon />
            </div>
             <div className={styles.text}>
                Hello James
            </div>
             <div className={styles.user}>
            </div>
            <div className={styles.text}>
                My Account
            </div>
            </div>
        </div>
    )
}
