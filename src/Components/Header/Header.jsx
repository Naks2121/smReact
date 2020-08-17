import React from 'react';
import styles from './Header.module.css';

function Header () {
    return (
        <div className={styles.header}>
            <a className={styles.navbarBrand} href="#">
            <span className={`${styles.logo} ${styles.logoLeft}`}>sm</span>
            <span className={`${styles.logo} ${styles.logoRight}`}>React</span>
            </a>
        </div>
    )
};

export default Header;