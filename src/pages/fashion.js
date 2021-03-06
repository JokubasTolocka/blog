import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import SVG1 from "../assets/fashion.svg";
import SVG2 from "../assets/fashion2.svg";
import Page from "../components/Page";

const FashionPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
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
            excerpt(pruneLength: 80)
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
    <>
      <Layout>
        <Meta title="Fashion | Daydian" />
        <Page
          category="Fashion"
          articles={articles}
          paths={paths}
          SVG1={SVG1}
          SVG2={SVG2}
        />
      </Layout>
    </>
  );
};

export default FashionPage;
