const musicas = require('../models/musicas.json')

//retorna todas as músicas
const getAllMusics = (request, response) => {
    try {
        response.status(200).json([{
            "músicas": musicas
        }])
    } catch (err) {
        response.status(500).send({ mensagem: "erro no servidor" })
    }
}

//retorna música de um artista específico
const getByArtists =(request , response) => {
    try{
        let artistsRequest = request.query.artists

        let artistsFilter = musicas.filter(musicas => musicas.artists.includes(artistsRequest),) 

    if (artistsFilter.length > 0) {
        response.status(200).send(artistsFilter)
    } else {
        response.status(404).send({mensagem: " Artista não encontrado"})
    }
    } catch (err){
        response.status(500).send({mensagem: "Erro no servidor"})
    }
}

//retorna música específica por id
const getById = (request, response) => {
    try{
    let idRequest = request.params.id

    let idEncontrado = musicas.find(musicas => musicas.id == idRequest)

    response.status(200).send(idEncontrado)
    
    } catch (err){
        response.status(404).send({mensagem:"id não encontrada"})
    }
}


module.exports = {
    getAllMusics,
    getByArtists,
    getById
}
