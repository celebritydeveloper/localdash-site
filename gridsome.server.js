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
        path: `/${card.uuid_1}/`, // Create route
        component: './src/templates/Card.vue',
        context: {
          id: card.uuid_1,
          name: card.Name,
          branch: card.Branche,
          phone: card.Telefon,
          email: card.Mail,
          website: card.Webseite,
          address: card.Strasse,
          image: card.uscan_gmb,
          postal: card.PLZ,
          town: card.Stadt,
          keywords: card.Keywords,
          brands: card.infos_yp,
          greview_1_rating: card.greview_1_rating,
          greview_1_zeit: card.greview_1_zeit,
          greview_1_text: card.greview_1_text,
          greview_1_reviewer: card.greview_1_reviewer,
          greview_1_localguide: card.greview_1_localguide,
          greview_1_beantwortet: card.greview_1_beantwortet,
        }
      })
    })
  })
}



