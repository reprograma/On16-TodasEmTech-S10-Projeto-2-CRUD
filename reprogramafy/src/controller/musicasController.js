const playMusics = require("../models/musicas.json");

const getAllTheSongs = (req, res) => {
  try {
    res.status(200).json([
      {
        message: "Playlist encontrado!",
        playMusics: playMusics,
      },
    ]);
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

const getJustOneMusic = (req, res) => {
  const musicRequest = req.params.id;
  const musicFilter = playMusics.find((music) => music.id == musicRequest);

  if (musicFilter) {
    res.status(200).send([
      {
        message: "Musica encontrada!",
        playMusics: musicFilter,
      },
    ]);
  } else {
    res.status(404).send([
      {
        message: "Musica não encontrada!",
      },
    ]);
  }
};

const getMusicByArtist = (req, res) => {
  let artistsRequest = req.query.artists;

  let artistsFilter = playMusics.filter((music) => music.artists.includes(artistsRequest)
  );

  if (artistsFilter.length > 0) {
    res.status(200).send([
      {
        message: "Artista encontrada!",
        playMusics: artistsFilter,
      },
    ]);
  } else {
    res.status(404).send({
      message: "Artista não encontrada!",
    });
  }
};

const addMusic = (req, res) => {
  try {
    let titleRequest = req.body.title;
    let launchYearRequest = req.body.launchYear;
    let favoritedRequest = req.body.favorited;
    let artistsRequest = req.body.artists;

    let newMusic = {
      id: Math.floor(Date.now() * Math.random()).toString(30),
      title: titleRequest,
      launchYear: launchYearRequest,
      favorited: favoritedRequest,
      artists: artistsRequest,
    };
    playMusics.push(newMusic);
    res.status(201).json([
      {
        message: "Nova música cadastrado!",
        playMusics: newMusic,
      },
    ]);
  } catch (err) {
    console.log(err);
    res.status(500).send([
      {
        message: "Erro interno ao cadastrar",
      },
    ]);
  }
};

const replaceMusic = (req, res) => {
  const idRequest = req.params.id;
  let musicRequest = req.body;

  let indexFound = playMusics.findIndex((music) => music.id == idRequest);

  playMusics.splice(indexFound, 1, musicRequest);

  if (indexFound > -1) {
    res.status(200).json([
      {
        message: "Música alterada!",
        playMusics: playMusics,
      },
    ]);
  } else {
    res.status(404).json({
      message: "Essa música não foi alterada!",
    });
  }
};

const deleteMusic = (req, res) => {
  const idRequest = req.params.id;

  const indexFound = playMusics.findIndex((musica) => musica.id == idRequest);

  playMusics.splice(indexFound, 1, idRequest);

  if (indexFound) {
    res.status(200).json([
      {
        message: "Essa musica foi deletada!",
        "musica deletada": idRequest,
        playMusics: playMusics,
      },
    ]);
  } else {
    res.status(404).send([
      {
        message: "Essa música não foi deletada!",
      },
    ]);
  }
};

const updateMusic = (req, res) => {
  const idRequest = req.params.id;
  const favoritedRequest = req.body.favorited;

  favoritedFilter = playMusics.find((music) => music.id == idRequest);

  if (favoritedFilter) {
    favoritedFilter.favorited = favoritedRequest;
    res.status(200).json([
      {
        message: "Essa música foi favoritada|desfavoritada com sucesso!",
        playMusics,
      },
    ]);
  } else {
    res.status(404).json([
      {
        message: "Essa música não foi favoritada/desfavoritada!",
      },
    ]);
  }
};

module.exports = {
  getAllTheSongs,
  getJustOneMusic,
  getMusicByArtist,
  addMusic,
  replaceMusic,
  deleteMusic,
  updateMusic,
};
