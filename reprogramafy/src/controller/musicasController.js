const musics = require("../models/musicas.json")

const getMusics = (request, response) => {
    try{
        response.status(200).json([
            {
                "mensagem": musics
            }
        ])
    } catch(err){
        response.status(500).json([
            {
                "mensagem": "problms no servidor, cuida em consertar"
            }
        ])
    }
}

const getForMusic = (request, response) => {
    try{
        const idRequest = request.params.idRequest
        let idFound = musics.find(music => music.id == idRequest)

        response.status(200).json(idFound)

    } catch(err){
        response.status(500).json([
            {
                "mensagem": "problems no servidor, cuida em consertar"
            }
        ])
    }
}

// tentar depois com toLocaleLowerCase()
const getForArtist = (request, response) => {

    try{
        let artistRequest = request.query.artists
        let artistReturn = musics.filter(x => x.artists == artistRequest)

        response.status(200).json(artistReturn)
    } catch(err){
        response.status(500).json([
            {
                "mensagem": "problems no servidor, cuida em consertar"
            }
        ])
    }
}

const addMusic = (request, response) => {
    try{
        let titleRequest = request.body.title
        let yearRequest = request.body.launchYear
        let favoritedResquest = request.body.favorited
        let artistRequest = request.body.artists
        
        let newMusic = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: yearRequest,
            favorited: favoritedResquest,
            artists: artistRequest
        }

        musics.push(newMusic)
        response.status(200).json([
            {
                "mensagem": "Música nova pra escutar até abusar",
                newMusic
            }
        ])
    } catch(err) {
        response.status(500).send({
            "mensagem": "problems no servidor, cuida em consertar"})
    }
}

const updateMusic = (request, response) => {
    try{
        const idRequest = request.params.id
        let  theChange = request.body

        let indexEncontrado = musics.findIndex(music => music.id == idRequest)

        musics.splice(indexEncontrado, 1, theChange)

        response.status(200).json([
            {
                "mensagem": "Agora escuta essa aqui",
                musics
            }
        ])
    } catch (err){
        response.status(500).json([
            {
                "mensagem": "problems no servidor, cuida em consertar"
            }
        ])
    }
}

const atualizarMusic = (request, response) => {
    try{
        const idRequest = request.params.id
        const favoritedRequest = request.body.favorited

        favoritedFound = musics.find(music => music.id == idRequest)

        favoritedFound.favorited = favoritedRequest

        response.status(200).json([
            {
                "mensagem": "tu gosta não gosta?",
                favoritedFound
            }
        ])
    }    catch (err){
        response.status(500).json([
            {
                "mensagem": "problems no servidor, cuida em consertar"
            }
        ])
    }
}

const deleteMusic = (request, response) => {
     try{
        const idRequest = request.params.id
        const indexMusic = musics.findIndex(music => music.id == idRequest)

        musics.splice(indexMusic, 1)

        response.status(200).json([
            {
                "mensagem": "tchauzinho",
                "a que já era": indexMusic,
                musics
            }
        ])
    } catch(err){
    response.status(500).json([
        {
            "mensagem": "problems no servidor, cuida em consertar"
        }
    ])
}}



module.exports = {
    getMusics,
    getForMusic,
    getForArtist,
    addMusic,
    updateMusic,
    atualizarMusic,
    deleteMusic
}