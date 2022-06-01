const { request, response } = require('../app')
const playlist = require('../models/musicas.json')

const getAllSongs = (request, response) => {
    try {
        response.status(200).json([{
            'Musicas': playlist
        }])
    }catch(err){
        response.status(500).send({ message: 'Erro no servidor'})
    }
}

const getSong = (request, response) => {
    const songRequest = request.params.id
    const songFilter = playlist.filter((playlist) => playlist.id == songRequest)
    
    if (songFilter.length > 0) {
        response.status(200).send(songFilter)
    }else{
        response.status(404).send([{
            'message': 'Música não encontrada'
        }])
    }
}

const getByArtist = (request, response) => {
    const artistRequest = request.query.artists
    const artistFilter = playlist.filter((playlist) => playlist.artists.includes(artistRequest))

    if (artistFilter.length > 0) {
        response.status(200).send(artistFilter)
    }else{
        response.status(404).send([{
            'message': 'Artista não encontrado'
        }])
    }
}

const addSong = (request, response) => {
    try{
        let titleRequest = request.body.title
        let launchRequest = request.body.launchYear
        let favoriteRequest = request.body.favorited
        let artistsRequest = request.body.artists

        let newSong = {
            id: Math.floor(Date.now() * Math.random().toString(36)),
            title: titleRequest,
            launchYear: launchRequest,
            favorited: favoriteRequest,
            artists: artistsRequest
        }
        playlist.push(newSong)
        response.status(201).json([{
            'message': 'Música adicionada',
            newSong
        }])
    }catch(err){
        console.log(err)
        response.status(500).send([{
            'message': 'Erro interno ao adicionar'
        }])
    }
}

const updateSong = (request, response) => {
    const idRequest = request.params.id
    let songRequest = request.body

    let songFinder = playlist.findIndex((playlist) => playlist.id == idRequest)

    if (playlist.splice(songFinder, 1, songRequest)){
        response.status(200).json([{
            'message': 'Música atualizada',
            playlist
        }])
    }else{
        response.status(404).send([{
            'message': 'Música não encontrada'
        }])
    }
}

const favoritedSong = (request, response) => {
    const idRequest = request.params.id
    const favoriteRequest = request.body.favorited
    favoriteFinder = playlist.find((playlist) => playlist.id == idRequest)

    if (favoriteFinder) {
        favoriteFinder.favorited = favoriteRequest
        response.status(200).json([{
            'message': 'Favoritos alterado',
            playlist
        }])
    }else{
        response.status(404).json([{
            'message': 'Não foi possível alterar'
        }])
    }
}

const deleteSong = (request, response) => {
    const idRequest = request.params.id
    const songFinder = playlist.findIndex((playlist) => playlist.id == idRequest)

    playlist.splice(songFinder, 1)

    if (songFinder) {
        response.status(200).json([{
            'message': 'Música deletada',
            'Deletado': idRequest,
            playlist
        }])
    }else{
        response.status(404).send([{
            'message': 'Música não encontrada'
        }])
    }
}

module.exports = {
    getAllSongs,
    getSong,
    getByArtist,
    addSong,
    updateSong,
    favoritedSong,
    deleteSong
}