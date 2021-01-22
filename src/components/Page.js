import React from "react";
import ArticleBlock from "./ArticleBlock";
import styles from "./Page.module.scss";

const Page = ({ articles, category, paths, SVG1, SVG2 }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      <div className={styles.header}>
        <div>
          <SVG1 className={styles.svg} />
          <h1 className={styles.headerText}>{category}</h1>
        </div>
        <SVG2 className={styles.svg2} />
      </div>
      {articles.map((article, index) => (
        <ArticleBlock
          article={article}
          key={index}
          path={paths[index].fields.path}
        />
      ))}
    </div>
  </div>
);

export default Page;
