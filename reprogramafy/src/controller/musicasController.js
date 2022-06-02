const tracks = require('../models/musicas.json')

const getAllTracks = (req, res) => {
    try {
        res.status(200).json([{
            "Musicas": tracks
        }])
    } catch (err) {
        res.status(500).send({ message: "Error no server"})
        }
}

const getIdTracks = (req, res) => {
    let idRequest = req.params.id

    let idFilter = tracks.filter(tracks => tracks.id == idRequest)

    if (idFilter.length > 0) {
        res.status(200).send(idFilter)
    } else {res.status(404).send([{ message: "Id não encontrado" }])}
}

const getArtists = (req, res) => {
    let artistRequest = req.query.artists.toLowerCase();

    let artistFilter = tracks.filter(tracks => {
        artistLowerCase = tracks.artists.map(artistArray => artistArray.toLowerCase())
        return artistLowerCase.includes(artistRequest)
    })
    if (artistFilter.length > 0) {

        res.status(200).send(artistFilter)

    } else {res.status(404).send([{message: "Artista não encontrado"}])}
}

const addTracks = (req, res) => {
    try{
    let titleRequest = req.body.title
    let launchYearRequest = req.body.launchYear
    let favoritedRequest = req.body.favorited
    let artistRequest = req.body.artists

    let newTrack = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: launchYearRequest,
        favorited: favoritedRequest,
        artists: artistRequest
    }
    tracks.push(newTrack)
    res.status(201).json([{
        message: 'Nova música cadastrada',
        tracks
    }])
    }catch(err){console.log(err)

    res.status(500).send([{message: 'Erro interno ao cadastrar'}])

    }
}

const changeTrack = (req, res) => {

    const idRequest = req.params.id
    let trackRequest = req.body
    let tracksFilter = tracks.findIndex((track) => track.id == idRequest)

    tracks.splice(tracksFilter, 1, trackRequest)

    if (tracksFilter > -1){
        res.status(200).json([{
        message: 'Música atualizada',
        tracks,
        }])
    } else {res.status(404).send([{ message: "A informação não foi modificada" }])}

}

const deleteTrackId = (req, res) => {
    const idRequest = req.params.id
    let trackId = tracks.findIndex((track) => track.id == idRequest)
    let idDeleted = tracks.filter(tracks => tracks.id == idRequest)

    tracks.splice(trackId, 1)

    if (trackId > -1) {
        res.status(200).json([{
            "message": "Id deletado",
            idDeleted,
            tracks
        }])
    } else {
        res.status(404).send([{ message: 'A música não foi deletada'}])
    }
}

const updateTrack = (req, res) => {
    const idRequest = req.params.id
    const favRequest = req.body.favorited
    favFilter = tracks.find((tracks) => tracks.id == idRequest)

    if(favFilter) {
        favFilter.favorited = favRequest
        res.status(200).json([{
            message: "A tag de favorito foi alterada com sucesso",
            tracks
        }])
    }else{
        res.status(404).json([{message: "A tag de favorito não foi modificada"}])}
}


module.exports = {
    getAllTracks,
    getIdTracks,
    getArtists,
    addTracks,
    changeTrack,
    deleteTrackId,
    updateTrack
}