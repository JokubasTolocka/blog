import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import ArticleBlock from "../components/ArticleBlock";
import SVG from "../assets/sports.svg";
import SVG2 from "../assets/sports2.svg";
import styles from "./technology.module.scss";

const SportsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { frontmatter: { category: { eq: "Sports" } } }
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
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  `);

  const articles = data.allMarkdownRemark.edges;
  const paths = data.allMarkdownRemark.nodes;

  return (
    <>
      <Layout>
        <div className={styles.root}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div>
                <SVG className={styles.svg} />
                <h1 className={styles.headerText}>Sports</h1>
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
      </Layout>
    </>
  );
};

export default SportsPage;
