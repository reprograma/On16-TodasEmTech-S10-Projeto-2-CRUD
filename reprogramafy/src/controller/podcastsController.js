const { response } = require('../app')
const podcasts = require('../models/podcasts.json')


const getAllPods = (request, response) => {
try {
    response.status(200).json([{
        "Podcasts": podcasts
    }])
} catch(e){
    response.status(500).send({
        message: "Erro no server"
    })
}
}

const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = podcasts.filter(pods => pods.topic.includes(topicRequest))
    
    if(topicFilter){
        response.status(200).send(topicFilter)
    }else{
        response.status(500).send('Erro no server')

    }
}

const addPods = (request, response) => {
    let nameRequest = request.body.name
    let podcasterRequest = request.body.podcaster
    let topicRequest = request.body.topic
    let starRequest = request.body.star

    let newPodcast = {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        podcaster: podcaster,
        topic: topicRequest,
        star: starRequest
    }

    podcasts.push(newPodcast)
    response.status(201).json([{
        "message": "Novo podcast cadastrado com sucesso!",
        newPodcast
    }])
}

const atualizarPods = (request,response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest)

    if(starsFilter){
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message: "Classificação atualizada com sucesso",
            podcasts
        }])
    } else {
        response.status(404).json([{
            message: "Não foi modiicado"
        }])
    }
}

const deletarPods = (request, response) => {
    const idRequest = request.params.id
    let findId = podcasts.findIndex(find => find.id == idRequest)
    podcasts.shift(findId,1)

    response.status(200).json([{
            "message": "item deletado",
            "detalhes": findId,
            podcasts
        }])
}

module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods,
    deletarPods
}