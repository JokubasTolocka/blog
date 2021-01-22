import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import SVG1 from "../assets/sports.svg";
import SVG2 from "../assets/sports2.svg";
import Page from "../components/Page";

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
        <Page
          category="Sports"
          articles={articles}
          paths={paths}
          SVG1={SVG1}
          SVG2={SVG2}
        />
      </Layout>
    </>
  );
};

export default SportsPage;
