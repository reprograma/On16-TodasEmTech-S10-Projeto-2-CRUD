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
  }

const getMusicById = (request, response) => {
    const musicaRequest = request.params.id;
    const musicaFilter = music.filter((musicas) => musicas.id == musicaRequest);

    if (musicaFilter.length > 0) {
      response.status(200).send(musicaFilter);
    } else {
      response.status(404).send([
        {
          message: "Musica não encontrada",
        },
      ]);
    }
  }

const getByArtist = (request, response) => {
   const getArtistRequest = request.query.artists

   const getArtistFilter = music.filter((music) =>
    music.artists.includes(getArtistRequest)
    );

    if (getArtistFilter.length > 0) {
      response.status(200).send(getArtistFilter);
    } else {
      response.status(404).send([
        {
          message: "Artista não encontrado",
        },
      ]);
    }
  }

const addMusic = (request, response) => {
    try {
      let titleRequest = request.body.title
      let yearRequest = request.body.launchYear
      let favRequest = request.body.favorited
      let artistRequest = request.body.artists

      let novaMusica = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: yearRequest,
        favorited: favRequest,
        artists: artistRequest,
      }

      music.push(novaMusica)

      response.status(201).json([
        {
          message: 'Musica cadastrada',
          novaMusica,
        },
      ])
    } catch (err) {
      response.status(500).send({ message: 'Erro ao cadastrar' })
    }
  }


const updateMusic = (request, response) => {
    const idRequest = request.params.id;
    let musicRequest = request.body;

    let indexFound = music.findIndex((music) => music.id == idRequest);

    music.splice(indexFound, 1, musicRequest);

    if (indexFound > -1) {
      response.status(200).json([
        {
          message: "Música alterada!",
          music,
        },
      ]);
    } else {
      response.status(404).json({
        message: "Essa música não foi alterada!",
      });
    }
  };

const deleteMusic = (request, response) => {
    const idRequest = request.params.id;
    const indiceMusic = music.findIndex((music) => music.id == idRequest);

    music.splice(indiceMusic, 1);

    if (indiceMusic > -1) {
      response.status(200).json([
        {
          message: "A musica selecionada foi deletada",
          "musica deletada": idRequest,
          music
        }]);
    } else {
      response.status(404).send([
        {
          message: "Musica não deletada",
        }])
    }
  };

const updateFavorited = (request, response) => {
    const idRequest = request.params.id;
    const favoritedRequest = request.body.favorited;
    favoritedFilter = music.find((music) => music.id == idRequest);

    if (favoritedFilter) {
      favoritedFilter.favorited = favoritedRequest;
      response.status(200).json([{ message: "A tag do favorito foi com sucesso", music,}]);
    } else {
      response.status(404).json([
        {
          message: "A tag do favorito não pode ser alterada",
        },
      ]);
    }
  };




module.exports = {
 getAllMusic,
 getMusicById,
 getByArtist,
 addMusic,
 updateMusic,
 deleteMusic,
 updateFavorited

}