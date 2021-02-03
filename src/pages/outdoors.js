import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import SVG1 from "../assets/news.svg";
import SVG2 from "../assets/news2.svg";
import Page from "../components/Page";

const OutdoorsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
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
        <Meta title="Outdoors" />
        <Page
          category="Outdoors"
          articles={articles}
          paths={paths}
          SVG1={SVG1}
          SVG2={SVG2}
        />
      </Layout>
    </>
  );
};

export default OutdoorsPage;
