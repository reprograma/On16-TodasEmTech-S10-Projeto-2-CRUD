// Criando a lógica das nossas rotas

const musicsJson = require('../models/musicas.json') //Acessando json
const express = require('express')
const {
    response
} = require('../app')
const app = express() // Executando o express

app.use(express.json()) // Fazendo body parser

// Lógica da rota 01 de GET para nos retornar todas as músicas

const getAllMusics = (request, response) => {
    try {
        response.status(200).json([{
            "Musicas": musicsJson
        }])
    } catch (err) {
        response.status(500).send({
            "message": "Erro no server"
        })
    }
}

// Lógica da rota 02 de GET para nos retornar uma música específica por id

const getMusicId = (request, response) => {
    const idRequest = request.params.id
    let musicFound = musicsJson.filter(musics => musics.id == idRequest)
    if (musicFound.length > 0) {
        response.status(200).send(musicFound)
    } else {
        response.status(404).send([{
            "message": "Música não encontrada"
        }])
    }
}

// Lógica da rota 03 de GET para nos retornar músicas de artistas especificos
// ERRO no POSTMAN = revisar e testar novamente

const getMusicArtist = (request, response) => {
    const artistRequest = request.query.artists
    let artistsFilter = musicsJson.filter(musics => musics.artists.includes(artistRequest))
    if (artistsFilter.length > 0) {
        response.status(200).send(artistsFilter)
    } else {
        response.status(404).send([{
            "message": "Música não encontrada"
        }])
    }
}

// Lógica da rota 04 de POST para podermos adicionar uma nova música
const addMusic = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYear
        let favoritedRequest = request.body.favorited
        let artistsRequest = request.body.artists

        let newMusic = {
            id: Math.floor(Date.now() * Math.random()).toString(36), // gera ID randomico
            title: titleRequest,
            launchYear: launchYearRequest,
            favorited: favoritedRequest,
            artists: artistsRequest
        }
        musicsJson.push(newMusic)
        response.status(201).json([{
            "message": "Música nova cadastrada",
            newMusic
        }])
    } catch (err) {
        console.log(err)
        response.status(500).send([{
            "message": "Erro interno ao cadastrar"
        }])
    }
}

// Lógica da rota 05 de PUT para atualizar uma música especifica(exceto ID) 

const updateMusic = (request, response) => {
    try {
        const idRequest = request.params.id
        const musicRequest = request.body

        let indexEncontrado = musicsJson.findIndex(music => music.id == idRequest)

        musicsJson.splice(indexEncontrado, 1, musicRequest)

        response.status(200).json([{
            "message": "Filme atualizado",
            musicsJson
        }])
    } catch {
        console.log(err)
        response.status(500).send([{
            "message": "Erro interno ao cadastrar nova música."
        }])
    }
}

// Lógica da rota 06 de DELETE para deletar uma música específica por ID

const deleteMusic = (request, response) => {
    try {
        const idRequest = request.params.id
        const indiceMusics = musicsJson.findIndex(musics => musics.id == idRequest)

        musicsJson.splice(indiceMusics, 1)

        response.status(200).json([{
            "message": "Música deletada com sucesso!",
            "deletado": idRequest,
            musicsJson
        }])
    } catch (err) {
        console.log(err)
        response.status(404).send([{
            "message": "Erro interno ao deletar"
        }])
    }
}

// Lógica da rota 07 de PATCH para favoritar/desfavoritar música ( body alterar true/false em "favorited")

const favoritedMusic = (request, response) => {
    const idRequest = request.params.id
    const favoritedRequest = request.body.favorited
    favoritedFilter = musicsJson.find((musicsJson) => musicsJson.id == idRequest)

    if (favoritedFilter) {
        favoritedFilter.favorited = favoritedRequest
        response.status(200).json([{
            message: "Favoritação atualizada com sucesso",
            musicsJson
        }])
    } else {
        response.status(404).json([{
            message: "Não foi modificado, erro encontrado"
        }])
    }
}















module.exports = {
    getAllMusics,
    getMusicId,
    getMusicArtist,
    addMusic,
    updateMusic,
    deleteMusic,
    favoritedMusic
}