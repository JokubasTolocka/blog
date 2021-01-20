exports.createPages = async ({ actions, graphql, reporter }) => {
    console.log('createPages');
    const { createPage } = actions
    console.log(action, graphql, reporter);
    const blogPostTemplate = require.resolve(`./src/templates/blog.js`)
    console.log(blogPostTemplate);
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    // Handle errors
    console.log(result)
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }