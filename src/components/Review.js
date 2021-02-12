import React from "react";
import styles from "./Review.module.scss";

const Review = ({ author, text }) => (
  <div className={styles.root}>
    <i className={styles.text}>"{text}" - </i>
    <p className={styles.author}>{author}</p>
  </div>
);

export default Review;
