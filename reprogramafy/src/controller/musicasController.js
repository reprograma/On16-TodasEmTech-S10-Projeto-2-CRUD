const musicJson = require('../models/musicas.json')

const getAllSongs = (request, response) => {
    try{
        response.status(200).json({
            "musicas": musicJson
        })
    } catch (err){
        response.status(500).send({
            message: 'Erro no servidor'
        })
    }
}

const getMusic = (request, response) => {
    const idRequest = request.params.id
    const musicFind = musicJson.find(music => music.id == idRequest)

    if (musicFind) {
        response.status(200).send(musicFind)
    } else {
        response.status(404).send({
            message: "Música não encontrada"
        })
    }
}

const getArtista = (request, response) => {
    let artistaRequest = request.query.artists.toLowerCase()
   
    let musicEncontrada = musicJson.filter(musica => {
        artistasLowerCase = musica.artists.map(artista => artista.toLowerCase())
        return artistasLowerCase.includes(artistaRequest)
    })

    if(musicEncontrada.length > 0){
        response.status(200).send(musicEncontrada)
    } else {
        response.status(404).send({
            message: "Artista não encontrado"
        })
    }
}

const addSong = (request, response) =>{
    try{
        let titleRequest = request.body.title
        let anoRequest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistsRequest = request.body.artists

        let newSong = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: anoRequest,
            favorited: favoritedRequest,
            artists: artistsRequest
        }

        musicJson.push(newSong)

        response.status(201).json({
            message: "Nova Música cadastrada",
            newSong
        })
    } catch (err) {
        response.status(500).send({
            message: "Erro Interno ao Cadastrar"
        })
    }
}

const updateSong = (request, response) =>{
    try{
        const idRequest = request.params.id
    let atualizaRequest = request.body

    let indexEncontrado = musicJson.find(musica => musica.id == idRequest)
    musicJson.splice(indexEncontrado, 1, atualizaRequest)

    response.status(201).json({
        message: "Música Atualizada",
        musicJson
    })
    } catch (err){
        response.status(500).send({
            message: "Erro Interno ao Cadastrar"
        })
    }
}

const deleteSong = (request, response) => {
    try{
        const idRequest = request.params.id
        const deleteMusica = musicJson.findIndex(music => music.id == idRequest)

        musicJson.splice(deleteMusica, 1)

        response.status(204).json({
            "message": "Música deletada com Sucesso",
            "Deletada": idRequest,
            musicJson
        })
    } catch (err){
        response.status(400).send({
            message: "Erro Interno ao deletar música"
        })
    }
}

const updatefavorited = (request, response) => {
    const idRequest = request.params.id
    const favoritedRequest = request.body.favorited

    favoritedFilter = musicJson.find(music => music.id == idRequest)

    if(favoritedFilter) {
        favoritedFilter.favorited = favoritedRequest
        response.status(200).json({
            message: "Alterada com sucesso",
            "Musica Alterada": idRequest,
            musicJson
        })
    } else {
        response.status(404).json({
            message: "Não foi possível alterar"
        })
    }
}

module.exports = {
    getAllSongs,
    getMusic,
    getArtista,
    addSong,
    updateSong,
    deleteSong,
    updatefavorited
}