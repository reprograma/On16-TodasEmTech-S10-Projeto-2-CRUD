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

const getMusicsByArtists = (req, res) => {
    
    const artistsRequest = req.query.artists 
    
    let musica = musicas.filter(musica => musica.artists.includes(artistsRequest))
    
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

const createMusic = (req, res) => {
    try {
      let titleRequest = req.body.title
      let launchYearRequest = req.body.launchYear
      let favoritedRequest = req.body.favorited
      let artistsRequest = req.body.artists
  
      let novaMusica = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: launchYearRequest,
        favorited: favoritedRequest,
        artists: artistsRequest,
      }
  
      musicas.push(novaMusica)
  
      res.status(201).json([
        {
          message: 'Música cadastrada',
          novaMusica,
        },
      ])
    } catch (err) {
      res.status(500).send({ message: 'Erro ao cadastrar' })
    }
  }

module.exports = {
    getAllMusics,
    getMusicsById,
    getMusicsByArtists,
    createMusic
  }