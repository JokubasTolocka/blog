import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Constants from "../constants";
import Meta from "../components/Meta";
import ArticleFooter from "../components/ArticleFooter";
import ShareButtons from "../components/ShareBlock";
import styles from "./blog.module.scss";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, wordCount } = markdownRemark;

  const timeToRead =
    Math.floor(wordCount.words / Constants.AVG_READING_SPEED) || 1;

  const title = `Daydian | ${frontmatter.title}`;
  return (
    <Layout>
      <Meta title={title} description={null} />
      <div className={styles.root}>
        <div className={styles.article}>
          <img
            className={styles.thumbnail}
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
          />
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <div className={styles.details}>
            <span className={styles.category}>{frontmatter.category}</span>
            <span className={styles.date}>
              {timeToRead} min read <span className={styles.dot}>·</span>
              {frontmatter.date}
              <ShareButtons frontmatter={frontmatter} />
            </span>
          </div>
          <div className={styles.line}></div>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className={styles.footer}>
            <span className={styles.date}>{frontmatter.date}</span>
            <ShareButtons frontmatter={frontmatter} />
          </div>
        </div>
      </div>
      <ArticleFooter category={frontmatter.category} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        category
        thumbnail
      }
      wordCount {
        words
      }
    }
  }
`;
