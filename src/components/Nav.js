import React from 'react';
import Link from './Link';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.root}>
            <Link to="/" className={styles.logo}>Blog</Link>
            <div>
                <Link to="/technology" className={styles.link}>Technology</Link>
                <Link to="/news" className={styles.link}>News</Link>
                <Link to="/sports" className={styles.link}>Sports</Link>
            </div>
        </nav>
    )
}

export default Nav;