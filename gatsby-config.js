require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

 module.exports = {
    siteMetadata: {
      title: "studo-page",
    },
    plugins: [
      "gatsby-plugin-theme-ui",
      `gatsby-plugin-typescript`,
    ],
  };
  