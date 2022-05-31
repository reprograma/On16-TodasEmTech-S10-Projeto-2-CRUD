const podcasts = require('../models/podcasts.json')

// retorna todos os podcasts

const getAllPods = (request, response) => {
  try {
    response.status(200).json([{
      "Podcasts": podcasts
    }])
  } catch (err) {
    response.status(500).send({ message: "Erro no server" })
  }

}


module.exports = {
  getAllPods

}