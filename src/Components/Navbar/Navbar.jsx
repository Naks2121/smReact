import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;