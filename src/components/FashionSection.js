import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArticleBlock from "./ArticleBlock";
import styles from "./TechnologySection.module.scss";

const FashionSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
        filter: { frontmatter: { category: { eq: "Fashion" } } }
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
            wordCount {
              words
            }
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges;
  const paths = data.allMarkdownRemark.nodes;

  return (
    <div>
      <h4 className={styles.title}>Fashion</h4>
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

export default FashionSection;
