import React from "react";
import styles from "./ContentWrapper.module.scss";

const ContentWrapper = ({ children }) => (
  <div className={styles.root}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default ContentWrapper;
