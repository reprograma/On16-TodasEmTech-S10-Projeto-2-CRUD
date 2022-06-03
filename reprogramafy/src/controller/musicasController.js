const musics = require("../models/musicas.json");

const express = require("express");

const app = express();

app.use(express.json());

// To list all musics - GET

const allMusics = (request, response) => {
  try {
    response.status(200).json([
      {
        Playlist: musics,
      },
    ]);
  } catch (err) {
    response.status(500).send({ message: "Server error." });
  }
};

// To list a specific music - GET

const musicByTitle = (request, response) => {
  try {
    const titleRequest = request.query.title;
    const foundMusic = musics.find(
      (music) => music.title.toLowerCase() === titleRequest
    );

    response.status(200).json([
      {
        foundMusic,
      },
    ]);
  } catch (err) {
    response.status(404).send({ message: "Music not found." });
  }
};

// To list music by artist - GET

const musicByArtist = (request, response) => {
  try {
    const artistsRequest = request.query.artists;

    const filteredMusic = musics.filter((music) => {
      const hasArtist = music.artists.filter((artist) => {
        return artist.toLowerCase().includes(artistsRequest.toLowerCase());
      });
      return hasArtist.length;
    });

    if (filteredMusic.length > 0) {
      response.status(200).send(filteredMusic);
    } else {
      response.status(404).send({ message: "Artist not found." });
    }
  } catch (err) {
    response.status(500).send({ message: "Server Error." });
  }
};

// To add a new music - POST

const addMusic = (request, response) => {
  try {
    let newMusic = {
      id: musics.length + 1,
      title: request.body.title,
      launchYear: request.body.launchYear,
      favorited: request.body.favorited,
      artists: request.body.artists,
    };

    musics.push(newMusic);

    response.status(201).send({
      mensage: "New Music added!",
      newMusic,
      musics,
    });
  } catch (err) {
    response.status(500).send({ message: "Server Error." });
  }
};

// To change musics information - PUT

const updateMusic = (request, response) => {
  try {
    const idRequest = request.params.id;
    const musicRequest = request.body;

    const foundIndex = musics.findIndex(
      (music) => music.id === parseInt(idRequest)
    );

    musics.splice(foundIndex, 1, musicRequest);

    response.status(200).json([
      {
        mensage: `Music ${idRequest} updated.`,
        musics,
      },
    ]);
  } catch (err) {
    response.status(404).send({ message: "Error updating music." });
  }
};

// To favorite/unfavorite a music - PATCH

const favMusic = (request, response) => {
  try {
    const idRequest = request.params.id;
    const favorite = request.body.favorited;

    const foundMusic = musics.find((music) => music.id === parseInt(idRequest));

    foundMusic.favorited = favorite;

    response.status(200).json([
      {
        mensage: "Music Favorited/Unfavorited.",
        foundMusic,
        musics,
      },
    ]);
  } catch (err) {
    response.status(404).send({ message: "Music not found." });
  }
};

// To delete a music - DELETE

const deleteMusic = (request, response) => {
  try {
    const idRequest = request.params.id;

    const foundIndex = musics.findIndex(
      (music) => music.id === parseInt(idRequest)
    );

    musics.splice(foundIndex, 1);

    response.status(200).json([
      {
        message: `Music ${idRequest} deleted.`,
        deleteMusic,
        musics,
      },
    ]);
  } catch (err) {
    response.status(404).send({ message: "Music not found." });
  }
};

module.exports = {
  allMusics,
  musicByTitle,
  musicByArtist,
  addMusic,
  updateMusic,
  favMusic,
  deleteMusic,
};
