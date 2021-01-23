import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      <Nav />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
