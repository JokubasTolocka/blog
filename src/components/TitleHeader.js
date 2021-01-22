import React from "react";
import WorldIlliustration from "../assets/title1.svg";
import styles from "./TitleHeader.module.scss";

const TitleHeader = () => (
  <div className={styles.header}>
    <div className={styles.headerTextBlock}>
      <h2 className={styles.headerMainText}>New ideas for your mind.</h2>
      <p className={styles.headerText}>
        Read inspiring arcticles <br /> which help you make the best decisions.
      </p>
    </div>
    <WorldIlliustration className={styles.svg} />
  </div>
);

export default TitleHeader;
