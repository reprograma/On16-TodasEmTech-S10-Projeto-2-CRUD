// onde eu guardo as minhas lógicas

//chamo o corpo de podcasts
const podcasts = require('../models/podcasts.json')

//retorna todos os podcasts
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
        "Podcasts": podcasts
        }])
    } catch (err) {
    response.status(500).send({ menssage: "Erro no servidor" })
    }
}

const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest))
    if (topicFilter.length > 0) {
        response.status(200).send(topicFilter)
    } else {
        response.status(404).send([{
            Message: "Tópico não encontrado"}])
    }
}

const addPods = (request, response) => {
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
        stars: starsRequest
    }

    podcasts.push(newPodcast)
    response.status(201).json([{
        message: "Novo podcast cadastrado",
        newPodcast
    }])

}catch (err){
    console.log (err)
    response.status(500).send({
        message: "erro no servidor"})
}}

const atualizarPods = (request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest)
    
    if (starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message: "Classificação atualizada com sucesso, honey", 
            podcasts
        }])
    }else{
        response.status(404).json([{
            message: "Não foi modificado"
        }])
    }
}

const deletePodcast = (request, response ) => {

    const idRequest = request.params.id

    const indexPods = podcasts.findIndex( podcast => podcast.id == idRequest)

    podcasts.splice(indexPods, 1) 

    response.status(200).json([{
        "mensagem" : "O podcast foi deletado",
        "deletado" : idRequest,
        podcasts
    }])
}

module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods,
    deletePodcast
}
