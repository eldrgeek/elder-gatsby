module.exports = {
  siteMetadata: {
    title: "SOS Secure Our Systems",
    author: "Mike Wolf",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-smartypants"
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}