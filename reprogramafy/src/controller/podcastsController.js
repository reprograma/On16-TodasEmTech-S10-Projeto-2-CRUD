const pods = require('../models/podcasts.json')

// retornando todas os podcasts
const getAllPods = (require, response) => {
  try {
    response.status(200).json([
      {
        Podcasts: pods
      }
    ])
  } catch (err) {
    response.status(500).send({ message: 'Erro no server' })
  }
}

// retornando busca por topico
const getTopics = (request, response) => {
  try {
    const topicRequest = request.query.topic

    const topicFilter = pods.filter(podcasts  =>
      podcasts.topic.includes(topicRequest))

    if (topicFilter.length > 0) {
      response.status(200).send(topicFilter)
    } else {
      response.status(404).send({ message: 'Tópico não encontrado' })
    }
  } catch (err) {
    responseponse.status(500).send({ message: 'Erro no server' })
  }
}

// cria musica
const createPod = (require, response) => {
  try {
    let nameRequest = require.body.name
    let podcasterRequest = require.body.podcaster
    let topicRequest = require.body.topic
    let starsRequest = require.body.stars

    let novoPodcast = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: nameRequest,
      podcaster: podcasterRequest,
      topic: topicRequest,
      stars: starsRequest,
    }

    podcasts.push(novoPodcast)

    response.status(201).json([
      {
        message: 'Podcast cadastrado',
        novoPodcast,
      },
    ])
  } catch (err) {
    response.status(500).send({ message: 'Erro ao cadastrar' })
  }
}

const updateStars = (require, response) => {
  try {
    const idRequest = require.params.id
    const starsRequest = require.body.stars

    starsFilter = podcasts.find((task) => task.id == idRequest)

    if (starsFilter) {
      starsFilter.stars = starsRequest

      response.status(200).json([
        {
          mensagem: 'Sua avaliaçao foi alterada com sucesso!',
          pods,
        },
      ])
    } else {
      response.status(404).json([
        {
          message: 'Sua avaliaçao não foi modificada!',
        },
      ])
    }
  } catch (err) {
    response.status(500).send({ message: 'Erro ao cadastrar' })
  }
}

// TODO const deletePod = (require, response) =>

module.exports = {
  getAllPods,
  getTopics,
  createPod,
  updateStars,
  // TODO deletePod,
}
