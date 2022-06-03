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
const getArtist = (request, response) =>{
    const artist = request.query.artists
    const artistFilter = music.filter((artista)=> artista.artists.includes(artist))
    if (artistFilter.length > 0) {
        response.status(200).send(artistFilter);
    }else{
        response.status(404).send([
            {
                message: "Artista não encontrado"
            },
        ]); 
     }
};

module.exports = {
    getAllMusic,
    getMusic,
    getArtist

}

