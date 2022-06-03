// onde eu guardo as minhas lógicas

//chamo o corpo de podcasts
const { response } = require('../app')
const podcasts = require('../models/podcasts.json')

//retorna todos os podcasts
const getAllPods = (request, response) => {
    try {
        response.status(200).json([{
        "Podcasts": podcasts
        }])
    } catch (err) {
    response.status(500).send({ menssage: "Erro no servidor" })
    }
}

module.exports = {
    getAllPods
}
