import React from 'react'
import Navbar from '../Navbar/Navbar';
import ProfileNav from '../ProfileNav/ProfileNav';
import styles from './styles.module.css';
export default function Dashboard() {
    return (
        <div className={styles.main}>
        <div className={styles.grid}>
        <div className={styles.contents}>
         <Navbar />  
         </div>
         <div className={styles.contents}>
             <ProfileNav />
        </div> 
        </div>
        </div>
    )
}
