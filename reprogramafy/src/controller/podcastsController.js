const podcasts = require("../models/podcasts.json");

// retorna todos os pods
const getAllPods = (req, res) => {
  try {
    res.status(200).json([
      {
        Podcasts: podcasts,
      },
    ]);
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

const getPodByTopic = (req, res) => {
  let topicRequest = req.query.topic;

  let topicFiltro = podcasts.filter((musica) =>
    musica.topic.includes(topicRequest)
  );

  if (topicFiltro.length > 0) {
    res.status(200).send(topicFiltro);
  } else {
    res.status(404).send({ message: "Tópico não encontrado" });
  }
};

//const Reps ={name, bla bla bla} = req.body
const addPods = (req, res) => {
  try {
    let nameReq = req.body.name;
    let podReq = req.body.podcaster;
    let topicReq = req.body.topic;
    let starsReq = req.body.stars;

    let newPodcast = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: nameReq,
      podcaster: podReq,
      topic: topicReq,
      stars: starsReq,
    };
    podcasts.push(newPodcast);
    res.status(201).json([
      {
        message: "Novo podcast cadastrado!",
        newPodcast,
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

const deletePodcast = (req, res) => {
  const idRequest = req.params.id;

  const indexFound = podcasts.findIndex((podcast) => podcast.id == idRequest);

  podcasts.splice(indexFound, 1, idRequest);

  if (indexFound) {
    res.status(200).json([
      {
        message: "Esse podcast foi deletado!",
        "musica deletada": idRequest,
        playMusics: podcasts,
      },
    ]);
  } else {
    res.status(404).send([
      {
        message: "Esse podcast não foi deletado!",
      },
    ]);
  }
};

const atualizarPods = (req, res) => {
  const idReq = req.params.id;
  const starsReq = req.body.stars;
  starsFilter = podcasts.find((podcast) => podcast.id == idReq);

  if (starsFilter) {
    starsFilter.stars = starsReq;
    res.status(200).json([
      {
        message: "Classicação atualizada com sucesso, honey!",
        podcasts,
      },
    ]);
  } else {
    res.status(404).json([
      {
        message: "Não foi modificado garotah sonsa!",
      },
    ]);
  }
};
module.exports = {
  getAllPods,
  getPodByTopic,
  addPods,
  deletePodcast,
  atualizarPods,
};
