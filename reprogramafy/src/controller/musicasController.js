const musics = require('../models/musicas.json')

const getAllMusics = (request, response) => {

    try {
        response.status(200).json([
            {
                "Músicas": musics
            }
        ])
    } catch(err) {
        response.status(500).send({message: 'Erro no server.'})
    }
}

const getMusicById = (request, response) => {

    try {

        let idRequest = request.params.id
        let idFilter = musics.filter(music => music.id == idRequest)

        if (idFilter.length > 0) {
            response.status(200).send(idFilter)

        } else {
            response.status(404).send(
                {
                    message: "NOT FOUND."
                }
            )
        }
    } catch (err) {
        response.status(500).send({ message: 'Erro no server.' })
    }
}


const getMusicByArtist = (request, response) => {

    let artistRequest = request.query.artists

    let artistFilter = musics.filter(music => music.artists.includes(artistRequest))

    if(artistFilter.length > 0) {
        response.status(200).send(artistFilter)

    } else {
        response.status(404).send(
            {
                message: "NOT FOUND."
            }
        )
    }
}

const registerNewMusic = (request, response) => {

    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistsRequest = request.body.artists 
    
        let newMusic = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            favorited: favoritedRequest,
            artists: artistsRequest
        }
    
        musics.push(newMusic)
    
        response.status(201).json([
            {
                message:'Música adicionada com sucesso.',
                newMusic
            }
        ])
    } catch(err) {
        console.log(err)
        response.status(500).send([ //erro dentro do código
            {
                message:'Erro interno ao cadastrar'
            }
        ])
    }
    
}

const updateMusicById = (request, response) => {
    
    try {
        const idRequest = request.params.id

        const musicRequest = request.body

        let foundIndex = musics.findIndex(music => music.id == idRequest)

        musics.splice(foundIndex, 1, musicRequest)

        response.status(200).json([
            {
                message: 'Música atualizada.',
                musicRequest
            }
        ])
    } catch (err) {
        console.log(err)
        response.status(500).send([ //erro dentro do código
            {
                message: 'Erro interno ao cadastrar'
            }
        ])
    }
}

const deleteMusicById = (request, response) => {

    try {
        const idRequest = request.params.id

        const indexMusic = musics.findIndex(music => music.id == idRequest)
    
        musics.splice(indexMusic, 1)
    
        response.status(200).json([
            {
                message:"Música deletada",
                deletada: idRequest,
                musics
            }
        ])
    } catch (err) {
        console.log(err)
        response.status(500).send([ //erro dentro do código
            {
                message: 'Erro interno ao cadastrar'
            }
        ])
    }
}

const updateFav = (request, response) => {

    const idRequest = request.params.id

    favFind = musics.find(music => music.id == idRequest)

    if(favFind) {
        favFind.favorited == true
        response.status(200).json([
            {
                message:"Música favoritada com sucesso.",
                favFind
            }
        ])
    } else {
        response.status(404).json([
            {
                message:"Sem alteração"
            }
        ])
    }


} //rever código


module.exports = {
    getAllMusics,
    getMusicById,
    getMusicByArtist,
    registerNewMusic,
    updateMusicById,
    deleteMusicById,
    updateFav
}