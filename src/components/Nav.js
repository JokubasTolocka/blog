import React, { useState } from "react";
import Link from "./Link";
import styles from "./Nav.module.scss";
import NavLinks from "./Links";
import HamburgerButton from "./HamburgerButton";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.root}>
      {isMenuOpen && (
        <div className={styles.menu}>
          <NavLinks />
        </div>
      )}
      <nav className={styles.nav}>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            Daydian
          </Link>
          <div>
            <div className={styles.links}>
              <NavLinks />
            </div>
            <HamburgerButton
              active={isMenuOpen}
              setIsMenuOpen={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
