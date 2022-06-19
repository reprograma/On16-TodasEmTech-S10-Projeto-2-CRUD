const podcasts = require('../models/podcasts.json')

// retornando todas os podcasts
const getAllPods = (request, response) => {
  try {
    response.status(200).json([
      {
        Podcasts: podcasts
      }
    ])
  } catch (err) {
    response.status(500).send({ 
      "message": "Deu ruim o  Servidor está com Erro" })
  }
}

// retornando busca por topico
const getTopics = (request, response) => {
  try {
    const topicRequest = request.query.topic
    const topicFilter = podcasts.filter(podcasts  =>
      podcasts.topic.includes(topicRequest))
    if (topicFilter.length > 0) {
      response.status(200).send(topicFilter)
    }else{
      response.status(404).send([{ 
        "message": "Tópico não foi encontrado"
      }])
    }
  } catch (err) {
    response.status(500).send({ 
      "message": "Erro no server" })
  }
}

// CADASTRAR, ADICIONAR,  NOVO PODCASTS
// USOU let porque as variáveis sempre poderá mudar
/* no try usou o body porque no POSTMAN irá passar as informações que irá cadastrar ou adicionar, verifique no BD(podcasts.json dentro do models) ex: id, name, etc.. */
const addPods = (require, response) => {
  try {
    let nameRequest = require.body.name
    let podcasterRequest = require.body.podcaster
    let topicRequest = require.body.topic
    let starsRequest = require.body.stars
// Math.floor ... é o codigo que gera id radomico no javascript
    let novoPodcast = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: nameRequest,
      podcaster: podcasterRequest,
      topic: topicRequest,
      stars: starsRequest
    }

    podcasts.push(novoPodcast)// empurrar o novo podcasts para o json(bando de dados que está na pasta models, arquivo podcasts.json)

    response.status(201).json([
      {
        "message": "Podcast cadastrado",
        novoPodcast
      }])
  } catch (err) {
    response.status(500).send([{ 
      "message" : "Atenção!!! Erro ao cadastrar"
    }])
  }
}
/*
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
*/
module.exports = {
  getAllPods,
  getTopics,
  addPods,
  //updateStars,
  // TODO deletePod,
}
