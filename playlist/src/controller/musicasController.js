const musicJson = require("../model/musicas.json");

// GET- RETORNARÁ TODAS AS MÚSICAS
const getAllMusics = (request, response) => {
  try {
    response.status(200).json([
      {
        Musicas: musicJson,
      },
    ]);
  } catch (err) {
    response.status(500).send({ message: "Deu ruim o Servidor está com Erro" });
  }
};

// GET - RETORNA UMA MUSICA ESPECIFICA POR ID
const getIdMusics = (request, response) => {
  let idRequest = request.params.id;
  let foundMusic = musicJson.find((musica) => musica.id == idRequest);
  response.status(200).send(foundMusic);
};
/* GET - RETORNA UM ARTISTA percorrendo um array
const getArtist = (request, response) => {
  
  let artistsRequest = request.query.artists.toLowerCase();

  let musicFound = musicJson.filter((musica) => {
    artistasLowerCase = musica.artists.map((listArtists) =>
      listArtists.toLowerCase()
    );
    return artistasLowerCase.includes(artistsRequest);
  });
  console.log(musicFound);
  if (musicFound.length > 0) {
    response.status(200).send(musicFound);
  } else {
    response.status(404).send([
      {
        message: "Artista não foi encontrado",
      },
    ]);
  }

};
*/

// POST CADASTRAR NOVA MÚSICA
const postAddMusic = (request, response) => {
  try {
    let titleRequest = request.body.title;
    let launchYearRequest = request.body.launchYear;
    let favoritedRequest = request.body.favorited;
    let artistsRequest = request.body.artists;

    let novaMusica = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      title: titleRequest,
      launchYear: launchYearRequest,
      favorited: favoritedRequest,
      artists: artistsRequest,
    };

    musicJson.push(novaMusica); 

    response.status(201).json([
      {
        message: "Nova musica cadastrada com sucesso",
        novaMusica,
      },
    ]);
  } catch (err) {
    response.status(500).send([
      {
        message: "Atenção!!! Erro ao cadastrar a nova musica",
      },
    ]);
  }
};

// PUT ATUALIZAR MUSICA ESPECIFICA EXCETO O ID
const putUpdateMusics = (request, response) => {
  const idRequest = request.params.id;
  let musicRequest = request.body

  let myMusicFound = musicJson.findIndex(musica => musica.id == idRequest)
musicJson.splice(myMusicFound, 1, musicRequest)

response.status(200).json([{
   Aviso:  "Os dados da música foram atualizados, EXCETO O id",
   musicJson
}])

}
// PATCH - FAVORITAR E DESFAVORITAR
const patchUpdate = (request, response) => {
  try {
    const idRequest = request.params.id;
    const favoritRequest = request.body.favorited; 
    favoritedFilter = musicJson.find((musica) => musica.id == idRequest);
    if (favoritedFilter) {
      favoritedFilter.favorited = favoritRequest;
      response.status(200).json([
        {
          mensagem: "Sua preferência nesta música foi alterada com sucesso!",
          musicJson,
        },
      ]);
    } else {
      response.status(404).json([
        {
          message: "Sua musica não foi modificada!",
        },
      ]);
    }
  } catch (err) {
    response.status(500).send([
      {
        message: "Erro ao cadastrar",
      },
    ]);
  }
};


//DELETE 01 MUSICA ESPECIFICA
const deleteMusics = (request, response) => {
  const idRequest = request.params.id;
  const delMusics = musicJson.findIndex((pod) => pod.id == idRequest);

  musicJson.splice(delMusics, 1);

  response.status(200).json([
    {
      message: "Musica Deletada",
      Deletado: idRequest,
      musicJson,
    },
  ]);
};

module.exports = {
  getAllMusics,
  getIdMusics,
  //getArtist,
  postAddMusic,
  putUpdateMusics,
  patchUpdate,
  deleteMusics
};
