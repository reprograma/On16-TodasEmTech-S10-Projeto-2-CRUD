// importar meu JSON de podcasts
const podcasts = require('../models/podcasts.json')

// retorna todos os podcasts

const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }

}

const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest))
    if (topicFilter.length > 0) {
        response.status(200).send(topicFilter)
    } else {
        response.status(404).send([{
            Message: "não encontrado"}])
    }
}



module.exports = {
    getAllPods,
    getTopics,
}
