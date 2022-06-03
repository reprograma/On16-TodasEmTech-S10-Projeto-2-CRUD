const podcast = require("../models/podcasts.json");

const getAllPods = (request, response) => {
  try {
    response.status(200).json([
      {
        podcasts: podcast,
      },
    ]);
  } catch (err) {
    response.status(500).send({ menssage: "Error no server" });
  }
};

const getTopics = (request, response) => {
  const topicRequest = request.query.topic;
  const topicFilter = podcast.filter((podcast) =>
    podcast.topic.includes(topicRequest)
  );
  if (topicFilter.length > 0) {
    response.status(200).send(topicFilter);
  } else {
    response.status(404).send({
      message: "Tópico não encontrado",
    });
  }
};

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
    podcast.push(newPodcast);
    response.status(201).json([
      {
        message: "Novo podcast cadastrado",
        newPodcast,
      },
    ]);
  } catch (err) {
    console.log(err);
    response.status(500).send([
      {
        message: "Erro interno ao cadastrar!",
      },
    ]);
  }
};

const atualizarPods = (request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcast.find((podcast) => podcast.id == idRequest)

    if (starsFilter) {
        starsFilter.stars = starsRequest

        response.status(200).json ([{
            message: "Classificação atualizada com sucesso!!", 
            podcast
        }])
    } else {
        response.status(404).json([{
            message: "Infelizmente, não foi possível modificar porque não existe!"

        }])
    }
}

// DELETE deletar um podcast
const deletePods = (request, response) => {
  const idRequest = request.params.id

  const indicePod = podcast.findIndex(pod => pod.id == idRequest)

  podcast.splice(indicePod, 1)

  response.status(200).json([{
      "message": "O podcast foi deletado.",
      "deletada": idRequest,
      podcast
  }])
}
module.exports = {
  getAllPods,
  getTopics,
  addPods,
  atualizarPods,
  deletePods
};
