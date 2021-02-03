import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArticleBlock from "./ArticleBlock";
import styles from "./TechnologySection.module.scss";

const OutdoorsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
        filter: { frontmatter: { category: { eq: "Outdoors" } } }
      ) {
        nodes {
          fields {
            path
          }
        }
        edges {
          node {
            frontmatter {
              category
              thumbnail
              date(formatString: "MMM DD, YYYY")
              title
            }
            excerpt(pruneLength: 140)
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges;
  const paths = data.allMarkdownRemark.nodes;

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>Outdoors</h4>
      <div>
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
};

export default OutdoorsSection;
