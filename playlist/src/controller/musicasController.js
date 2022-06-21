const musicJson = require('../model/musicas.json')

// GET- RETORNARÁ TODAS AS MÚSICAS
const getAllMusics = (request, response) => {
    try {
      response.status(200).json([{
          Musicas: musicJson,
        }])
    } catch (err) {
      response.status(500).send({ message: "Deu ruim o Servidor está com Erro"});
      } 
  }
  
  // GET - RETORNA UMA MUSICA ESPECIFICA POR ID
  const getIdMusics = (request, response) => {
   
    let idRequest = request.params.id
    let foundMusic = musicJson.find(musica => musica.id == idRequest)
           response.status(200).send(foundMusic)
   
    }
  // GET - RETORNA UM ARTISTA
  
  // POST CADASTRAR NOVA MÚSICA
  const postAddMusic= (request, response) => {
    try {
      let titleRequest = request.body.title;
      let launchYearRequest = request.body.launchYear;
      let favoritedRequest = request.body.favorited;
      let artistsRequest = request.body.artists
      
      let novaMusica = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: launchYearRequest,
        favorited: favoritedRequest,
        artists: artistsRequest,
      }
  
      musicJson.push(novaMusica); // empurrar o novo podcasts para o json(bando de dados que está na pasta models, arquivo podcasts.json)
  
      response.status(201).json([
        {
          message: "Nova musica cadastrada com sucesso",
          novaMusica,
        },
      ]);
    } catch (err) {
      response.status(500).send([
        {
          message: "Atenção!!! Erro ao cadastrar a nova musica",
        },
      ]);
    }
  };
  
module.exports = {
    getAllMusics,
    getIdMusics,
    postAddMusic
}