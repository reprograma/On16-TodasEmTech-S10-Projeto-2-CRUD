const podcasts = require('../models/podcasts.json')

// retorna todos os pods
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "Podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({
            "retorno": "Erro no server"
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
            "retorno": "topico não encontrado"
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
            "retorno": "Podcast cadastrado",
            novoPodcast
        }])
    } catch (err) {
        console.log(err)
        res.status(500).send([{
            "retorno": "Erro interno ao cadastrar"
        }])
    }
}

//PATCH > localhost:3000/podcast/atualizar/1
// Body > raw > Json e no body muda uma categoria só

const atualizarPods = (req, res) => {
    const idRequest = request.params.id
    const starsRequest = request.body.stars
    starsFilter = podcasts.find((podcasts) => podcasts.id == idRequest)

    if (starsFilter) {
        starsFilter.stars = starsRequest
        res.status(200).json([{
            message: "Classificação atualizada com sucesso",
            podcasts
        }])
    } else {
        res.status(404).json([{
            "retorno": "Não foi modificado"
        }])
    }
}


const deletePods = (req, res) => {
    const idRequest = request.params.id;
    const indicePods = podcasts.findIndex((podcasts) => podcasts.id == idRequest);

    podcasts.splice(indicePods, 1);

    if (indicePods) {
        res.status(200).json([{
            message: "O podcast selecionado foi deletado",
            "podcast deletado": idRequest,
            podcasts,
        }]);
    } else {
        res.status(404).send([{
            message: "Podcast não deletado",
        }, ]);
    }
};


module.exports = {
    getAllPods,
    getTopics,
    deletePods,
    addPodcasts,
    atualizarPods
}