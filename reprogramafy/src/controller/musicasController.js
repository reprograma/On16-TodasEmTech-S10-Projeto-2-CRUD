const musics = require('../models/musicas.json')

const getAllMusics = (req, res) => {
    try {
        res.status(200).json([{
            Musics: musics,
        }])
    } catch (err) {
        res.status(500).send({ 
            message: "Erro no server" 
        })
    }
};

const getMusicByID = (req, res) => {
    const idRequest = req.params.id;
    const foundMusic = musics.find(musics => musics.id == idRequest)
    res.status(200).send(foundMusic)
};

//nao consegui rodar no postman
const getMusicByArtist = (req, res) => {
    const artistsRequest = req.query.artists.toLowerCase()
    const artistsFilter = musics.filter(musicas => {
        artistasLowerCase = musicas.artists.map(artistasArray => artistasArray.toLowerCase())
        return artistasLowerCase.includes(artistsRequest)
    })

    if(artistsFilter.length > 0) {
        res.status(200).send(artistsFilter)
    } else {
        res.status(404).send({
            message: "artista não encontrado"
        })
}};

const addMusic = (req, res) => {
    try {
        let titleRequest = req.body.title;
        let yearRequest = req.body.launchYear;
        let favoriteRequest = req.body.favorited;
        let artistsRequest = req.body.artists;

        let newMusic = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: yearRequest,
            favorited: favoriteRequest,
            artists: artistsRequest
        }
        musics.push(newMusic)

        res.status(201).json([{
            message: "Música cadastrada!",
            newMusic
        }])
    }catch(err){
        console.log(err);
        res.status(500).send({
            message: "Erro interno ao cadastrar."
        })
    }
};

const updateFavoritedMusic = (res, req) => {
    let idRequest = req.params.id;
    let favoritedRequest = req.body.favorited;
    favoritedFilter = musics.find((musics) => musics.id == idRequest)

    if(favoritedFilter) {
        favoritedFilter.favorited = favoritedRequest
        res.status(200).json([{
            message: "Classificação atualizada",
            musics
        }])
    } else {
        res.status(404).json([{
            message: "Não alterado"
        }])
    }

};

const updateMusic = (req, res) => {
    try {
        const idRequest = req.params.id
        const musicRequest = req.body

        let foundIndex = musics.findIndex(musica => musica.id == idRequest)

        musics.splice(foundIndex, 1, musicRequest)

        response.status(200).json([{
            message: "Música atualizada",
            musics
        }])
    } catch {
        console.log(err)
        response.status(500).send([{
            message: "Falha ao cadastrar nova música."
        }])
    }
};

const deleteMusic = (req, res) => {
    try {
        const idRequest = req.params.id
        const musicsIndex = musics.findIndex(musicas => musicas.id == idRequest)

        musics.splice(musicsIndex, 1)

        response.status(200).json([{
            message: "Música deletada com sucesso!",
            "deletado": idRequest,
            musics
        }])
    } catch (err) {
        console.log(err)
        response.status(404).send([{
            message: "Erro ao deletar"
        }])
    }
}

module.exports = {
    getAllMusics,
    getMusicByID,
    getMusicByArtist,
    addMusic,
    updateFavoritedMusic,
    updateMusic,
    deleteMusic
}