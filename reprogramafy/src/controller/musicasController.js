const musicas = require('../models/musicas.json')

//retornar todas as musicas

const getAllMusics = (request, response) =>{
    try{ response.status(200).json([{
        "Musics": musicas
    }])
} catch(err){
    response.status(500).send({message: "Erro no server"})
}
}

const getById = (request, response) =>{
    const idRequest = request.params.id
    const idFilter = musicas.filter(music => music.id ==idRequest)
    
    if(idFilter.length > 0) {
        response.status(200).send(idFilter)
    }else{
        response.status(404).send([{
            "message": "Música específica não encontrada"
        
        }])
    }        
    
   
}

const getByArtist = (request, response) => {
    let artistRequest = request.query.artists 
    try {
   
    let artistFilter = musicas.filter(
        music => music.artists.includes(artistRequest)
 
    )
    response.status(200).send(artistFilter)

} catch(err){
    response.status(500).send({message: "Erro no server sinto muito"})
}
}

const addMusic = (request, response) => {
    try{
     let titleRequest = request.body.title
     let launchYearRequest = request.body.launchYear
     let favoritedRequest = request.body.favorited
     let artistsRequest = request.body.artists

     let newMusic = {
         id: Math.floor(Date.now() * Math.random()).toString(36),
         title: titleRequest,
         launchYear: launchYearRequest,
         favorited: favoritedRequest,
         artists: artistsRequest
     }
     musicas.push(newMusic)
     response.status(201).json([{
         "message": "Nova musica cadastrada", newMusic
     }])

 }catch(err){
     console.log(err)
     response.status(500).send([{
         message: "Erro interno ao cadastrar música"
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
 
            message: "Sua musica foi favoritada com sucesso!",
            musicas
        }])
 
 
    }else{
        response.status(404).json([{
 
            message:"Não foi atualizada, sorry "
        }])
    }
}



module.exports = {
    getAllMusics,
    getById,
   getByArtist,
    addMusic,
    updateMusic,
    deleteMusic,
    favoritarMusic
}
