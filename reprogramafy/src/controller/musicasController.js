const musicas = require ('../models/musicas.json')
const { addPods } = require('./podcastsController')

//Retornar todas as músicas (GET)

const getAllMusics = (request, response) =>{
    try{
        response.status(200).json([{
            "Musicas": musicas
        }])
    } catch (err){
        response.status(500).send({message: "Erro no server"})
    }
}

//Retorna apenas uma música especifica (GET)

const getMusicById = (request, response) =>{
    try {

        const idRequest = request.params.id
        const idEncontrado = musicas.filter(musica => musica.id == idRequest)

        if (idEncontrado.length > 0){

        response.status(200).send(idEncontrado)
    } else {
        response.status(404).send([{
            "message": "Música não encontrada"}])
    } }catch (err){

    }  response.status(500).send({message: "Erro no server"})
    }

// Retorna um artista especifico (GET)
const getMusicByArtist = (request, response) =>{
const artistRequest = request.query.artists
const artistFilter = musicas.filter((musicas) => musicas.artists.includes(artistRequest))
    if (artistFilter.length > 0){
        response.status(200).send(artistFilter)
    } else {
        response.status(400).send([{
            "message": "artista não encontrado"
        }])
    }
}     

// Cadastrar nova música (POST)

const createMusic = (request, response) =>{
    try{
        let titleRequest = request.body.title
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
        musicas.push(newMusic)
        response.status(201).json([{
            "message":"Nova música cadastrada",
            newMusic
        }])
    } catch (err){
        console.log(err)
        response.status(500).send([{
            message: "Erro interno ao cadastrar" 
        }])
    }
}

// Atualizar música por id (PUT)

const updateMusica = (request, response) =>{

    const idRequest = request.params.id
    let musicaRequest = request.body

    let indexEncontrado = musicas.findIndex(musica => musica.id == idRequest)

    musicas.splice(indexEncontrado, 1, musicaRequest)

    response.status(200).json([{
        "mensagem": "A música foi atualizada",
        musicaRequest
    }])
}

// Atualizar status de favorito (Patch)

const updateFavoritedStatus = (request, response) => {
    const idRequest = request.params.id
    const statusFavorite =request.body.favorited
    favoritedFilter = musicas.find((musica) => musica.id == idRequest)

    if (favoritedFilter){
        favoritedFilter.favorited = statusFavorite
        response.status(200).json([{
            message: "Classificação atualizada",
            musicas
        }])
    } else {
        response.status(404).json([{
            message: "classificação não modificada"
        }])
    }
}

// Deletar música por id (DELETE)

const deleteMusica = (request, response) => {
    const idRequest = request.params.id
    const indexMusicas = musicas.findIndex((musica) => musica.id == idRequest)
    musicas.splice( indexMusicas, 1)

    response.status(200).json([{
        "message":"Essa música não vai mas tocar, pois foi deletada",
        "deletado": idRequest,
        musicas
    }])
}
    
module.exports = {
    getAllMusics,
    getMusicById,
    getMusicByArtist,
    createMusic, 
    updateMusica,
    updateFavoritedStatus,
    deleteMusica
}


