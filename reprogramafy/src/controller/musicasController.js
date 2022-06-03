const songs = require('../models/musicas.json')

//Biblioteca
const getAllSongs = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": songs
        }])
    } catch (err) {
        response.status(500).send({ "message": "Erro no Server" }) //Como não se trata de um Json, mas de um catch, a palavra message não precisa de aspas
    }
}

//Filtra por uma id
const getSong = (request, response) => {
    try {
        const idReq = request.params.id
        const musicEncontrada = songs.filter(music => music.id == idReq)
        response.status(200).send(musicEncontrada)
    } catch (err) {
        response.status(404).send({
            "message": "Música não encotrada. Ela não existe na sua lista :("
        })
    }
}

//Filta por artista
const getArtist = (request, response) => {
    let artistRequest = request.query.artists

    let artistEncontrado = songs.filter(musica => {
        artistTLC = musica.artists.map(artistarray =>
            artistarray.toLowerCase())
        return artistTLC.includes(artistRequest)
    })
    console.log(artistEncontrado)
    if (artistEncontrado.length > 0) {
        response.status(200).send(artistEncontrado)
    } else {
        response.status(404).send([{
            "message": "Topico nao encotrado, não existe na sua lista :("
        }])
    }
}

//Cadastra nova Música
const addSong = (request, response) => {
    try {
        let tituloReq = request.body.title
        let anoReq = request.body.launchYear
        let starReq = request.body.favorited
        let artistaReq = request.body.artists

        let novaMusica = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: tituloReq,
            launchYear: anoReq,
            favorited: starReq,
            artists: artistaReq

        }
        songs.push(novaMusica)
        response.status(201).json([{
            "message": "Novo Podcast Cadastrado",
            novaMusica
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            "message": "Erro interno no Servidor"
        }])
    }
}

//Atualiza uma música específica exceto ID
const attSong = (request, response) => {
    try {
        let idReq = request.params.id
        let musicaR = request.body

        let musicEncontrada = songs.findIndex(musicaF => musicaF.id == idReq)
        songs.splice(musicEncontrada, 1, musicaR)

        response.status(200).json([{
            "message": "Musica atualizada com Sucesso!",
            songs
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            "message": "Erro interno no Servidor"
        }])
    }
}

//Deleta Música específica
const deleteSong = (request, response) => {
    try {
        const idReq = request.params.id
        const idMusic = songs.findIndex(musicsong => musicsong.id == idReq)
        songs.splice(idMusic, 1)
        response.status(200).json([{
            "message": "Musica deletada",
            "deletada": idMusic,
            songs
        }])
    } catch (error) {
        console.log(error)
        response.status(404).send([{
            "message": "Id não encontrado"
        }])
    }
}

//Favoritar ou Desfavoritar Música 
const statusSong = (request, response) => {
    try {
        const idReq = request.params.id
        let starsR = request.body.favorited
        musicaFav = songs.find(songF => songF.id == idReq)
        musicaFav.favorited = starsR

        response.status(200).json([{
            "message": "Status de favorido atualizado",
            musicaFav
        }])
    } catch (error) {
        console.log(error)
        response.status(404).send([{
            "message": "Id não encontrado"
        }])
    }
}

//Exporta funções
module.exports = {
    getAllSongs,
    getSong,
    getArtist,
    addSong,
    attSong,
    deleteSong,
    statusSong
}