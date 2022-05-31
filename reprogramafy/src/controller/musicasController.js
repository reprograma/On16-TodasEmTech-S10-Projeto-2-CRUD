const musics = require('../models/musicas.json')

// retornando todas as músicas 

const getAllMusic = (request, response) => {
    try {
    response.status(200).json([
    {
        Musicas: musics,
    },
])
} catch (err) {
    response.status(500).send({ message: 'Erro no server' })
  }
}

// retornar música específica

const getMusicById = (request, response) => {
    const idRequest = request.params.id
    let musicaEncontrada = musicasJson.find(
        musics => musics.id == idRequest)
        response.status(200).send(musicaEncontrada)
}

// retornar música por artista

const getMusicByArtist = (request, response) => {
    try {
        let artistRequest = require.query.artists 
        let artistFiltro = musics.filter((musica) =>
        musica.artists.includes(artistRequest),
        )
        if (artistFiltro.length > 0) {
            res.status(200).send(artistFiltro)
          } else {
            res.status(404).send({ message: 'Artista não encontrado' })
          }
        } catch (err) {
          response.status(500).send({ message: 'Erro no server' })
        }
}

// cadastrar nova música

const createMusic = (request, response) => {
    try {
        let titleRequest = require.body.title 
        let launchYearRequest = require.body.launchYear
        let favoritedRequest = require.body.favorited 
        let artistsRequest = require.body.artists

        let novaMusica = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launch: launchYearRequest,
            favorited: favoritedRequest,
            artists: artistsRequest,
        }
        
        musics.push(novaMusica)

        response.status(201).json([
            {
              message: 'Música cadastrada',
              novaMusica,
            },
          ])
        } catch (err) {
          response.status(500).send({ message: 'Erro ao cadastrar' })
        }
}

// atualizar música específica
const updateMusic = (request, response) => {
    try {
        const idRequest = require.params.id
        const titleRequest = require.body.title 
        const launchYearRequest = require.body.launchYear
        const favoritedRequest = require.body.favorited 
        const artistsRequest = require.body.artists

        musicsFilter = musics.find((task) => task.id == idRequest)
if (musicsFilter) {

    musicsFilter.musics = titleRequest, launchYearRequest, favoritedRequest, artistsRequest
    
      response.status(200).json([
    {
      mensagem: 'Sua música foi alterada com sucesso!',
      musics,
    },
  ])
} else {
  res.status(404).json([
    {
      message: 'Sua música não foi modificada!',
    },
  ])
  }
} catch (err) {
res.status(500).send({ message: 'Erro ao cadastrar' })
}
}

// deletar podcast por id

const deleteMusicById = (request, response) => {


    const idRequest = request.params.id
  
  
    const indiceMusics = musicasJson.findIndex(musics => musics.id == idRequest)
  
  
    musicasJson.splice(indiceMusics, 1)
  
    response.status(200).json([{
      "message": "música deletada",
      "deletado": idRequest,
      musicasJson
    }])
  
  }

  const updateFavorited = (req, res) => {
    try {
      const idRequest = req.params.id
      const favoritedRequest = req.body.favorited
  
      favoritedFilter = pods.find((task) => task.id == idRequest)
  
      if (favoritedFilter) {
        favoritedFilter.favorited = favoritedRequest
  
        res.status(200).json([
          {
            mensagem: 'Sua música foi favoritada com sucesso!',
            musics,
          },
        ])
      } else {
        res.status(404).json([
          {
            message: 'Não conseguimos modificar os seus favoritos!',
          },
        ])
      }
    } catch (err) {
      res.status(500).send({ message: 'Erro ao cadastrar' })
    }
  }


module.exports = {
    getAllMusic,
    getMusicById,
    getMusicByArtist,
    createMusic,
    updateMusic,
    deleteMusicById,
    updateFavorited
}