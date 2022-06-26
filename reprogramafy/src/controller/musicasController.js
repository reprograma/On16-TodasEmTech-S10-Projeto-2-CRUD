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

const getMusicsById = (req, res) => {
    
    const idRequest = req.params.id 
    
    let musica = musicas.find(musica => musica.id == idRequest)

    try {
      res.status(200).json([
        {
          Musicas: musica,
        },
      ])
    } catch (err) {
      response.status(500).send({ message: 'Erro no server' })
    }
  }

module.exports = {
    getAllMusics,
    getMusicsById
  }