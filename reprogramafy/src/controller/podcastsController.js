const podcasts = require('../models/podcasts.json')

//Retorna todos os podscasts
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
        "podcasts": podcasts
        }])
    } catch (err){
        response.status(500).send({ message: "Erro no server" })
    }   
}

//const reqs = {name, bla,bla, bla} = req.body
const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest))
    if (topicFilter.length > 0) {
    response.status(200).send(topicFilter)
    }else{
        response.status(404).send([{
            "message": "Topico não encontrado"
    }])
    }
}

const addPodcasts = (request, response) => {
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
    podcasts.push(newPodcast)
    response.status(201).json([{
        "message": "Novo podcast cadastrado",
        newPodcast
    }])
}catch (err){
    console.log(err)
    response.status(500).send([{
        message: "Erro interno a cadastrar"
    }])
}}

const atualizarpodcasts = (request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest)

    if (starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message: "Classificacao atualizada com sucesso",
            podcasts
        }])
    }else{
        response.status(404).json([{
            message: "Não foi modificado gata"
        }])
}
} 


const deletePods = (request, response) => {
    try {
        const idRequest = request.params.id
        const deletePods = podcasts.findIndex(podcasts => podcasts.id == idRequest)

        podcasts.splice(deletePods, 1)

        response.status(200).json([{
            "message": "Podcaste deletado com sucesso!",
            "deletado": idRequest,
            podcasts
        }])
    } catch (err) {
        console.log(err)
        response.status(404).send([{
            "message": err.message
        }])
    }
}

module.exports = {
    getAllPods,
    getTopics,
    addPodcasts,
    atualizarpodcasts,
    deletePods
}

