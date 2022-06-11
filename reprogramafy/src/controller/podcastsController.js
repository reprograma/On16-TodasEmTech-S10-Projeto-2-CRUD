const pods = require("../models/podcasts.json")

const getAllPods = (request, response) => {
    response.status(200).json([{
        "podcasts": pods
    }])

}

const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = pods.filter(pods => pods.topic.includes(topicRequest))
    response.status(200).send(topicFilter)     
}

const postNewPod = (request, response) => {
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
    pods.push(newPodcast)
    response.status(201).json([{
        "message": "pod cadastradon",
        newPodcast 
    }])
}

const deletePods = (request, response) => {
    const idRequest = request.params.id
    const podEncontrado = pods.findIndex(pod => pod.id == idRequest)
    pods.splice(podEncontrado, 1)

    response.status(200).json([{
        "message": "pod deletado!",
        pods
    }])
}

const updatePods = (request, response) => {
    const idRequest = request.params.id
    const novaNota = request.body

    const podFiltrado = pods.find(pod => pod.id == idRequest)
    podFiltrado.stars = novaNota

    response.status(200).json([{
        "message": "nota alterada!",
        pods
    }])
}

module.exports = {
    getAllPods,
    getTopics,
    postNewPod,
    deletePods,
    updatePods   
}