module.exports = {
  siteMetadata: {
    title: `Tango Brands!`,
    description: `Discover Tango Brands! through this nifty WP backend w/ a GatsbyJS frontend.`,
    author: `@gatsbyjs`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      // let gatsby know where we have files, we can have multiple objects of this to target different folders of things
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // these are for optimizing images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // makes it so a little icon can be added to mobile devices
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://localhost:8080/graphql`,
        schema: {
          timeout: 3000000,
          // perPage: 10,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
