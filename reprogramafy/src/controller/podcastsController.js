const podcasts = require("../models/podcasts.json");

const getAllPods = (req, res) => {
  try {
    res.status(200).json([
      {
        message: "Lista de podcasts encontrado!",
        Podcasts: podcasts,
      },
    ]);
  } catch (err) {
    res.status(500).send({ message: "Erro no server" });
  }
};

const getPodByTopic = (req, res) => {
  let topicRequest = req.query.topic;

  let topicFilter = podcasts.filter((musica) =>
    musica.topic.includes(topicRequest)
  );

  if (topicFilter.length > 0) {
    topicRequest.topic = topicRequest;
    res.status(200).send([
      {
        message: "Tópico encontrado!",
        Podcasts: podcasts,
      },
    ]);
  } else {
    res.status(404).send({ message: "Tópico não encontrado!" });
  }
};

const addPods = (req, res) => {
  try {
    let nameReq = req.body.name;
    let podReq = req.body.podcaster;
    let topicReq = req.body.topic;
    let starsReq = req.body.stars;

    let newPodcast = {
      id: Math.floor(Math.random() * (10 - 5) + 6),
      name: nameReq,
      podcaster: podReq,
      topic: topicReq,
      stars: starsReq,
    };
    podcasts.push(newPodcast);
    res.status(201).json([
      {
        message: "Novo podcast cadastrado!",
        Podcasts: newPodcast,
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

  if (indexFound > -1) {
    res.status(200).json([
      {
        message: "Esse podcast foi deletado!",
        "Podcast deletado": idRequest,
        Podcasts: podcasts,
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

const updatePods = (req, res) => {
  const idReq = req.params.id;
  const starsReq = req.body.stars;
  starsFilter = podcasts.find((podcast) => podcast.id == idReq);

  if (starsFilter) {
    starsFilter.stars = starsReq;
    res.status(200).json([
      {
        message: "Classicação atualizada com sucesso, honey!",
        Podcasts: podcasts,
      },
    ]);
  } else {
    res.status(404).json([
      {
        message: "Não foi modificado a classificação!",
      },
    ]);
  }
};
module.exports = {
  getAllPods,
  getPodByTopic,
  addPods,
  deletePodcast,
  updatePods,
};
