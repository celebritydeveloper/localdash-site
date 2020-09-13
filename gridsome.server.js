// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
let data = require('./src/assets/data.json')

module.exports = function (api) {
  api.createPages(async ({ createPage }) => {

    // Create pages from data
    data['cards'].forEach(card => {
      createPage({
        path: `/${card.Id}/`, // Create route
        component: './src/templates/Card.vue',
        context: {
          id: card.Id,
          name: card.Name,
          branch: card.Branche,
          phone: card.Telefon,
          email: card.Mail,
          website: card.Webseite,
          address: card.Strasse,
          postal: card.PLZ,
          town: card.Stadt,
          keywords: card.Keywords,
          brands: card.infos_yp
        }
      })
    })
  })
}



