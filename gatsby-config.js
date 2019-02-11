module.exports = {
  siteMetadata: {
    siteTitle: 'Peter D\'Orsi | San Diego based Director of Product',
    siteUrl: 'https://peterdorsi.com',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/sites/`,
        name: 'sites',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-128170635-1',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Peter D\'Orsi | San Diego based Director of Product',
        short_name: 'Gatsby Starter Portfolio',
        description:
          'Personal website of Peter Peter D\'Orsi a Technology Enthusiast, Internet Connoisseur, Gamer and friend to all Pugs',
        start_url: '/',
        background_color: '#191e38',
        theme_color: '#6574cd',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
