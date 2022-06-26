const musicas = require('../models/musicas.json')

// retornando todas as musicas
const getAllMusics = (req, res) => {
  try {
    res.status(200).json([
      {
        Musicas: musicas,
      },
    ])
  } catch (err) {
    response.status(500).send({ message: 'Erro no server' })
  }
}

module.exports = {
    getAllMusics
  }