const podcasts = require('../models/podcasts.json')

const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }

}

const getPodsByTopic = (request, response) => {
    try {
        let topicRequest = request.query.topic
        let topicFilter = podcasts.filter(podcast => podcast.topic.includes(topicRequest))

        if (topicFilter.length > 0) {
            response.status(200).send(topicFilter);
        } else {
            response.status(404).send(
                {
                    message: 'NOT FOUND'
                })
        }
    } catch (err) {
        console.log(err)
        response.status(500).send([
            {
                message: 'Erro interno.'
            }
        ])
    }
}

const postNewPod = (request, response) => {

    try {
        let nameRequest = request.body.name
        let podcasterRequest = request.body.podcaster
        let topicRequest = request.body.topic
        let starsRequest = request.body.stars

        let newPodcast = {

            id: Math.floor(Date.now() * Math.random()).toString(36), //cria um id com números e letras aleatórias
            name: nameRequest,
            podcaster: podcasterRequest,
            topic: topicRequest,
            stars: starsRequest
        }

        podcasts.push(newPodcast)

        response.status(201).json([
            {
                message: 'Podcast adicionado à biblioteca.', 
                newPodcast
            }
        ])

    } catch(err) {
        console.log(err)
        response.status(500).send([ //erro dentro do código
            {
                message:'Erro interno ao cadastrar'
            }
        ])
    }
}


const deletePodById = (request, response) => {

    const idRequest = request.params.id

    const indexPodcast = podcasts.findIndex(podcast => podcast.id == idRequest)

    podcasts.splice(indexPodcast, 1)

    response.status(200).json([
        {
            message: 'Podcast deletado',
            'deletado': idRequest,
            podcasts

        }
    ])
}


const updatePodStars = (request, response) => {

    const idRequest = request.params.id

    let newStars = request.body.stars

    podcastFind = podcasts.find(podcast => podcast.id == idRequest)

    if (podcastFind) {

        podcastFind.stars == newStars
        response.status(200).json([
            {
                message:"Nota atualizada com sucesso.",
                podcasts
            }
        ])
    } else {

        response.status(404).json([
            {
                message: "Nota não atualizada."
            }
        ])
    }
}

module.exports = {
    getAllPods,
    getPodsByTopic,
    postNewPod,
    deletePodById,
    updatePodStars
}