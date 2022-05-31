const playlist = require("../models/musicas.json")

const allMusics = (request, response) => {
    try{
        response.status(200).json([{ Músicas : playlist }])
    }catch{
        response.status(500).send({ message : "Erro no server" })
    }
}

const musicsByArtists = (request, response) => {

    let artistsRequest = request.query.artists

    let artistsFilter = playlist.filter( music => music.artists.includes(artistsRequest))

    if (artistsFilter.length > 0){
        response.status(200).send(artistsFilter)
    }else{
        response.status(404).send({ message : "Artista não encontrado"})
    }
}

const musicsById = (request, response) => {

    let idRequest = request.params.id

    let idFilter = playlist.filter( music => music.id == idRequest)

    if( idFilter.length > 0){
        response.status(200).send(idFilter)
    }else {
        response.status(404).send({ message: "Música não encontrada" })
        }
    }

const addMusic = (request, response) => {
    try{
    let titleRequest = request.body.title 
    let lauchYearRequest = request.body.launchYear 
    let favoritedRequest = request.body.favorited 
    let artistsRequest = request.body.artists

    let newMusic = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: lauchYearRequest,
        favorited: favoritedRequest,
        artists: artistsRequest
    }

    playlist.push(newMusic)

    response.status(201).json([{
        message: "Nova música cadastrada",
        newMusic
    }])
    }catch (err){
        console.log(err)
        response.status(500).send([{
            message : "Erro interno ao cadastrar"
        }])
    }
}

const updateMusic = (request, response) => {

    let idRequest = request.params.id
    let musicReplace = request.body
    let musicFind = playlist.findIndex( music => music.id == idRequest)

    let upMusic = {
        id: idRequest,
        title: musicReplace.title,
        launchYear: musicReplace.launchYear,
        favorited: musicReplace.favorited,
        artists: musicReplace.artists
    }
 
    if( musicFind != -1) {
        playlist[musicFind] = upMusic
       response.status(200).send([{ 
        message : "Música alterada",
        upMusic,
        playlist }])

       }else{
        response.status(404).json([{
                    message : "Música não encontrada"
                }])
       }
}

const favoritedMusic = (request, response) => {
    
    let idRequest = request.params.id
    let favoritedRequest = request.body.favorited

    favoritedFilter = playlist.find( fav => fav.id == idRequest)

    if(favoritedFilter){
        favoritedFilter.favorited = favoritedRequest
        response.status(200).json([{
            message : "Música favoritada/desfavoritada",
            idRequest,
            favoritedRequest,
            playlist
        }])
    }else{
        response.status(404).json({ 
            message: "Não foi possível atualizar" 
        })
    }
}

const deleteMusic = (request, response) => {

    let idRequest = request.params.id
    let indexMusic = playlist.findIndex( music => music.id == idRequest)
   
    if( indexMusic != -1 ){
        playlist.splice(indexMusic, 1)
        response.status(200).json([{
            message: "Música deletada",
            playlist
        }])
    }else{
        response.status(404).json({ 
            message: "A música não foi deletada",
        })
    }
}




module.exports = {
    allMusics,
    musicsByArtists,
    musicsById,
    addMusic,
    updateMusic,
    favoritedMusic,
    deleteMusic
}