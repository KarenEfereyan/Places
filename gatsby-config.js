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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/videos`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
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
