import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArticleBlockFooter from "./ArticleBlockFooter";
import styles from "./NewArticlesTitle.module.scss";

const NewArticlesTitle = () => {
  // const newArticles = useStaticQuery(graphql`
  //   query NewArticles {
  //     allMarkdownRemark(
  //       sort: { order: DESC, fields: [frontmatter___date] }
  //       limit: 3
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

  // const articles = newArticles.allMarkdownRemark.edges;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h4 className={styles.newTitle}>New</h4>
        {/* <div className={styles.articles}>
          {articles.map((article, index) => (
            <ArticleBlockFooter
              key={index}
              article={article}
              path={newArticles.allMarkdownRemark.nodes[index].fields.path}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default NewArticlesTitle;
