import React from "react";
import classnames from "classnames";
import Link from "./Link";
import styles from "./Nav.module.scss";

const Nav = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <nav className={styles.root}>
      <div className={styles.content}>
        <Link to="/" className={styles.logo}>
          Blog
        </Link>
        <div>
          <Link
            to="/technology"
            className={classnames(
              styles.link,
              path.startsWith("/technology") && styles.active
            )}
          >
            Technology
          </Link>
          <Link
            to="/news"
            className={classnames(
              styles.link,
              path.startsWith("/news") && styles.active
            )}
          >
            News
          </Link>
          <Link
            to="/sports"
            className={classnames(
              styles.link,
              path.startsWith("/sports") && styles.active
            )}
          >
            Sports
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
