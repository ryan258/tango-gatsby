module.exports = {
  siteMetadata: {
    title: `Team Tango!`,
    description: `We're here to help you get your marketing tango on.`,
    author: `@tango`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        excludedRoutes: [
          `/wp/v2/users/**`,
          `/wp/v2/settings*`,
          `/wp/v2/themes*`,
        ],
        baseUrl: `localhost:8080`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: `http://localhost:8080`,
          replacementUrl: ``,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Teko`,
            variants: [`200`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
  ],
}
