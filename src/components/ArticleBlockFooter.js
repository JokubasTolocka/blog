import React from "react";
import Link from "./Link";
import Constants from "../constants";
import styles from "./ArticleBlockFooter.module.scss";

const ArticleBlockFooter = ({ article, path }) => {
  const articleDetails = article.node.frontmatter;
  const wordCount = article.node.wordCount.words;

  const timeToRead =
    Math.floor(wordCount.words / Constants.AVG_READING_SPEED) || 1;

  return (
    <Link to={path} className={styles.link}>
      <div className={styles.root}>
        <div className={styles.postInformation}>
          <div>
            <span className={styles.category}>{articleDetails.category}</span>
            <h3 className={styles.title}>{articleDetails.title}</h3>
          </div>
          <div className={styles.details}>
            <span>{timeToRead} min read</span>
            <span>{articleDetails.date}</span>
          </div>
        </div>
        <img
          className={styles.image}
          src={articleDetails.thumbnail}
          alt={articleDetails.title}
        />
      </div>
    </Link>
  );
};

export default ArticleBlockFooter;
