const podcasts = require('../models/podcasts.json')

const getAllPods = (request, response) =>{
    response.status(200).json([{
        "podcasts": podcasts
    }])
}

module.exports = {
    getAllPods
}