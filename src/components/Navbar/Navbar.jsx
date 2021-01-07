import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShopIcon from '@material-ui/icons/Shop';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AppsIcon from '@material-ui/icons/Apps';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
        <div className={styles.navExpand}>
            <AppsIcon />
            </div>
          <div className={styles.navLinks}>
            <ul>
                <Link to="/"><li><DashboardIcon fontSize="inherit" /></li></Link>
                <Link to="/"><li><AccountCircleIcon fontSize="inherit" /></li></Link>
                <Link to="/"><li><ShopIcon fontSize="inherit" /></li></Link>
                <Link to="/"><li><LocalShippingIcon fontSize="inherit" /></li></Link>
                <Link to="/"><li><ExitToAppIcon fontSize="inherit" /></li></Link>
            </ul>
            </div>   
        </div>
    )
}
