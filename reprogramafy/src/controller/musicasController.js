const music = require ('../models/musicas.json')


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


  module.exports = {
    getAllMusic
    
}

