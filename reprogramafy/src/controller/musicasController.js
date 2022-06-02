const musicasJson = require("../models/musicas.json")

const getAllMusics = (req, res) => {
  try {
    res.status(200).json([
      {
       "Musicas": musicasJson
      }
    ])
  } catch (err) {
    res.status(500).send({message: "Erro no servidor"})
  }
}

const getMusicId = (req, res) => {

  const idRequest = req.params.id
  let indexEncontrado = musicasJson.find( musica => musica.id == idRequest)  
  
  if(indexEncontrado != 0) {
    res.status(200).send(indexEncontrado)
  } else {
    res.status(404).send({ message: 'Id não encontrado' })
  } 
}

const getMusicArtist = (req, res) => {

  const artistaRequest = req.query.artists
  let artistaEncontrado = musicasJson.filter(musica => musica.artists.includes(artistaRequest)) 
  
  if(artistaEncontrado.length > 0) {
    res.status(200).send(artistaEncontrado)
  } else {
    res.status(404).send({ message: 'Artista não encontrado' })
  } 
}


const updateMusicFavorito = (req, res) => {
  try{
    const idRequest = req.params.id
    const favoritoRequest = req.body.favorited

    let favoritoFiltro = musicasJson.find(musica => musica.id == idRequest)
    console.log(favoritoFiltro)

    if(favoritoFiltro){
      favoritoFiltro.favorited = favoritoRequest

      res.status(200).json([
        {
          message: "Sua alteração nos favoritos foi realizada com sucesso",
          musicasJson
        }
      ])
    } else {
      res.stars(404).json([
        {
          message: "Sua avaliação não foi alterada"
        }
      ])}
  } catch {
    res.status(500).send({ message: 'Erro ao cadastrar' })
  }
}

const updateMusic = (req, res) => {
  try {

    const idRequest = req.params.id
    let musicRequest = req.body

    let indexEncontrado = musicasJson.findIndex(musica => musica.id == idRequest)

    musicasJson.splice(indexEncontrado, 1, musicRequest)

    if(indexEncontrado){
      res.status(200).json([
        {
          "message": "Musica atualizado",
          musicasJson
        }
      ])
    } else {
      res.status(404).send([{message: "Sua musica não foi alterada"}])
    }
  } catch(err) {
    res.status(500).send({ message: 'Erro ao cadastrar' })
  }
}

const createMusic = (req, res) => {
  try{
    let titleRequest = req.body.title
    let launchYearRequest = req.body.launchYear
    let favoritedRequest = req.body.favorited
    let artistsRequest = req.body.artists

    let newMusic = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      title: titleRequest,
      launchYear : launchYearRequest,
      favorited : favoritedRequest,
      artists: artistsRequest
    }

    musicasJson.push(newMusic)

    res.status(201).json([
      {
        message: "Nova música criada",
        musicasJson
      }
    ])
  } catch (err) {
    res.status(500).send({ message: 'Erro ao cadastrar' })
  }
}

const deleteMusic = (req, res) => {
  try {
    const idRequest = req.params.id
    const indiceMusica = musicasJson.find(musica => musica.id == idRequest)

    if(indiceMusica) {

      musicasJson.splice(indiceMusica, 1)      

      res.status(200).json([
        {
          "message": "Musica deletada com sucesso",
          "deletado": idRequest,
           musicasJson
        }
      ])
    } else {
      res.status(404).send([{message: "Sua musica não foi deletada"}])
    }

  } catch (err) {
    res.status(500).send({ message: 'Erro ao deletar'})
  }
}


module.exports = {
  getAllMusics,
  getMusicId,
  getMusicArtist,
  updateMusicFavorito,
  updateMusic,
  createMusic,
  deleteMusic
}