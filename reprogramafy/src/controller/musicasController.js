const music = require('../models/musicas.json')

const getAllMusic = (request, response) => {
    try {
        response.status(200).json([
            {
                Musicas: music,
            },
        ]);
    } catch (err) {
        response.status(500).send({ message: "Erro no server" });
    }
};
const getMusic = (request, response) => {
    const especificMusic = request.query.title
    const musicFilter = music.filter((musica) => musica.title.includes(especificMusic))
    if (musicFilter.length > 0) {
        response.status(200).send(musicFilter);
    } else {
        response.status(404).send([
            {
                message: "Musica não Encontrada",
            },
        ]);
    }
};
const getArtist = (request, response) => {
    const artist = request.query.artists
    const artistFilter = music.filter((artista) => artista.artists.includes(artist))
    if (artistFilter.length > 0) {
        response.status(200).send(artistFilter);
    } else {
        response.status(404).send([
            {
                message: "Artista não encontrado"
            },
        ]);
    }
};

const cadastro = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchRquest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistRequest = request.body.artists

        let newMusic = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchRquest,
            favorited: favoritedRequest,
            artists: artistRequest,

        }
        music.push(newMusic);
        response.status(201).json([
            {
                message: 'musica nova cadastrada', music
            }
        ])
    } catch (err) {
        console.log(err);
        response.status(500).send([
            {
                message: "Erro interno ao cadastrar",
            },
        ]);
    }
};
const update = (request, response) => {
    const idRequest = request.params.id
    let titleRequest = request.body

    let songFinder = music.findIndex((musica) => musica.id == idRequest)

    if (music.splice(songFinder, 1, titleRequest)) {
        response.status(200).json([{
            'message': 'Música atualizada',
            music
        }])
    } else {
        response.status(404).send([{
            'message': 'Música não encontrada'
        }])
    }
}

const favorited = (request, response) => {
    const idRequest = request.params.id
    const favoriteRequest = request.body.favorited

    findfavorite = music.find((musica) => musica.id == idRequest)
    if (findfavorite) {
        findfavorite.favorited = favoriteRequest
        response.status(200).json([{
            message: 'like atualizado', music
        }])

    } else {
        response.status(404).send([{
            message: 'erro ao atualizar'
        }])
    }
}

const deleteMusic = (request, response) => {
    const idRequest = request.params.id
    const indiceMusic = music.findIndex((musica) => musica.id == idRequest)

    music.splice(indiceMusic, 1)

    if (indiceMusic) {
        response.status(200).json([
            {
                message: 'música deletada', " música deletada": idRequest, music
            }
        ])
    } else {
        response.status(404).send([
            {
                message: 'erro ao deletar'
            }
        ])
    }

}


module.exports = {
    getAllMusic,
    getMusic,
    getArtist,
    cadastro,
    update,
    deleteMusic,
    favorited


}

