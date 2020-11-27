/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  "siteMetaData":{
    title : 'Places',
    description : 'Travel destinations at a go. Experience the magic of the world at your fingertips',
    author : 'Karen Efereyan'
  },
  plugins: [
    {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },],
}
