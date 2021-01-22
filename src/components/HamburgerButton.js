import React from "react";
import classnames from "classnames";
import styles from "./HamburgerButton.module.scss";

const HamburgerButton = ({ setIsMenuOpen, active }) => (
  /* eslint-disable-next-line */
  <div
    role="button"
    tabIndex={0}
    className={classnames(styles.hamburgerButton, active && styles.active)}
    onClick={() => setIsMenuOpen((prev) => !prev)}
  >
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
  </div>
);

export default HamburgerButton;
