const { request, response } = require('../app')
const podcasts = require('../models/podcasts.json')

const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            'Podcasts': podcasts
        }])
    }catch(err){
        response.status(500).send({ message: 'Erro no servidor'})
    }
} 

const getTopics = (request, response) => {
    const topicRequest = request.query.topic 
    const topicFilter = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest))
    if (topicFilter.length > 0) {
    response.status(200).send(topicFilter)
    }else{
        response.status(404).send([{
            'message': 'Tópico não encontrado'
        }])
    }
}

const addPods = (request, response) => {
    try{
    let nameRequest = request.body.name
    let podcasterRequest = request.body.podcaster
    let topicRequest = request.body.topic
    let starsRequest = request.body.stars

    let newPodcast = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name:  nameRequest,
        podcaster: podcasterRequest,
        topic: topicRequest,
        stars: starsRequest
    }
    podcasts.push(newPodcast)
    response.status(201).json([{
        'message': 'Podcast cadastrado',
        newPodcast
    }])
}catch(err){
    console.log(err)
    response.status(500).send([{
        'message': 'Erro interno ao cadastrar'
    }])
}
}

const atualizarPods =(request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcasts.find((pods) => pods.id == idRequest)

    if(starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json([{
            'message': 'Classificação atualizada',
            podcasts
        }])
    }else{
        response.status(404).json([{
            'message': 'Não foi possível atualizar'
        }])
    }
}

const deletePods = (request, response) =>{
    const idRequest = request.params.id
    const deletePods = podcasts.findIndex (pods = pods.id == idRequest)

    podcasts.splice(deletePods, 1)
    response.status(200).json([{
        'message': 'Podcast deletado',
        'Deletado': idRequest,
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
