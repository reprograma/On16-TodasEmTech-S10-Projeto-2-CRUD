const pods = require('../models/podcasts.json')

// retornando todas as musicas
const getAllPods = (req, res) => {
  try {
    res.status(200).json([
      {
        Podcasts: pods,
      },
    ])
  } catch (err) {
    response.status(500).send({ message: 'Erro no server' })
  }
}

// retornando pods por topico
const getPodByTopic = (req, res) => {
  try {
    let topicRequest = req.query.topic

    let topicFiltro = pods.filter((musica) =>
      musica.topic.includes(topicRequest),
    )

    if (topicFiltro.length > 0) {
      res.status(200).send(topicFiltro)
    } else {
      res.status(404).send({ message: 'Tópico não encontrado' })
    }
  } catch (err) {
    res.status(500).send({ message: 'Erro no server' })
  }
}

// cria musica
const createPod = (req, res) => {
  try {
    let nameRequest = req.body.name
    let podcasterRequest = req.body.podcaster
    let topicRequest = req.body.topic
    let starsRequest = req.body.stars

    let novoPodcast = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: nameRequest,
      podcaster: podcasterRequest,
      topic: topicRequest,
      stars: starsRequest,
    }

    pods.push(novoPodcast)

    res.status(201).json([
      {
        message: 'Podcast cadastrado',
        novoPodcast,
      },
    ])
  } catch (err) {
    res.status(500).send({ message: 'Erro ao cadastrar' })
  }
}

const updatePods = (req, res) => {
  try {
    const idRequest = req.params.id
    const starsRequest = req.body.stars

    starsFilter = pods.find((task) => task.id == idRequest)

    if (starsFilter) {
      starsFilter.stars = starsRequest

      res.status(200).json([
        {
          mensagem: 'Sua avaliaçao foi alterada com sucesso!',
          pods,
        },
      ])
    } else {
      res.status(404).json([
        {
          message: 'Sua avaliaçao não foi modificada!',
        },
      ])
    }
  } catch (err) {
    res.status(500).send({ message: 'Erro ao cadastrar' })
  }
}

const deletePod = (req, res) => {
  const idRequest = req.params.id;
  const indexFound = pods.findIndex((pods) => pods.id == idRequest);

  pods.splice(indexFound, 1, idRequest);

  if (indexFound > -1) {
    res.status(200).json([
      {
        message: "Esse podcast foi deletado!",
        "Podcast deletado": idRequest,
        Podcasts: pods,
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

module.exports = {
  getAllPods,
  getPodByTopic,
  createPod,
  updatePods,
  deletePod
}
