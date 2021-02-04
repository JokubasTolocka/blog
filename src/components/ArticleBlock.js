import React from "react";
import Link from "./Link";
import Constants from "../constants/index";
import styles from "./ArticleBlock.module.scss";

const ArticleBlock = ({ article, path }) => {
  const shortDescription = article.node.excerpt;
  const articleDetails = article.node.frontmatter;

  const timeToRead =
    Math.floor(article.node.wordCount.words / Constants.AVG_READING_SPEED) || 1;

  return (
    <Link to={path} className={styles.link}>
      <div className={styles.root}>
        <div className={styles.postInformation}>
          <div>
            <h3 className={styles.title}>{articleDetails.title}</h3>
            <p className={styles.description}>{shortDescription}</p>
          </div>
          <div className={styles.details}>
            <span className={styles.categoryName}>
              {articleDetails.category}
            </span>
            <div className={styles.dateTimeBlock}>
              <span className={styles.time}>
                {timeToRead} min read<span className={styles.dot}>·</span>
              </span>
              <span>{articleDetails.date}</span>
            </div>
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

export default ArticleBlock;
