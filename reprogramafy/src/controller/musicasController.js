const musicas = require('../models/musicas.json')

const getAllMusicas = (request, response) => {
    try {
        response.status(200).json([{
            "musicas": musicas
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }
}


const getMusicasid = (request, response) => {
    {
        const idRequest = request.params.id

        let musicaEncontrada = musicas.find(musicas => musicas.id == idRequest)
        response.status(200).send(musicaEncontrada)
        

    }
}



const getPorArtista = (request, response) => {
    try{
        const artistaRequest = request.query.artista

        let artistasFilter = musicas.filter((musica) => musica.artists.includes(artistaRequest))
        console.log (artistasFilter)
        if (artistasFilter.length > 0) {
            response.status(200).send(artistasFilter)
        } else {
            response.status(404).send({
                "message": "Artista não encontrada"
            })
        }

    }catch(err){
        response.status(500).send({
            "message": err.message
        })
}
}


const addMusicas = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistsRequest = request.body.artists

        let newMusica = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            favorited: favoritedRequest,
            artists: artistsRequest
        }
        musicas.push(newMusica)
        response.status(201).json([{
            "message": "Nova musica cadastrada",
            newMusica
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            message: "Erro interno a cadastrar"
        }])
    }
}

const updateMusica = (request, response) => {
    try {
        const idRequest = request.params.id
        const musicasRequest = request.body

        let indexEncontrado = musicas.findIndex((musica) => musica.id == idRequest)

        musicas.splice(indexEncontrado, 1, musicasRequest)

        response.status(200).json([{
            "message": "Filme atualizado",
            musicas
        }])
    } catch(err) {
        console.log(err)
        response.status(500).send([{
            "message": err.message,
        }])
    }
}


const deleteMusica = (request, response) => {
    try {
        const idRequest = request.params.id
        const indiceMusicas = musicas.findIndex(musicas => musicas.id == idRequest)

        musicas.splice(indiceMusicas, 1)

        response.status(200).json([{
            "message": "Música deletada com sucesso!",
            "deletado": idRequest,
            musicas
        }])
    } catch (err) {
        console.log(err)
        response.status(404).send([{
            "message": err.message
        }])
    }
}


const favoritedMusica = (request, response) => {
    const idRequest = request.params.id
    const favoritedRequest = request.body.favorited
    favoritedFilter = musicas.find((musicas) => musicas.id == idRequest)
console.log(favoritedFilter)
    if (favoritedFilter) {
        favoritedFilter.favorited = favoritedRequest
        response.status(200).json([{
            message: "Favoritação atualizada com sucesso",
        }])
    } else {
        response.status(404).json([{
            message: "Não foi modificado, erro encontrado"
        }])
    }
}




module.exports = {
    getAllMusicas,
    getMusicasid,
    getPorArtista,
    addMusicas,
    updateMusica,
    deleteMusica,
    favoritedMusica
}