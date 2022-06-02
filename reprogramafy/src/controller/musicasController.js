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
    const especifMusic = request.query.title
    const musicFilter = music.filter((musica) => musica.title.includes(especifMusic))
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


module.exports = {
    getAllMusic,
    getMusic

}

