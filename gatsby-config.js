module.exports = {
    siteMetadata: {
        title: `is canada real?`,
        description: `who knows`,
        author: `@iammatthias`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `icr`,
                short_name: `icr`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
        `gatsby-plugin-styled-components`,
    ],
}
