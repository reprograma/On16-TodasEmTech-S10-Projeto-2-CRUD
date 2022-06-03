const pods = require("../models/podcasts.json");

//const (request, response ) = require('../app');
//const match = require("nodemon/lib/monitor/match");

const getAllPods = (request, response) => {
 try{
        response.status(200).json([{
            "podcasts": pods
        }])
    } catch (err) {
        response.status(500).send({ "menssage": "Error no server"})
    }
}
const getTopics = (request, response) => {
    const topicRequest = request.query.topic
    const topicFilter = pods.filter(pods=>pods.topic.includes(topicRequest))

    if (topicFilter.length > 0){
        response.status(200).send ( topicFilter )
    }else{
        response.status(404).send([{
            "message": "topico nao encontrado"
        }])
    }
}
const addPods = (request, response) => {
    try{
    let nomeRequest = request. body.nome
    let podCasterRequest = request.body.podcasts
    let topicRequest = request.body.topic
    let starsRequest = request.body.stars 

    let newPodCast = {
        id: Math.floor (Date.now()*Math.random()).toString(36),
        nome:nomeRequest,
        podcaster:podCasterRequest,
        topic:topicRequest,
        stars:starsRequest,
    } 
    pods.push(newPodCast)
    response.status(201).json([{
       "message": "novo pod Cast Cadastrado",
        newPodCast
    }])
}catch(err){
    console.log(err)
    response.status(500).send([{
        message:"erro interno ao cadastrar",
    }])
}
}
const atulizarPods=(requeste,response)=>{
    const idRequest =requeste.params.id;
    const starsRequest = requeste.body.stars;
    starsRequest = pods.find((podcast)=>podcast.id==idRequest);

    if (starsFilter){
        starsFilter.stars = starsRequest;
        response.status(200).json([
            {
                message:"classificaçao atualizada com sucesso, honey",
                pods,
            },
        ]);
    }else{
        response.status(404).json([{
                message: "nao foi modificado minha boneca linda",
            
        }]);
    }
};
const deletePods = (request, response) => {
    const idRequest = request.params.id;
    const indicePods = pods.findIndex((podcast) =>podcast.id == idRequest);

    pods.splice(indicePods,1);

    if(indicePods >-1) {
        response.status(202).json([
            {
                message:"O podcast selecionado foi deletado",
                "podcast deletado": idRequest,
                pods,
            },
        ]);
    }else{
        response.status(404).send([
            {
                message:"podcast nao deletado",
            },
        ]);
    }
};
const atualizarPods=(request,response)=>{
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    const starsFilter = pods.find((podcast)=>podcast.id == idRequest)

    if(starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json ([{
            message:"classificacao atualizada linda,body",
            pods,
        }])
    }else{
        response.status(404).json([{
            message:"nao foi modificada minha bonequinha"
        }])
    }
}
module.exports = {
    getAllPods, 
    getTopics,
    addPods,
    atualizarPods,
    deletePods,
};
