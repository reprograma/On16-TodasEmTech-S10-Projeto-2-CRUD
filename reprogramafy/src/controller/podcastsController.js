const podcasts = require('../models/podcasts.json')



const getAllPods = (request, response) => {
  try {
    response.status(200).json([
      {
        Podcasts: podcasts,
      },
    ])
  } catch (err) {
    response.status(500).send({ message: 'Erro no server.' })
  }
}


const getPodByTopic = (request, response) => {
  try {
    let topicRequest = request.query.topic

    let topicFilter = podcasts.filter((pod) => pod.topic.includes(topicRequest))

    if (topicFilter.length > 0) {
      response.status(200).send(topicFilter)
    } else {
      response.status(404).send({ message: 'Tópico não foi encontrado!' })
    }
  } catch (err) {
    response.status(500).send({ message: 'Erro no server!' })
  }
}


const createPod = (request, response) => {
  try {
    let nameRequest = request.body.name
    let podcasterRequest = request.body.podcaster
    let topicRequest = request.body.topic
    let starsRequest = request.body.stars

    let newPodcast = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: nameRequest,
      podcaster: podcasterRequest,
      topic: topicRequest,
      stars: starsRequest,
    }

    podcasts.push(newPodcast)

    response.status(201).json([
      {
        message: 'Podcast cadastrado',
        newPodcast,
      },
    ])
  } catch (err) {
    response.status(500).send({ message: 'Erro ao cadastrar' })
  }
}


const updateStars = (request, response) => {
  try {
    const idRequest = request.params.id
    const starsRequest = request.body.stars

    starsFilter = podcasts.find((task) => task.id == idRequest)

    if (starsFilter) {
      starsFilter.stars = starsRequest

      response.status(200).json([
        {
          mensagem: 'Sua avaliação foi alterada com sucesso!',
          podcasts,
        },
      ])
    } else {
      response.status(404).json([
        {
          message: 'Sua avaliação não foi modificada!',
        },
      ])
    }
  } catch (err) {
    response.status(500).send({ message: 'Erro ao cadastrar' })
  }
}


const deletePod = (request, response) => {
  try {
    const idRequest = request.params.id
    const indexPod = podcasts.findIndex((pod) => pod.id == idRequest)

    podcasts.splice(indexPod, 1)
    response.status(200).json([
      {
        message: 'O filme foi deletado',
        deletado: idRequest,
        podcasts
      }
    ])
  } catch (err) {
    response.status(500).send({ message: 'Erro ao deletar' })
  }
}








module.exports = {
  getAllPods,
  getPodByTopic,
  createPod,
  updateStars,
  deletePod

}
