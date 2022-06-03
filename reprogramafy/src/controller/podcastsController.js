const { response } = require('express')
const podcast = require('../models/podcasts.json')

// retorna todos os pods
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Pods": podcast
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }
}

const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = podcast.filter(podcast => podcast.topic.includes(topicRequest))
    response.status(200).send(topicFilter)
}

const addPods = (request, response) => {
    try{
    let nameRequest = request.body.name
    let podcasterRequest = request.body.podcaster
    let topicRequest = request.body.topic
    let starsRequest = request.body.stars
    
    let newPodcast = {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        podcaster: podcasterRequest,
        topic: topicRequest,
        stars: starsRequest
    }

    podcast.push(newPodcast)
    response.status(201).json([{
        "message": "Novo podcast cadastrado", newPodcast
    }])
 }catch (err){
     console.log(err)
     response.status(500).send([{
         "message": "Erro interno ao cadastrar"
         
     }])
}
}

const atualizarPods = (request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcast.find((podcast) => podcast.id == idRequest)
    
    if (starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message: "Classificação atualizada com sucesso, honey", 
            podcast
        }])
    }
    
    else{
        response.status(404).json([{
            message: "Não foi modificado garotah sonsa"
        }])
    }
}


module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods
}


