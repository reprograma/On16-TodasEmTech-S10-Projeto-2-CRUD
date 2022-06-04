const listaMusicas = require('../models/musicas.json')

const getSongs = (req, res) => {
    res.status(200).json({
        'message': "Essas são todas as músicas cadastradas.",
        listaMusicas
    })
}

const getMusic = (req, res) => {
    let titleRequest = req.query.title
    let musicaEncontrada = listaMusicas.find(musica => musica.title.includes(titleRequest))
    res.status(200).json({
        'message': 'Encontramos sua música:',
        musicaEncontrada
    })

}

const getMusicByArtist = (req, res) => {
    let artistRequest = req.query.artists
    const artistFilter = listaMusicas.find(artista => artista.artists.includes(artistRequest))

    if (artistFilter) {
        artistFilter.artists == artistRequest
        res.status(200).json({
            message: 'Encontramos seu artista!'
        })
    } else {
        res.status(404).json({
            message: 'Artista não encontrado.'
        })
    }

}

const addMusic = (req, res) => {
    let titleRequest = req.body.title
    let yearRequest = req.body.launchYear
    let rateRequest = req.body.favorited
    let artistRequest = req.body.artists

    newMusic = [
        id = Math.floor(Date.now() * Math.random()).toString(36),
        title = titleRequest,
        launchYear = yearRequest,
        favorited = rateRequest,
        artists = artistRequest
    ]

    listaMusicas.push(newMusic)

    res.status(200).json({
        message: 'Sua música foi cadastrada com sucesso!',
        newMusic

    })
}

const atualizarMusic = (req, res) => {

    let titleUpdate = req.body.title
    let yearUpdate = req.body.launchYear
    let rateUpdate = req.body.favorited
    let artistUpdate = req.body.artists

    let updateMusic = {

        title: titleUpdate,
        launchYear: yearUpdate,
        favorited: rateUpdate,
        artists: artistUpdate
    }

    res.status(200).json({
        'message': 'Sua música foi atualizada.',
        updateMusic
    })
}

const deleteMusic = (req, res) => {

    const deleteRequest = request.params.id
    const deleteFilter = listaMusicas.findIndex((musica) => musica.id == deleteRequest)

    if (deleteFilter) {
        deleteFilter == deleteRequest
        listaMusicas.splice(deleteFilter, 1)

        response.status(200).json({
            "mensagem": "O podcast foi deletado",
            "deletado": deleteRequest,
            listaMusicas
        })

    } else {
        response.status(500).send({
            "menssage": "Música requisitada não encontrado."
        })

    }
}

const rateMusic = (req, res) => {
    let idRequest = req.params.id
    let rateRequest = req.body.favorited

    let rateFilter = listaMusicas.find((musica) => musica.id == idRequest)

    if (rateFilter) {
        rateFilter.favorited = rateRequest
        res.status(200).json({
            "message": "Classificação atualizada com sucesso.",
            rateRequest

        })

    } else {
        res.status(404).json({
            "message": "Erro no servidor."
        })

    }
}


module.exports = {
    getSongs,
    getMusic,
    getMusicByArtist,
    addMusic,
    atualizarMusic,
    deleteMusic,
    rateMusic
}


