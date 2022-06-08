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
  let musicaEncontrada = musics.find(
    musics => musics.id == idRequest)
  response.status(200).send(musicaEncontrada)
}

// retornar música por artista

const getMusicByArtist = (request, response) => {
  try {
    let artistRequest = request.query.artists

    let artistFiltro = musics.filter((musica) => musica.artists.includes(artistRequest))

    if (artistFiltro.length > 0) {
      response.status(200).send(artistFiltro)
    } else {
      response.status(404).send({ message: 'Artista não foi encontrado' })
    }
  } catch (err) {
    response.status(500).send({ message: 'Erro no server' })
  }
}

// cadastrar nova música

const createMusic = (request, response) => {
  try {
    let titleRequest = request.body.title
    let launchYearRequest = request.body.launchYear
    let favoritedRequest = request.body.favorited
    let artistsRequest = request.body.artists

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
    const idRequest = request.params.id
    const musicaRequest = request.body

    const indexFound = musics.findIndex((musica) => musica.id == idRequest)
    musics.splice(indexFound, 1, musicaRequest)

    if (indexFound > -1) {

      response.status(200).json([
        {
          mensagem: 'Sua música foi alterada com sucesso!',
          musics: musics,
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


  const indiceMusics = musics.findIndex(musica => musica.id == idRequest)


  musics.splice(indiceMusics, 1)

  response.status(200).json([{
    "message": "música deletada",
    "deletado": idRequest,
    musics
  }])

}

const updateFavorited = (request, response) => {
  try {
    const idRequest = request.params.id
    const favoritedRequest = request.body.favorited

    favoritedFilter = musics.find((task) => task.id == idRequest)

    if (favoritedFilter) {
      favoritedFilter.favorited = favoritedRequest

      response.status(200).json([
        {
          mensagem: 'Sua música favorita foi atualizada com sucesso!',
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

