const music = require('../models/musicas.json')



const getAllMusics = (request, response) => {
    try {
        response.status(200).json([
            {
                Músicas: music,
            }
        ])
    } catch (err) {
        response.status(500).send({ message: 'Erro no server' })
    }
}


const getMusic = (request, response) => {
    try {
    const idRequest = request.params.id
        let findMusic = music.find((song) => song.id == idRequest)

        if (findMusic) {
            response.status(200).send(findMusic)
        } else {
            response.status(404).send({ message: 'Música não encontrada!' })
        }
    } catch (err) {
        response.status(500).send({ message: 'Erro no server' })
    }
}


const getArtist = (request, response) => {
    try {
        let artistRequest = request.query.artists

        let artistFilter = music.filter((song) => song.artists.includes(artistRequest))

        if (artistFilter.length > 0) {
            response.status(200).send(artistFilter)
        } else {
            response.status(404).send({ message: 'Artista não encontrado' })
        }
    } catch (err) {
        response.status(500).send({ message: 'Erro no server!' })
    }
}


const createMusic = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistsRequest = request.body.artists

        let newMusic = {
            id: (music.length) + 1,
            title: titleRequest,
            launchYear: launchYearRequest,
            favorited: favoritedRequest,
            artists: artistsRequest
        }

        music.push(newMusic)

        response.status(201).json([
            {
                message: 'Música cadastrada',
                newMusic,
            },
        ])
    } catch (err) {
        response.status(500).send({ message: 'Erro ao cadastrar' })
    }
}


const updateMusic = (request, response) => {
    try {
        const idRequest = request.params.id
        const musicRequest = request.body

        let foundIndexMusic = music.findIndex((song) => song.id == idRequest)

        if (foundIndexMusic) {
            music.splice(foundIndexMusic, 1, musicRequest)

            response.status(200).json([
                {
                    message: "Filme alterado com sucesso",
                    music,
                },
            ])

        } else {
            response.status(404).json([
                {
                    message: 'Seu filme não foi alterado',
                },
            ])
        }
    } catch (err) {
        response.status(500).send({ message: 'Erro ao cadastrar'})
}
}


const updateFavorited = (request, response) => {
    try {
        const idRequest = request.params.id
        const favoritedRequest = request.body.favorited

        favoritedFilter = music.find((song) => song.id == idRequest)

        if (favoritedFilter) {
            favoritedFilter.favorited = favoritedRequest

            response.status(200).json([
                {
                    message: 'Sua mofificação foi feita com sucesso',
                    music,
                },
            ])
        } else {
            response.status(404).json([
                {
                    message: 'A música não foi favoritada/desfavoritada'
                }
            ])
        }
    } catch (err) {
        response.status(500).send({message: 'Erro ao cadastrar'})
    }
}


const deleteMusic = (request, response) => {
    try {
        const idRequest = request.params.id
        const indexMusic = music.findIndex((song) => song.id == idRequest)

        music.splice(indexMusic, 1)
        response.status(200).json([
            {
                message:'A música foi deletada',
                deletada: idRequest,
                music
            }
        ])
    } catch (err) {
        response.status(500).send({message: 'Erro ao deletar '})
    }
}








module.exports = {

    getAllMusics,
    getMusic,
    getArtist,
    createMusic,
    updateMusic,
    updateFavorited,
    deleteMusic

}