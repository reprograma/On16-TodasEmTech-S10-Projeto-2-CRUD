const res = require("express/lib/response")
const musicas = require("../models/musicas.json")

const getAllMusic = (request, response) => {
    response.status(200).json([{
        "músicas": musicas
    }])
}

const getMusicById = (request, response) => {
    const idRequest = request.params.id
    const musicaEncontrada = musicas.find(musica => musica.id == idRequest)

    response.status(200).send(musicaEncontrada)
}

const getMusicByArtist = (request, response) => {
    const artistRequest = request.query.artist.toLowerCase()
    const musicasFiltradas = musicas.filter(musica => musica.artists.toLowerCase().includes(artistRequest))

    response.status(200).send(musicasFiltradas)
}

const postNewMusic = (request, response) => {
    const titleRequest = request.body.title
    const launchRequest = request.body.launchYear
    const favoritedRequest = request.body.favorited
    const artistsRequest = request.body.artists
    const newId = musicas.length + 1

    const newMusic = {
        id: newId,
        title: titleRequest,
        launchYear: launchRequest,
        favorited: favoritedRequest,
        artists: artistsRequest
    }

    musicas.push(newMusic)
    response.status(200).json([{
        "mensagem": "nova música adicionada!",
        newMusic
    }])
}

const updateMusic = (request, response) => {
    const idRequest = request.params.id
    const musicRequest = request.body

    const musicaEncontrada = musicas.findIndex(musica => musica.id == idRequest)
    musicas.splice(musicaEncontrada, 1, musicRequest)

    response.status(200).json([{
        "message": "música atualizada!",
        musicas
    }])
}

const deleteMusic = (request, response) => {
    const idRequest = request.params.id
    const musicaEncontrada = musicas.findIndex(musica => musica.id == idRequest)
    splice(musicaEncontrada, 1)

    response.status(200).json([{
        "mensagem": "música excluída",
        musicas
    }])
}

const favMusic = (request, response) => {
    const idRequest = request.params.id
    const musicaEncontrada = musicas.find(musica => musica.id == idRequest)
    if (musicaEncontrada.favorited === true){
        musicaEncontrada.favorited = false
    } else {
        musicaEncontrada.favorited = true
    }

    response.status(200).json([{
        "mensagem": "música favoridata/desfavoritada!",
        musicaEncontrada
    }])
}

module.exports = {
    getAllMusic,
    getMusicById,
    getMusicByArtist,
    postNewMusic,
    updateMusic,
    deleteMusic,
    favMusic
}