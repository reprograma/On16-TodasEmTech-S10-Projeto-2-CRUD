const musicas = require('../models/musicas.json')

// GET retorna todas as músicas 
const getAllMusics = (request, response) => {
    try {
        response.status(200).json([{
            "musicas": musicas
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no servidor"})
    }
}

//GET retorna música por id 
const getOneMusic = (request, response) => {
    try {
        let idRequest = request.params.id
        let musicaEncontrada = musicas.find(musica => musica.id == idRequest)
        
        response.status(200).send(musicaEncontrada)
    } catch (err) {
        response.status(404).send ({
            "mensagem": "Essa música não existe na sua lista."
        })
    }
}
// GET retorna músicas por artista (está dando erro)
const getByArtista = (request, response) => {
   
        let artistaRequest = request.query.artists.toLowerCase() //variável pra guardar o que o usuário soliticou
        
        let musicaFound = musicas.filter(musica => {
            artistasLowerCase = musica.artists.map(artistaDoArray => artistaDoArray.toLowerCase())
            return artistasLowerCase.includes(artistaRequest)
        })
            
        if (musicaFound. length > 0) {
        response.status(200).send(musicaFound)
        } else {
        response.status(404).send([{
        "mensagem": "Infelizmente esse artista foi não encontrado!"    
        }])
        }
    
}
    //filter (musica => musica.id == artistaRequest)


// POST cadastrar novas músicas
const addMusicas = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistaRequest = request.body.artists

        let newMusic = {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        title: titleRequest,
        launchYear: launchYearRequest,
        favorited: favoritedRequest,
        artists: artistaRequest
        } 
        musicas.push(newMusic)   
        response.status(201).json([{
            "mensagem": "Nova música cadastrada com sucesso!",
            newMusic
        }])
    } catch (err) {
        console.log(err)
        response.status(500) ([{
            message: "Erro interno ao cadastrar."
        }])
    }
}

// Patch favoritar,desfavoritar
const atualizaFavoritas = (request, response) => {
    const idRequest = request.params.id //const para guardar o id

    const favRequest = request.body.favorited //const para guardar o favorito

    favFilter = musicas.find(favorita => favorita.id == idRequest)
    
    if (favFilter) {
        favFilter.favorited = favRequest
        response.status(200).json([{
            message: "Atualização de favorita realizada com sucesso!",
            musicas
        }])
    } else {
        response.status(404).json([{
            message: "Não foi possível modificar, tente outra vez."
        }])
    }
}

// DELETE deletar uma música
const deleteMusica = (request, response) => {
    const idRequest = request.params.id

    const indiceMusica = musicas.findIndex(musica => musica.id == idRequest)

    musicas.splice(indiceMusica, 1)

    response.status(200).json([{
        "message": "A música foi deletada.",
        "deletada": idRequest,
        musicas
    }])
}

// PUT atualizar música específica
const updateMusica = (request, response) => {

    const idRequest = request.params.id
    let musicaRequest = request.body

    let indexEncontrado = musicas.findIndex(musica => musica.id == idRequest)

    musicas.splice(indexEncontrado, 1 , musicaRequest)

    response.status(200).json([{
        "mensagem": "A música e suas informações foram atualizadas.",
        musicas
    }])
}

module.exports = {
    getAllMusics,
    getByArtista,
    getOneMusic, 
    addMusicas,
    atualizaFavoritas,
    deleteMusica,
    updateMusica
}