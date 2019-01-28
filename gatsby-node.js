const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const config = require(`./src/utils/siteConfig`);
const { paginate } = require(`gatsby-awesome-pagination`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * Posts
   */
  const createPosts = new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/post.js`);
    const bookSummaryTemplate = path.resolve(`./src/templates/book-summary.js`);
    resolve(
      graphql(`
        {
          allGhostPost(
            sort: { order: ASC, fields: published_at }
          ) {
            edges {
              node {
                slug
                primary_tag {
                  name
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        if (!result.data.allGhostPost) {
          return resolve();
        }

        const items = result.data.allGhostPost.edges;

        _.forEach(items, ({ node }) => {
          if (node.primary_tag && node.primary_tag.name === 'Book Summary') {
            createPage({
              path: `/book-summaries/${node.slug}/`,
              component: path.resolve(bookSummaryTemplate),
              context: {
                slug: node.slug,
              },
            });
          } else {
            createPage({
              path: `/blog/${node.slug}/`,
              component: path.resolve(postTemplate),
              context: {
                slug: node.slug,
              },
            });
          }
        });

        return resolve();
      })
    );
  });

  return Promise.all([createPosts]);
};
