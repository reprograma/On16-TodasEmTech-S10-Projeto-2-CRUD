//Não é preciso chamar o express. Já foi inserido no app 

const pods = require('../models/podcasts.json')

//Retorna uma lista com todos os podcast.
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": pods
        }])
    } catch (err) {
        response.status(500).send({ "message": "Erro no Server" }) //Como não se trata de um Json, mas de um catch, a palavra message não precisa de aspas
    }
}

//Filtra por tema (tópico). Retorna apenas podcats com o tema solicitado
const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = pods.filter(pods => pods.topic.includes(topicRequest))
    if (topicFilter.length > 0) {
        response.status(200).send(topicFilter)
    } else {
        response.status(404).send([{
            "message": "Topico nao encotrado, não existe na sua lista :("
        }])
    }
}

//Adiciona um novo Podcast. Retorna o Podcast novo inserido.
const addPods = (request, response) => {
    try {
        let nomeReq = request.body.name
        let podReq = request.body.podcaster
        let topicReq = request.body.topic
        let starReq = request.body.stars

        let newPodCast = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: nomeReq,
            podcaster: podReq,
            topic: topicReq,
            stars: starReq
        }
        pods.push(newPodCast)
        response.status(201).json([{
            "message": "Novo Podcast Cadastrado",
            newPodCast
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            "message": "Erro interno no Servidor"
        }])
    }
}

//Atualiza stars do podcast. Avaliação das estrelas do podcast.
const attPods = (request, response) => {
    const idReq = request.params.id
    const starReq = request.body.stars
    starEncontrado = pods.find((podcast) => podcast.id == idReq)

    if (starEncontrado) {
        starEncontrado.stars = starReq
        response.status(200).json([{
            "message": "Classificado com sucesso!",
            pods
        }])
    } else {
        response.status(404).json([{
            "message": "Não foi possível modificar"
        }])
    }
}

//Deleta um podcast específico. Retorna a lista de podcast deletado
const deletePods = (request, response) => {
    try {
        const idReq = request.params.id
        const idEncontrado = pods.find(podcast => podcast.id == idReq)
        pods.splice(idEncontrado, 1)

        response.status(200).json([{
            "message": "O Podcast foi deletado",
            "deletado": idReq,
            pods
        }])
    } catch (err) {
        response.status(404).json([{
            "message": "Não foi possível deletar"
        }])
    }
}

//Exporta funções
module.exports = {
    getAllPods,
    getTopics,
    addPods,
    attPods,
    deletePods,
}
