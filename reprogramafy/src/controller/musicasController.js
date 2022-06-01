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