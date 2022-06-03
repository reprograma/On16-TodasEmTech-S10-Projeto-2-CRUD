const music = require('../models/musicas.json')

// retorna todos as musicas
const getAllMusic = (request, response) => {
    try {
        response.status(200).json([{
            "Lista": music
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }
}


const getFavorite = (request, response) => {
    const musicRequest = request.params.id
    const musicFilter = music.filter((music) => music.id == musicRequest)
    response.status(200).send(musicFilter)
}


const getArtist = (request, response) => {
    const getArtistRequest = request.query.artists
 
    const getArtistFilter = music.filter((music) =>
     music.artists.includes(getArtistRequest)
     )
       response.status(200).send(getArtistFilter)

}


const deleteMusic = (request, response) => {
    const idRequest = request.params.id;
    const indiceMusic = music.findIndex((music) => music.id == idRequest);

    music.splice(indiceMusic, 1)

    if (indiceMusic > -1) {
      response.status(200).json([
        {
          message: "A musica foi deletada",
          "musica deletada": idRequest,
          music
        }]);
    } else {
      response.status(404).send([
        {
          message: "Musica não deletada",
        }])
    }
  }



  const changeMusic = (request, response) => {
    const idRequest = request.params.id
    let musicRequest = request.body

    let indexFound = music.findIndex((music) => music.id == idRequest)

    music.splice(indexFound, 1, musicRequest)

    if (indexFound > -1) {
      response.status(200).json([
        {
          message: "Música alterada com sucesso!!!",
          music
        }
      ])
    } else {
      response.status(404).json({
        message: "A música não foi alterada!"
      })
    }
  }


  const favoritarMusic = (request, response) => {
    const idRequest = request.params.id
    const favoritedRequest = request.body.favorited
    favoritedFilter = music.find((music) => music.id == idRequest)
    
    if (favoritedFilter) {
        favoritedFilter.favorited = favoritedRequest
        response.status(200).json([{
            message: " Musica adcionada aos favoritos", 
            music
        }])
    }
    
    else{
        response.status(404).json([{
            message: "Não foi dessa vez!"
        }])
    }
}


const adicionarMusica = (request, response) => {
    try{
    let titleRequest = request.body.tilte
    let launchYearRequest = request.body.launchYear
    let favoritedRequest = request.body.favorited
    let artistsRequest = request.body.artists
    
    let newMusic = {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: launchYearRequest,
        favorited: favoritedRequest,
        artists: artistsRequest
    }

    music.push(newMusic)
    response.status(201).json([{
        "message": "Musica cadastrada com sucesso!!!", newMusic
    }])
 }catch (err){
     console.log(err)
     response.status(500).send([{
         "message": "Erro interno ao cadastrar"
         
     }])
}
}
module.exports = {
    getAllMusic,
    getFavorite,
    getArtist,
    deleteMusic,
    changeMusic,
    favoritarMusic,
    adicionarMusica
}