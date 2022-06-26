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

const updateMusica = (req, res) => {
    try {
      const idRequest = req.params.id
      let titleRequest = req.body.title
      let launchYearRequest = req.body.launchYear
      let favoritedRequest = req.body.favorited
      let artistsRequest = req.body.artists
  
      musicFilter = musicas.find((musica) => musica.id == idRequest)
  
      if (musicFilter) {
        musicFilter.title = titleRequest
        musicFilter.launchYear = launchYearRequest
        musicFilter.favorited = favoritedRequest
        musicFilter.artists = artistsRequest
  
        res.status(200).json([
          {
            mensagem: 'A música foi alterada com sucesso!',
            musicFilter,
          },
        ])
      } else {
        res.status(404).json([
          {
            message: 'A música não foi modificada!',
          },
        ])
      }
    } catch (err) {
      res.status(500).send({ message: 'Erro ao cadastrar' })
    }
}

const deleteMusica = (req, res ) => {

    const idRequest = req.params.id

    const musica = musicas.findIndex( musica => musica.id == idRequest)
    
    musicas.splice(musica, 1) 

    res.status(200).json([{
        "mensagem" : "a música foi deletada",
        "deletado" : idRequest,
        musicas
    }])
}

module.exports = {
    getAllMusics,
    getMusicsById,
    getMusicsByArtists,
    createMusic,
    updateMusica,
    deleteMusica
  }