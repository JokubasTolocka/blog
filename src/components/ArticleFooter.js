import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArticleBlockFooter from "./ArticleBlockFooter";
import styles from "./ArticleFooter.module.scss";

const ArticleFooter = ({ category }) => {
  // const data = useStaticQuery(graphql`
  //   query ArticleFooter {
  //     allMarkdownRemark(
  //       sort: { order: DESC, fields: [frontmatter___date] }
  //       limit: 6
  //     ) {
  //       nodes {
  //         fields {
  //           path
  //         }
  //       }
  //       edges {
  //         node {
  //           frontmatter {
  //             category
  //             thumbnail
  //             date(formatString: "MMM DD, YYYY")
  //             title
  //           }
  //           wordCount {
  //             words
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const articles = data.allMarkdownRemark.edges;

  return (
    <div className={styles.root}>
      {/* <div className={styles.content}>
        <h4 className={styles.title}>Other articles</h4>
        <div className={styles.articles}>
          {articles.map((article, index) => (
            <ArticleBlockFooter
              key={index}
              article={article}
              path={data.allMarkdownRemark.nodes[index].fields.path}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ArticleFooter;
