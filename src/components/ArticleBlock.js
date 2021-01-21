import React from "react";
import Link from "./Link";
import styles from "./ArticleBlock.module.scss";

const ArticleBlock = ({ article, path }) => {
  const shortDescription = article.node.excerpt;
  const articleDetails = article.node.frontmatter;

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
            <span className={styles.category}>{articleDetails.date}</span>
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
