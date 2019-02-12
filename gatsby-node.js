const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const goalTemplate = path.resolve("src/templates/goals.js");

  return graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                path
                description
                date
                category
              }
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.group.forEach(post =>
      post.edges.forEach(item => {
        createPage({
          path: item.node.frontmatter.path,
          component: goalTemplate
        });
      })
    );

    // res.data.allMarkdownRemark.group.forEach(({ node }) => {
    //   console.log(node, "<<<<< node");

    //   node.edges.forEach({ item });
    // createPage({
    //   path: node.frontmatter.path,
    //   component: goalTemplate
    // });
    // });
  });
};
