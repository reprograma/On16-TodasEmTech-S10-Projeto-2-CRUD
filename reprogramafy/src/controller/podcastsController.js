const podcasts = require('../models/podcasts.json')

const getAllPods = (request, response) => {
    try{
        response.status(200).json([{
            "podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({ message: 'Erro no server'})
    }
}

const getTopics = (request, response) => {
    const topicoRequest = request.query.topic
    const topicFilter = podcasts.filter(pods => pods.topic.includes(topicoRequest))

    if (topicFilter.length > 0) {
        response.status(200).send(topicFilter)
    } else {
        response.status(404).send([{
            "message": "Tópico não encontrado"
        }])
    }
}

const addPods = (request, response) => {
    try{
        let nomeRequest = request.body.name
        let podRequest = request.body.podcaster
        let topicRequest = request.body.topic
        let starsRequest = request.body.stars

        let novoPodcast = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: nomeRequest,
            podcaster: podRequest,
            topic: topicRequest,
            starts: starsRequest
        }

        podcasts.push(novoPodcast)

        response.status(201).json([{
            "message": "Podcast Cadastrado",
            novoPodcast
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            message: "Erro Interno ao cadastrar"
        }])
    }
}

const atualizarPods = (request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest)
    
    if (starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message: "Classificação Atualizada com sucesso",
            podcasts
        }])    
    } else {
        response.status(404).json([{
            message: "Não foi possivel modificar"
        }])
    }
}

const deletePods = (request, response) => {
    const idRequest = request.params.id
    const deletaPodcast = podcasts.findIndex(pod => pod.id == idRequest)

    podcasts.splice(deletaPodcast, 1)

    response.status(200).json([{
        "message": "Podcast Deletado",
        "Deletado": idRequest,
        podcasts
    }])
}

module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods,
    deletePods
}