
const { response } = require('express')
const pods = require('../models/podcasts.json')

//retornar todos os pods

const getAllPods = (request, response) =>{
    try{ response.status(200).json([{
        "Podcasts": pods
    }])
} catch(err){
    response.status(500).send({message: "Erro no server"})
}
}

const getTopics = (request, response) =>{
    const topicRequest = request.query.topic
    const topicFilter = pods.filter(pods => pods.topic.includes(topicRequest))
    
    if(topicFilter.length > 0) {
        response.status(200).send(topicFilter)
    }else{
        response.status(404).send([{
            "message": "Tópico não encontrado"
        
        }])
    }        
    
    response.status(200).send(topicFilter)
    
}

const addPods = (request, response) => {

    try{
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
    pods.push(newPodcast)
    response.status(201).json([{ // o 201 é criacao
        "message": "Novo podcast cadastrado", newPodcast
    }])

}catch(err){
    console.log(err)
    response.status(500).send([{
        message: "Erro interno ao cadastrar"
    }])
}

}

const atualizarPods = (request, response) =>{
    const idRequest = request.params.id
    const starsRequest = request.body.stars

    starsFilter = pods.find((podcast => podcast.id == idRequest ))
                   //esse nome podcast aqui poderia ser qlq nome
    
    if(starsFilter){
        starsFilter.stars = starsRequest
        response.status(200).json([{

            message: "Foi atualizado com sucesso! Aew!",
            pods
        }])


    }else{
        response.status(404).json([{

            message:"Não foi modificado, sinto muito"
        }])
    }
}

const deletePods = (request, response) => {
    const idRequest = request.params.id
 
    const indiceRequest = pods.findIndex(podcast => {
        return podcast.id == idRequest
    })
    pods.splice(indiceRequest, 1)
 
    response.status(200).json([{
        "message": "Podcast deletado por id",
        "deletado": idRequest,
        pods
    }])
 
}

module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods,
    deletePods
}
