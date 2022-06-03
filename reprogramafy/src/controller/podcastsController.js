const pods = require("../models/podcasts.json");

const getAllPods = (request, response) => {
  try {
    response.status(200).json([
      {
        Podcast: pods,
      },
    ]);
  } catch (err) {
    response.status(500).send({ message: "Erro no servidor" });
  }
};

const getTopics = (request, response) => {
  const topicRequest = request.query.topic;
  const topicFilter = pods.filter((pods) => pods.topic.includes(topicRequest));
  if (topicFilter.length > 0) {
    response.status(200).send(topicFilter);
  } else {
    response.status(404).send([
      {
        message: "Tópico não encontrado",
      },
    ]);
  }
};
//const reqs = {name, bla, bla , bla} = req.body
const addPods = (request, response) => {
  try {
    let nameRequest = request.body.name;
    let podcasterRequest = request.body.podcaster;
    let topicRequest = request.body.topic;
    let starsRequest = request.body.stars;

    let newPodcast = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: nameRequest,
      podcaster: podcasterRequest,
      topic: topicRequest,
      stars: starsRequest,
    };

    pods.push(newPodcast);
    response.status(201).json([
      {
        message: "Novo podcast cadastrado com sucesso",
        newPodcast,
      },
    ]);
  } catch (err) {
    console.log(err);
    response.status(500).send([
      {
        message: "Erro interno ao cadastrar",
      },
    ]);
  }
};

const atualizarPods = (request, response) => {
  const idRequest = request.params.id;
  const starsRequest = request.body.stars;
  starsFilter = pods.find((podcast) => podcast.id == idRequest);

  if (starsFilter) {
    starsFilter.stars = starsRequest;
    response.status(200).json([
      {
        message: "Podcast atualizado com sucesso",
        pods,
      },
    ]);
  } else {
    response.status(404).json([
      {
        message: "Não foi possível atualizar Podcast",
      },
    ]);
  }
};

const deletePods = (request, response) => {
  const idRequest = request.params.id;
  const indicePods = pods.findIndex((podcast) => podcast.id == idRequest);

  pods.splice(indicePods, 1);

  if (indicePods) {
    response.status(200).json([
      {
        message: "O Podcast foi deletado com sucesso",
        "Podcast deletado": idRequest,
        pods,
      },
    ]);
  } else {
    response.status(404).send([
      {
        message: "Não foi possível deletar o Podcast",
      },
    ]);
  }
};

module.exports = {
  getAllPods,
  getTopics,
  addPods,
  atualizarPods,
  deletePods,
};