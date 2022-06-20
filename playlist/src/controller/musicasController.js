const musicasJson = require("../model/musicas.json");

// RETORNANDO TODAS AS MÚSICAS
const getAllMusic = (request, response) => {
  try {
    response.status(200).json([
      {
        "Musicsplay": musicasJson,
      },
    ]);
  } catch (err) {
    response.status(500).send({
      message: "it went bad the server is in error",
    });
  }
}
/*RETORNA MUSICA POR ID
const getIdMusic = (request, response) => {
  try {
   let idRequest = request.params.id;
   let idEncontradoFilter = musicasJson.find((musica) =>
     musica.id == idRequest)
   
     if (idEncontradoFilter.length > 0) {
      response.status(200).send(idEncontradoFilter);
    } else {
      response.status(404).send([
        {
          message: "Id not found",
        }]);
    }
  } catch (err) {
    response.status(500).send({
      message: "Server error",
    });
  }
}

const getArtist = (request, response) => {
  let artistsRequest = request.query.artists.toLowerCase()

  let artistsFilter = music.filter(musica => {
    artistasLowerCase = musica.artists.map(artistasArray => artistasArray.toLowerCase())

    return artistasLowerCase.includes(artistsRequest)
  })
  if (artistsFilter) {
    reponse.status(200).send(artistsFilter)
  } else {
    response.status(404).send([{
      message: "Artists not found"
    }])
  }
}

*/

module.exports = {
  getAllMusic,
  /*getIdMusic
   getArtist
  getMusic,
  addMusic,
  updateStars,
  deletePodcasts*/
}
