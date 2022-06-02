const podcasts = require('../models/podcasts.json')

const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({ "message": "Error no server"})
    }
}

const getTopics = (req, res) => {
    let topicRequest = req.query.topic

    let topicFilter = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest))

    if (topicFilter.length > 0) {
        res.status(200).send(topicFilter)
    } else {
        res.status(404).send([{ message: "Tópico não encontrado" }])
    }
}

const addPods = (req, res) => {
    try{
    let nameRequest = req.body.name
    let podcasterRequest = req.body.podcaster
    let topicRequest = req.body.topic
    let starsRequest = req.body.stars

    let newPodcast = {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        podcaster: podcasterRequest,
        topic: topicRequest,
        stars: starsRequest
    }
    podcasts.push(newPodcast)
    res.status(201).json([{
        message: 'Novo podcast cadastrado',
        newPodcast
    }])
    }catch(err){console.log(err)
    res.status(500).send([{
        message: 'Erro interno ao cadastrar'
    }])
    }
}

const atualizarPods = (req, res) => {
    const idRequest = req.params.id
    const starsRequest = req.body.stars
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest)

    if(starsFilter) {
        starsFilter.stars = starsRequest
        res.status(200).json([{
            message: "Classificação atualizada com sucesso",
            podcasts
        }])
    }else{
        res.status(404).json([{
            message: "A classificação não foi modificada"
        }])
    }
}

const deletePods = (req, res) => {
    const idRequest = req.params.id
    let idPodcast = podcasts.findIndex((podcast) => podcast.id == idRequest)

    podcasts.splice(idPodcast, 1)

    if (idPodcast > -1) {
        res.status(200).json([{
            "message": "Id deletado",
            idRequest,
            podcasts
        }])
    } else {
        res.status(404).send([{ message: 'O podcast não foi deletado'}])
    }
}

module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods,
    deletePods
}