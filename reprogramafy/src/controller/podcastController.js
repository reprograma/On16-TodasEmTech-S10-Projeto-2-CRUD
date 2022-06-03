const podcasts = require('../models/podcasts.json')

const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
            "podcasts": podcasts
        }])
    } catch (err) {
        response.status(500).send({ "menssage": "Erro no servidor." })
    }
}

const getTopics = (req, res) => {
    const topicRequest = req.query.topic//é topic porque no json é o que ele vai acessar
    const topicFilter = podcasts.filter(podcasts => podcasts.topic.in(topicRequest))

    //uso o includes quando quero ver se dentro do array tem igual igual ao que a pessoa mandou

    if (topicFilter) {
        topicFilter.topic = topicRequest
        res.status(200).send(topicFilter)
    } else {
        res.status(404).send({
            "message": "Tópico não foi encontrado."
        })
    }

}


const addPods = (req, res) => {
    let nameRequest = req.body.name
    let podcasterRequest = req.body.podcaster
    let topicRequest = req.body.topic
    let starsRequest = req.body.stars

    let newPodcast = {
        id: Math.floor(Date.now() * Math.random()).toString(36),//função do JS para números aleatórios
        name: nameRequest,
        podcaster: podcasterRequest,
        topic: topicRequest,
        stars: starsRequest
    }

    podcasts.push(newPodcast)
    res.status(201).json([{
        "message": "Seu Podcast foi adicionado.",
        newPodcast
    }])

}

const atualizarPods = (req, res) => {
    const idRequest = req.params.id
    const starsRequest = req.body.stars
    //procurando o id passado para mudar as estrelas DESSE id
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest)

    //se encontrar o o id passado:
    if (starsFilter) {
        starsFilter.stars = starsRequest//altera o valor de stars desse id
        //envia como resposta:
        res.status(200).json({
            "message": "Classificação atualizada com sucesso.",
            podcasts
        })
    } else {
        res.status(404).json({
            "message": "Não foi modificado. Sorry."
        })
    }
}
    const deletePods = (request, response) => {

        const idRequest = request.params.id
        deleteFilter = podcasts.findIndex((podcast) => podcast.id == idRequest)
        //nesse caso usamos o index pra ele retornar o primeiro elemento que ele encontrar,
        //nesse caso ele retorna o índice, a posição desse elemento

        if (deleteFilter) {
            deleteFilter == idRequest
            podcasts.splice(deleteFilter, 1) //se eu estivesse utilizando o PUT, poderia tirar 1 elemento e colocar outro no lugar
            //nesse caso eu escreveria (deleteFilter, 1, request)

            response.status(200).json({
                "mensagem": "O podcast foi deletado",
                "deletado": idRequest,
                podcasts
            })
        } else {
            response.status(500).send({
                "menssage": "Podcast requisitado não encontrado."
            })

        }

    }

    module.exports = {
        getAllPods,
        getTopics,
        addPods,
        atualizarPods,
        deletePods

    }
        

