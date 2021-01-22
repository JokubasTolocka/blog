import React from "react";
import Link from "./Link";
import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <Link to="/" className={styles.logo}>
        Blog
      </Link>
      <div>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
