const podcasts = require("../models/podcasts.json")

const getAllPods = (request, response) => {
    try{
        response.status(200).json([{
            "Podcasts" : podcasts
        }])
    } catch (err) {
        response.status(500).send({message : "Erro no server"})
    }
} 

const getTopics = (request, response) => {
    let topicRequest = request.query.topic

    let topicFilter = podcasts.filter(pod => pod.topic.includes(topicRequest))

    if (topicFilter.length > 0) {
        response.status(200).send(topicFilter)
    } else {
        response.status(404).send({ message: "Tópico não encontrado" })
    }
}

const addPodcast = (request, response) => {
    try{
    let nameRequest = request.body.name
    let podcasterRequest = request.body.podcaster
    let topicRequest = request.body.topic
    let starsRequest = request.body.stars

    let newPodcast = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        podcaster: podcasterRequest,
        topic: topicRequest,
        stars: starsRequest
    }

    podcasts.push(newPodcast)

    response.status(201).json([{
        message : "Novo podcast cadastrado",
        newPodcast

    }])
    }catch (err){
        console.log(err)
        response.status(500).send([{
            message : "Erro interno ao cadastrar"
        }])
    }
}

const updatePodcast = (request, response) => {

    let idRequest = request.params.id
    let starsRequest = request.body.stars
    starsFilter = podcasts.find((pod) => pod.id == idRequest)

    if (starsFilter){
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message : "Classificação atualizada",
            podcasts
        }])
    }else{
        response.status(404).json({ 
            message: "A classificação não foi atualizada" 
        })
    }
}

const deletePodcast = (request, response) => {

    let idRequest = request.params.id
    let indexPodcast = podcasts.findIndex(pod => pod.id == idRequest)

    if( indexPodcast != -1 ){

        podcasts.splice(indexPodcast, 1)
        response.status(200).json([{
            message: "Podcast deletado",
            podcasts
        }])
    }else{
        response.status(404).json({ 
            message: "O podcast não foi deletado",
        })
    }
}

module.exports = {
    getAllPods,
    getTopics,
    addPodcast,
    updatePodcast,
    deletePodcast
}

























