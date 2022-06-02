const musicas = require("../models/musicas.json")


const getAllmusica = (require, response) => {
    try {
      response.status(200).json([
        {
          "listaMusicas": musicas,
        }
      ])
    } catch (err) {
      response.status(500).send({message: 'Erro no server'})
    }
  }
  

//-----------------------------------------------------------  


const getBuscarMusica = (request, response) => {
    let idRequest = request.params.id
    let musicaEncontrada = musicas.find( musicas => musicas.id == idRequest)
      response.status(200).send(musicaEncontrada)	
    }

//---------------------------------------------------------------------------------


const getArtist = (request, response) => {
    const artistsRequest = request.query.artists
    const artistsFilter = music.filter((musicas) =>
      musicas.artists.includes(artistsRequest)
    )
      if (artistsFilter.length > 0) {
        response.status(200).send(artistsFilter)
    } else {
        response.status(404).send([
    {
        message: "Artista não encontrado"
    }
        ])
    }
    }

//------------------------------------------------

const addMusica = (request, response) => {
  try {
    let titleRequest = request.body.title;
    let launchYearRequest = request.body.launchYear;
    let favoritedRequest = request.body.favorited;
    let artistsRequest = request.body.artists

    let NovaMusica = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      title: titleRequest,
      launchYear: launchYearRequest,
      favorited: favoritedRequest,
      artists: artistsRequest
    }

    music.push(NovaMusica);
    response.status(201).json([
      {
        message: "Nova musica cadastrada",
        NovaMusica,
      }
    ])
  } catch (err) {
    console.log(err);
    response.status(500).send([
      {
        message: "Err, não cadastrada"
      }
    ])
  }
}
//----------------------------------------------

const deleteMusica = (request, response) => {
  const idRequest = request.params.id;
  const indiceMusica = music.findIndex((musicas) => musicas.id == idRequest);

  musicas.splice(indiceMusic, 1);

  if (indiceMusica) {
    response.status(200).json([
      {
        message: "Musica deletada",
        "Musica deletada": idRequest,
        musicas
      }]);
  } else {
    response.status(404).send([
      {
        message: "A musica foi não deletada",
      }])
  }
};



//----------------------------------------------

const updateMusica = (request, response) => {
  const idRequest = request.params.id;
  let musicaRequest = request.body

  let indexEncontrado = musicas.findIndex((musicas) => musicas.id == idRequest)

 if (musicas.splice(indexEncontrado, 1, musicaRequest)){
  response.status(200).json([{
      message: "Musica atualizada",
      musicas
    }])
 }else{
  response.status(404).send([{
      message: "Musica não encontrada"
      }])
    }
}

//----------------------------------------------

const FavoritarMusica = (request, response) => {
  const idRequest = request.params.id;
  const favoritarRequest = request.body.favorited;
  favoritarFilter = musicas.find((musicas) => musicas.id == idRequest);

  if (favoritarFilter) {
    favoritarFilter.favorited = favoritarRequest;
    response.status(200).json([{
        message: "Status atualizado",
        musicas
      }])
  } else {
    response.status(404).json([
      {
        message: "Alteração não realizada"
      }
    ])
  }
}









  module.exports = {
    getAllmusica,
    getBuscarMusica,
    getArtist,
    addMusica,
    updateMusica,
    deleteMusica,
    FavoritarMusica
  }