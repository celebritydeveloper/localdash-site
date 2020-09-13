// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Localdash',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '14LSngh2rPtQ7OQyKFZxTR_jYjUusGxGzq2knB0l1_Ew', 
        apiKey: 'AIzaSyCS2L4dKZ2g10zGbFKTxnV4jlOSWqUwAaE',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ],
  siteUrl: 'https://celebritydeveloper.github.io',
  pathPrefix: '/localdash-site',
}
