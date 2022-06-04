//const { response } = require('../app')
const musicas = require('../models/musicas.json')

const getAllMusicas = (request, response) => {
    response.status(200).json([{
        "Musicas": musicas
    }])
}

const musicaPorId = (request, response) => {
    const idRequest = request.params.id
    const idFilter = musicas.filter(musicas => musicas.id == idRequest)

    if (idFilter.length > 0) {
        response.status(200).send(idFilter)
    } else {
        response.status(404).send([{
            "message": "Música não encontrada"
        }])
    }
}

const musicaArtist = (request, response) => {
    let artistRequest = request.query.artists
    console.log(artistRequest)

    let artistEncontrado = musicas.filter(
        musica => musica.artists.includes(artistRequest)

    )
    response.status(200).send(artistEncontrado)
}

const addMusicas = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistsRequest = request.body.artists

        let newMusicas = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            favorited: favoritedRequest,
            artists: artistsRequest
        }
        musicas.push(newMusicas)
        response.status(201).json([{
            "message": "Nova musica cadastrada", newMusicas
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            message: "Erro interno ao cadastrar musica"
        }])
    }
}

const updateMusic = (request, response) => {
    const idMusic = request.params.id
    const musicAtualizada = request.body
 
    const posicaoMusic = musicas.findIndex(music => {
       return music.id == idMusic
    })
   
    musicas.splice(posicaoMusic, 1, musicAtualizada)
    response.status(200).json([{
 
        "mensagem": "lista de músicas atualizada com sucesso",
        musicas
    }])
}
    
const deleteMusic = (request, response) => {
    const idRequest = request.params.id

    const indiceMusic = musicas.findIndex(music => {
        return music.id == idRequest
    })
    musicas.splice(indiceMusic, 1)

    response.status(200).json([{
        "message": "Música deletada por id",
        "deletado": idRequest,
        musicas
    }])

}

const favoritarMusic = (request, response) =>{
    const idRequest = request.params.id
    const favoritedRequest = request.body.favorited
 
    favoritedFilter = musicas.find((music => music.id == idRequest ))
           
   
    if(favoritedFilter){
        favoritedFilter.favorited = favoritedRequest
        response.status(200).json([{
 
            message: "Musica favoritada com sucesso!",
            musicas
        }])
 
 
    }else{
        response.status(404).json([{
 
            message:"Não foi atualizada, sorry "
        }])
    }
}


module.exports = {
    getAllMusicas,
    musicaPorId,
    addMusicas,
    deleteMusic,
    musicaArtist,
    updateMusic,
    favoritarMusic
}