//como já inserimos o express no app, não é preciso mais chamar o express

const { response } = require('express')
const pods = require('../models/podcasts.json')

const getAllPods = (request, response) => {
    response.status(200).json([{
        "Podcasts": podcast
    }])
}

//Com mensagem de erro
// const getAllPods = (request, response) => {
//     try {
//         response.status(200).json ([{
//         "Podcasts": podcast
//     }])
//   } catch (err) { 
//       response.status(500).send({message: "Erro no Server"}) //Como não se trata de um Json, mas de um catch, a palavra message não precisa de aspas
//       
//   }

// }

// const getTopics = (request, response) => {
//     const topicoReq = request.query.topic
//     const podFiltradro = podcast.filter(podcast => podcast.topic.includes(topicoReq))
//     if (podFiltradro.lengh > 0) {
//         response.status(200).send(podFiltradro)
//     } else {
//         response.status(404).send([{
//             "message": "Tópico não encontrado"
//         }])
//     }
// }

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
            "message": "Deu erro interno."

        }])
    }
}

const attPods = (request, response) => {
    
}

    module.exports = {
        getAllPods,
        getTopics,
        addPods
    }
