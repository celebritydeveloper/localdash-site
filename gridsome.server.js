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
        path: `/card/${card.id}/`, // Create route
        component: './src/templates/Card.vue',
        context: {
          id: card.id,
          title: card.name,
          price: card.price,
          color: card.color,
          location: card.location,
        }
      })
    })
  })
}



