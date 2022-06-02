// importar meu JSON de podcasts
const musicas = require('../models/musicas.json')

// retorna todas as músicas
const getAllSongs = (request, response) => {
    try {
        response.status(200).json([{
            "Músicas": musicas
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }

}

// retorna música por ID
const getSongbyID = (request, response) => {
    const musicRequest = request.params.id;
    const musicFilter = musicas.filter((musicas) => musicas.id == musicRequest);
  
    if (musicFilter.length > 0) {
      response.status(200).send(musicFilter);
    } else {
      response.status(404).send([
        {
          message: "Musica não encontrada",
        },
      ]);
    }
  };


  //retornar músicas por artista
    const getArtists = (request, response) => {
    const artistsRequest = request.query.artists.toLowerCase();
    
    const artistsFilter = musicas.filter(musicas => {
        artistasLowerCase = musicas.artists.map(artistasArray => artistasArray.toLowerCase())
        return artistasLowerCase.includes(artistsRequest)
    })
    
    if (artistsFilter.length > 0) {
      response.status(200).send(artistsFilter);
    } else {
      response.status(404).send([
        {
          message: "Artista não encontrado",
        },
      ]);
    }
  };


  //adicionar uma música

  const addSong = (request, response) => {
    try {
        
    let titleRequest = request.body.title
    let launchYearRequest = request.body.launchYear
    let favoritedRequest = request.body.favorited
    let artistsRequest = request.body.artists

    let newSong = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: launchYearRequest,
        favorited: favoritedRequest,
        artists: artistsRequest
    }

    musicas.push(newSong)
    response.status(201).json([{
        message: "Nova música cadastrada",
        newSong
    }])

}catch (err){
    console.log (err)
    response.status(500).send({
        message: "erro no servidor"})
}}

//marcar como favorita ou não
const favoriteSong = (request, response) => {
    const idRequest = request.params.id
    const favoriteRequest = request.body.favorited
    favoriteFilter = musicas.find((musicas) => musicas.id == idRequest)
    
    if (favoriteFilter) {
        favoriteFilter.favorited = favoriteRequest
        response.status(200).json([{
            message: "Status atualizado", 
            musicas
        }])
    }else{
        response.status(404).json([{
            message: "Não foi modificado"
        }])
    }
}

  //atualizarMúsica
  const attSong = (request, response) => {
    const idRequest = request.params.id;
    let musicRequest = request.body;
  
    let indexEncontrado = musicas.findIndex((musica) => musica.id == idRequest);
  
    if (musicas.splice(indexEncontrado, 1, musicRequest)) {
      response.status(200).json([
        {
          message: "Musica atualizada com sucesso",
          musicas,
        },
      ]);
    } else {
      response.status(404).send([
        {
          message: "Não foi possível atualizar",
        },
      ]);
    }
  };

  //deletar Música
  const deleteSong = (request, response) => {

    const idRequest = request.params.id

    const indexSongs = musicas.findIndex(musica => musica.id == idRequest)

    if(indexSongs != -1){
        musicas.splice(indexSongs, 1) 

        response.status(200).json([{
            "mensagem" : "A música foi deletado",
            "deletado" : idRequest,
            musicas
        }])

    }else{
        response.status(404).json([{
            message: "A música não foi encontrada"
        }])
    }

}


module.exports = {
    getAllSongs,
    getSongbyID,
    getArtists,
    addSong,
    favoriteSong,
    attSong,
    deleteSong
   }










