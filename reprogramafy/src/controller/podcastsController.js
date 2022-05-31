// Criando a lógica das rotas

const {
    response
} = require('express')
const {
    request
} = require('../app')
const podcasts = require('../models/podcasts.json')

// Retorna todos os podcasts
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({
            message: "Erro no server"
        })
    }
}

const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest))
    if (topicFilter.length > 0) {
        response.status(200).send(topicFilter)
    } else {
        response.status(404).send([{
            "message": "Tópico não encontrado"
        }])
    }
}

const addPods = (request, response) => {
    try {
        let nameRequest = request.body.name
        let podcasterRequest = request.body.podcaster
        let topicRequest = request.body.topic
        let starsRequest = request.body.stars

        let newPodcast = {
            id: Math.floor(Date.now() * Math.random()).toString(36), // gera ID randomico
            name: nameRequest,
            podcaster: podcasterRequest,
            topic: topicRequest,
            stars: starsRequest
        }
        podcasts.push(newPodcast)
        response.status(201).json([{
            "message": "Podcast novo cadastrado",
            newPodcast
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            "message": "Erro interno ao cadastrar"
        }])
    }
}

const atualizarPods = (request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcasts.find((podcasts) => podcasts.id == idRequest)

    if (starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message: "Classificação atualizada com sucesso",
            podcasts
        }])
    } else {
        response.status(404).json([{
            message: "Não foi modificado, gata"
        }])
    }
}










module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods
}