const pathPrefix = process.env.PATH_PREFIX || '';
const siteUrl = process.env.SITE_URL || 'http://localhost:8000/';

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
    {
      resolve: 'gatsby-theme-material-ui',
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#1a73e8',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Iblis Gatsby Starter',
        short_name: 'Iblis',
        description: 'Template Starter for Gatsby',
        lang: 'en',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafafa',
        theme_color: '#1a73e8',
        icon: 'src/images/icon.png',
        crossOrigin: 'use-credentials',
        localize: [
          {
            name: 'Modèle pour démarrer avec Gatsby',
            short_name: 'Iblis',
            description: 'Modèle pour démarrer avec Gatsby',
            lang: 'fr',
            start_url: '/fr',
          },
        ],
      },
    },
  ],
  pathPrefix,
  siteMetadata: {
    siteUrl,
  },
};
