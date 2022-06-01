const musicJson = require('../models/musicas.json')

const getAllSongs = (request, response) => {
    try{
        response.status(200).json([{
            "musicas": musicJson
        }])
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
        response.status(404).send([{
            message: "Música não encontrada"
        }])
    }
}

module.exports = {
    getAllSongs,
    getMusic
}