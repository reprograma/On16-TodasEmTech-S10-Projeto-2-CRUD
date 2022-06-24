const podcasts = require('../models/podcasts.json')

// retorna todos os pods
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }
};

const getTopics = (req, res) => {
    let topicRequest = req.query.topic;
    let topicFilter = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest));
    if (topicFilter.length > 0){
        res.status(200).send(topicFilter)
    } else {
        res.status(404).send({
            message: "tópico nao encontrado"
        })
    }
};

const addPodcast = (req, res) => {
    try{
    let nameRequest = req.body.name;
    let podcasterRequest = req.body.podcaster;
    let topicRequest = req.body.topic;
    let starRequest = req.body.stars;

    let newPodcast = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        podcaster: podcasterRequest,
        topic: topicRequest,
        stars: starRequest
    }
    podcasts.push(newPodcast)

    res.status(201).json([{
        message: "Podcast cadastrado!",
        newPodcast
    }])
} catch(err){
    console.log(err);
    res.status(500).send({
        message: "Erro interno ao cadastrar."
    })
}
};

const attPodcast = (req, res) => {
    let idRequest = req.params.id;
    let starRequest = req.body.stars;
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest)

    if(starsFilter) {
        starsFilter.stars = starRequest
        res.status(200).json([{
            message: "Classificação atualizada",
            podcasts
        }])
    } else {
        res.status(404).json([{
            message: "Não deu pra modificar"
        }])
    }
};

const deletePodcast = (request, response ) => {

    const idRequest = request.params.id

    const indexPods = podcasts.findIndex( podcast => podcast.id == idRequest)

    podcasts.splice(indexPods, 1) 

    response.status(200).json([{
        "mensagem" : "O podcast foi deletado",
        "deletado" : idRequest,
        podcasts
    }])
};

module.exports = {
  getAllPods,
  getTopics,
  addPodcast,
  attPodcast,
  deletePodcast
};
