const musicas = require('../models/musicas.json')

//retorna todas as músicas (get)
const getAllMusics = (request, response) => {
    try {
        response.status(200).json([{
            "músicas": musicas
        }])
    } catch (err) {
        response.status(500).send({ mensagem: "erro no servidor" })
    }
}

//retorna música de um artista específico (get)
const getByArtists =(request , response) => {
    try{
        let artistsRequest = request.query.artists

        let artistsFilter = musicas.filter(musicas => musicas.artists.includes(artistsRequest),) 

    if (artistsFilter.length > 0) {
        response.status(200).send(artistsFilter)
    } else {
        response.status(404).send({mensagem: " Artista não encontrado"})
    }
    } catch (err){
        response.status(500).send({mensagem: "Erro no servidor"})
    }
}

//retorna música específica por id (get)
const getById = (request, response) => {
    try{
    let idRequest = request.params.id

    let idEncontrado = musicas.find(musicas => musicas.id == idRequest)

    response.status(200).send(idEncontrado)

    } catch (err){
        response.status(404).send({mensagem:"id não encontrada"})
    }
}

//Cadastra nova música (post)
const createMusic = (request, response) => {
    try{
       let titleRequest = request.body.title
       let launchYearRequest = request.body.launchYear
       let favoritedRequest = request.body.favorited
       let artistsRequest = request.body.artists

       let novaMusica = {
           id : Math.floor(Date.now() * Math.random()).toString(36),
           title: titleRequest,
           launchYear : launchYearRequest,
           favorited : favoritedRequest,
           artists : artistsRequest,
       }

       musicas.push(novaMusica)

       response.status(201).json([{
           mensagem: 'Música cadastrada com sucesso', novaMusica,
       },
    ])
    } catch (err) {
        response.status(500).send({mensagem: 'Erro ao cadastrar'})
    }
}

//Atualiza favoritos
const updateFavorited = (request, response) => {
    try{
        const idRequest = request.params.id
        const favoritedRequest = request.body.favorited
        favoritedFilter = musicoteca.find((task) => task.id == idRequest)

        if (favoritedFilter) {
            favoritedFilter.favorited = favoritedRequest

            response.status(200).json([
                {
                mensagem: "Favoritos alterados com sucesso",
                musicoteca,
            },
        ])
        } else {
            response.status(404).json([
                {
                    mensagem: "Seus favoritos não foram modificados",
                },
            ])
        }
    } catch (err) {
        response.status(500).send({mensagem: "Erro ao cadastrar"})
    }
}


module.exports = {
    getAllMusics,
    getByArtists,
    getById,
    createMusic,
    updateFavorited
}
