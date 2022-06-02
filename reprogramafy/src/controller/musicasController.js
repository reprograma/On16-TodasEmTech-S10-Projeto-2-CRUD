const { response } = require('../app')
const musics = require('../models/musicas.json')


const getAllMusics = (request, response) => {
    try {
        response.status(200).json([{
            "Musics": musics
        }])
    } catch(e){
        response.status(500).send({
            message: "Erro no server"
        })
    }
}

const getMusic = (request, response) => {
    const musicRequest = request.params.id
    const musicFilter = musics.filter(music => music.id == musicRequest)
    
    if(musicFilter){
        response.status(200).send(musicFilter)
    }else{
        response.status(500).send('Erro no server')

    }
}

const getArtist = (request, response) => {
    const artistRequest = request.query.artists
    const artistFilter = musics.filter(artist => artist.artists.includes(artistRequest))
    
    if(artistFilter){
        response.status(200).send(artistFilter)
    }else{
        response.status(500).send('Erro no server')

    }
}


const addMusics = (request, response) => {

    let titleRequest = request.body.title
    let launchRequest = request.body.launch
    let favoritedRequest = request.body.favorited
    let artistsRequest = request.body.artists

    let newMusic = {
        id:(musics.length)+1,
        title: titleRequest,
        launchYear: launchRequest,
        favorited: favoritedRequest,
        artists: artistsRequest
    }

    musics.push(newMusic)
    response.status(201).json([{
        "message": "Nova musica cadastrada com sucesso!",
        newMusic
    }])
}

const attMusic = (request,response) => {
    const idRequest = request.params.id
    let titleRequest = request.body.title
    let launchRequest = request.body.launch
    let favoritedRequest = request.body.favorited
    let artistsRequest = request.body.artists    
    musicFilter = musics.find((music) => music.id == idRequest)

    if(musicFilter){
        musicFilter.title = titleRequest
        musicFilter.launchYear = launchRequest
        musicFilter.favorited = favoritedRequest
        musicFilter.artists = artistsRequest
        response.status(200).json([{
            message: "Música atualizada com sucesso",
            musicFilter
        }])
    } else {
        response.status(404).json([{
            message: "Não foi modificado"
        }])
    }
}


const deleteMusic = (request,response) => {
    const idRequest = request.params.id
    let findId = musics.findIndex(find => find.id == idRequest)
    musics.shift(findId,1)
    
    response.status(200).json([{
            "message": "item deletado",
            "detalhes": findId,
            musics
        }])
}

const favoriteMusic = (request,response) => {
    const idRequest = request.params.id
    let findId = musics.find(find => find.id == idRequest)
    if(findId) {
        findId.favorited = true
        response.status(200).json([{
            message: "Música favoritada com sucesso",
            findId
        }])
    } else {
        response.status(404).json([{
            message: "Não foi modificado",
        }])
    }
}

module.exports = {
    getAllMusics,
    getMusic,
    getArtist,
    addMusics,
    attMusic,
    deleteMusic,
    favoriteMusic
}
