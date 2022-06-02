const playMusics = require("../models/musicas.json");

const getAllTheMusic = (req, res) => {
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
  const musicFind = playMusics.find((music) => music.id == musicRequest);

  if (musicFind) {
    res.status(200).send([
      {
        message: "Musica encontrada!",
        playMusics: musicFind,
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
  const artistsRequest = req.query.artists.toLowerCase();

  const artistsFilter = playMusics.filter((music) => {
    artistsLowerCase = music.artists.map((artistIdArray) =>
      artistIdArray.toLowerCase()
    );
    return artistsLowerCase.includes(artistsRequest);
  });

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
    const titleRequest = req.body.title;
    const launchYearRequest = req.body.launchYear;
    const favoritedRequest = req.body.favorited;
    const artistsRequest = req.body.artists;

    const newMusic = {
      id: Math.floor(Math.random() * (30 - 19) + 20),
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
  const musicRequest = req.body;

  const indexFound = playMusics.findIndex((music) => music.id == idRequest);

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

  const indexFound = playMusics.findIndex((music) => music.id == idRequest);

  const idDeleted = playMusics.filter((music) => music.id == idRequest);

  playMusics.splice(indexFound, 1);

  if (indexFound > -1) {
    res.status(200).json([
      {
        message: "Essa musica foi deletada!",
        "Música deletada": idDeleted,
        playMusics: playMusics,
      },
    ]);
  } else {
    res.status(404).json([
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
        message: "Essa música não foi favoritada|desfavoritada!",
      },
    ]);
  }
};

module.exports = {
  getAllTheMusic,
  getJustOneMusic,
  getMusicByArtist,
  addMusic,
  replaceMusic,
  deleteMusic,
  updateMusic,
};
