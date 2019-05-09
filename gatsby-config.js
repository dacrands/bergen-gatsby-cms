module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bergen STEM",
        short_name: "Bergen STEM",
        start_url: "/",
        background_color: "#6242e4",
        theme_color: "#6242e4",
        display: "standalone",
        
      }
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            uploads: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destionationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`
  ],
}