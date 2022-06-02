const song = require("../models/musicas.json");

// função para mostrar as canções
const getSongs = (req, res) => {
  try {
    res.status(200).json([
      {
        Músicas: song,
      },
    ]);
  } catch (err) {
    res.status(500).send({ message: "Error" });
  }
};

// função para encontrar música específica (por id)
const getSongById = (req, res) => {
  // ql musica
  const songRequest = req.params.id;
  // pra buscar o id no json
  const songFound = song.filter((song) => song.id == songRequest); // te
  // se achar me mostra
  if (songFound.length > 0) {
    res.status(200).send(songFound);
  } else {
    res.status(404).send([
      {
        message: "Música não encontrada",
      },
    ]);
  }
};

//encontrar música por artista
const getSongByArtist = (req, res) => {
  // dizer qual artista, query porque varias músicas podem ter o mesmo value
  // facilitando a pesquisa, tornando a string letras minúsculas
  let artistReq = req.query.artists.toLowerCase();
// vamos filtrar
  let sFiltered = song.filter((song) => {
//precisamos buscar na arrya de artistas a string
    artistslowerCase = song.artists.map((artistsArray) =>
      artistsArray.toLowerCase()
    );
    // comparar e retornar aquelas que contem tal artista
    return artistslowerCase.includes(artistReq);
  });
  // se o filtro tiver algum resultado, me moshtra
  if (sFiltered.length > 0) {
    res.status(200).send(sFiltered);
    // caso não tenha nada pra mostrar
  } else {
    res.status(404).send({
      message: "não encontrado",
    });
  }
};

// adicionando uma nova música
const addSong = (req, res) => {
  // vamos pedir a entrada do body todo.
  try {
    let titleReq = req.body.title;
    let YearReq = req.body.launchYear;
    let favReq = req.body.favorited;
    let artistsReq = req.body.artists;
    //vamo montar o body com as entradas
    let newSong = {
      // para que o ID seja sorteado, com base nas 27 letras e 9 numeros
      id: Math.floor(Date.now() * Math.random()).toString(36),
      title: titleReq,
      launchYear: YearReq,
      favorited: favReq,
      artists: artistsReq,
    };
    // subir no servidor,
    song.push(newSong);
    // deu td certo? me avisa e mostra a música adicionada
    res.status(201).json([
      {
        message: "cadastro de nova canção realizada com sucesso",
        newSong,
      },
    ]);
    // se der algum erro, me avisa também
  } catch (err) {
    console.log(err);
    res.status(500).send([
      {
        message: "Erro! Não foi possível cadastrar nova música",
      },
    ]);
  }
};

// editar música específica por id
const updateSong = (req, res) => {
  // qual musica (id)?
  let idReq = req.params.id;
  // buscar o body
  let songReq = req.body;
  // usar o id pra encontrar no json
  let indexFound = song.findIndex((s) => s.id == idReq);

  // corta, mexe, mostra
  if (song.splice(indexFound, 1, songReq)) {
    res.status(200).json([
      {
        message: "sua canção foi atualizada",
        song,
      },
    ]);
    // se não conseguir encontrar, me fala
  } else {
    res.status(404).send([
      {
        message: "ops, não deu!",
      },
    ]);
  }
};

const deleteSong = (req, res) => {
  // dar um índice para achar a música
  let idRequest = req.params.id;
  // buscar com find
  let indexFound = song.findIndex((s) => s.id == idRequest);
  // pega nessa que achou e tira uma da lista
  song.splice(indexFound, 1);
  // se achar e deletar, missão cumprida
  if (indexFound) {
    res.status(200).json([
      {
        message: "A musica eliminada",
        "musica cancelada": idRequest,
        song,
      },
    ]);
    // ai poxa, essa não tem
  } else {
    res.status(404).send([
      {
        message: "Musica não encontrada",
      },
    ]);
  }
};
// para favoritar um som
const updateFavs = (req, res) => {
  // mas qual música é uma favorita?
  let idRequest = req.params.id;
  // pra botar favorito no body
  let favReq = req.body.favorited;
  // pra buscar pelo id
  searchFav = song.find((s) => s.id == idRequest);
  // se achar essa musica
  if (searchFav) {
    // põe no 'favorited' o value que entrei em favReq
    searchFav.favorited = favReq;
    // atualizou? me avisa
    res.status(200).json([
      {
        message: "Favorited updated", // omg
        song,
      },
    ]);
    // nao achou, poxa
  } else {
    res.status(404).json([
      {
        message: "Bad Request, better luck next time!",
      },
    ]);
  }
};

// lembrando de dar acesso à todas as funções em outros js, exportando.
module.exports = {
  getSongs,
  getSongById,
  getSongByArtist,
  addSong,
  updateSong,
  deleteSong,
  updateFavs,
};
