const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // const result = await graphql(`
  //   {
  //     allMarkdownRemark {
  //       nodes {
  //         id
  //         fields {
  //           path
  //           slug
  //         }
  //         frontmatter {
  //           category
  //         }
  //       }
  //     }
  //   }
  // `);

  if (result.errors) {
    result.errors.forEach((error) => console.error(error.toString()));
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    createPage({
      path: post.fields.path,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        id: post.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: value.match(/\/([^\/]+?)\/$/)[1],
    });
    createNodeField({
      name: "path",
      node,
      value: value.replace(/\/$/, ""),
    });
  }
};
