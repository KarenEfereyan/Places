/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  "siteMetadata":{
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
  },
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data/`,
    },
  },
    
    ],
}
