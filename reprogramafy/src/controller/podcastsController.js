const podcasts = require('../models/podcasts.json')

// retorna todos os pods
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({
            message: "Erro no server"
        })
    }

}

//localhost:3000/podcast/biblioteca/tema?topic=tecnologia
//na key coloca topic e na value tecnologia
//rota ara filtrar podcast por tema
const getTopics = (req, res) => {
    const topicRequest = request.query.topic
    //topic porque no Json tem a classificação topic
    const topicFiltrar = podcasts.filter(podcasts => podcasts.topic.includes(topicRequest))
    //podcasts.filter usa a const da linha 1 que guarda o Json
    // usa includes para poder passar pelas arrays e conseguir filtrar
    if (topicFiltrar.length > 0) {
        res.status(200).send(topicFiltrar)

    } else {
        res.status(404).send([{
            "message": "topico não encontrado"
        }])
    }
}


//POST > localhost:3000/podcast/adicionar
//body> raw> Json e inclui no body: 
// {
//      "name": "Quero ",
//      "podcaster": " Conceicao",
//      "topic": "tecnologia",
//      "stars": 5
//  }

const addPodcasts = (req, res) => {
    //nao cria o ID aqui
    //const req = {name, bla, bla, bla} = essa seri a forma resumida do req.body
    try {
        let nameRequest = req.body.name;
        let podcasterRequest = req.body.podcaster;
        let topicRequest = req.body.topic;
        let starsRequest = req.body.stars

        let novoPodcast = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: nameRequest,
            podcaster: podcasterRequest,
            topic: topicRequest,
            stars: starsRequest

        }
        podcasts.push(novoPodcast)
        //quando cria algo é 201
        res.status(201).json([{
            "message": "Podcast cadastrado",
            novoPodcast
        }])
    } catch (err) {
        console.log(err)
        res.status(500).send([{
            "message": "Erro interno ao cadastrar"
        }])
    }
}

//PATCH > localhost:3000/podcast/atualizar/1
// Body > raw > Json e no body muda uma categoria só

const atualizarPods = (request, response) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = pods.find((podcast) => podcast.id == idRequest)
    
    if (starsFilter) {
        starsFilter.stars = starsRequest
        response.status(200).json([{
            message: "Classificação atualizada com sucesso", 
            pods
        }])
    }else{
        response.status(404).json([{
            message: "Não foi modificado"
        }])
    }
}



module.exports = {
    getAllPods,
    getTopics,
    addPods,
    atualizarPods
}