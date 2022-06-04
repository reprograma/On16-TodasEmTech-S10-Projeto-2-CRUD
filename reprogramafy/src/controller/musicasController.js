const musicas = require('../models/musicas.json')

// - [x] poder listar todas as músicas da playlist do usuário
//http://localhost:1313/musicas/biblioteca

const listarMusicas = (req, res) => {
    try {
        res.status(200).json([{
            "Biblioteca de músicas": musicas
        }])
    } catch (err) {
        res.status(500).send({
            "Ops": "Erro no server"
        })
    }
}


// - [x] poder listar apenas uma música específica
// http://localhost:1313/musicas/biblioteca/1

const buscarMusica = (req, res) => {

    let idRequest = req.params.id
    let idFilter = musicas.filter(musica => musica.id == idRequest)

    if (idFilter.length > 0) {
        res.status(200).send(idFilter)
    } else {
        res.status(404).send({
            "Ops": "Música não encontrada"
        })
    }
}


// - [x] poder listar  músicas de um artista específico
//http://localhost:1313/musicas/buscar/artista?artists=liniker

const musicaPorArtista = (req, res) => {
    let artistRequest = req.query.artists()
    let artistaFiltrar = musicas.filter(musicas => musicas.artists.includes(artistRequest))

    if (artistaFiltrar.lenght > 0) {
        res.status(200).send(artistaFiltrar)
    } else {
        res.status(404).send([{
            "retorno": "Artista não encontrado"
        }])
    }
}


// - [x] poder adicionar uma nova música
const adicionarMusica = (req, res) => {
    try {
        let titleRequest = req.body.title;
        let lauchYearRequest = req.body.lauchYear;
        let favoritedRequest = req.body.favorited;
        let artistsRequest = req.body.artists

        let novaMusica = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            lauchYear: lauchYearRequest,
            favorited: favoritedRequest,
            artists: artistsRequest
        }

        musicas.push(novaMusica)
        res.status(201).json([{
            "retorno": "Musica cadastrada",
            novaMusica
        }])

    } catch (err) {
        res.status(500).send([{
            "retorno": "Erro interno ao cadastrar"
        }])
    }
}



// - [x] poder remover uma música da lista
const deletarMusica = (req, res) => {
    const idRequest = req.params.id;
    const musicaEncontrada = musicas.findIndex((musicas) => musicas.id == idRequest);

    musicas.splice(musicaEncontrada, 1);

    if (musicaEncontrada) {
        res.status(200).json([{
            message: "A música selecionada foi deletada",
            "Música deletada": idRequest,
            musicas,
        }, ]);
    } else {
        res.status(404).send([{

            "retorno": "Música não deletada",

        }]);
    }
};



// - [x] poder alterar informações da música
const alterarMusica = (req, res) => {
    const idRequest = req.params.id;
    let musicaRequest = request.body;
    let musicaEncontrada = music.findIndex((musicas) => musicas.id == idRequest);

    if (musicas.splice(musicaEncontrada, 1, musicaRequest)) {
        res.status(200).json([{
            "retorno": "Música atualizada",
            musicas
        }])
    } else {
        res.status(404).send([{
            "retorno": "Música não alterada"
        }])
    }
}



// - [x] poder favoritar/desfavoritar uma música
const atualizarMusica = (req, res) => {
    const idRequest = req.params.id
    const favoritedRequest = req.body.favorited
    favoritedFilter = musicas.find((musicas) => musicas.id == idRequest)

    if (favoritedRequest) {
        favoritedFilter.favorited = favoritedRequest,
            res.status(200).json([{
                "retorno": "Favorito atualizado"
            }]);
    } else {
        res.status(404).json([{
            "retorno": "Favorito não atualizado"
        }]);
    }
}



module.exports = {
    listarMusicas,
    buscarMusica,
    musicaPorArtista,
    adicionarMusica,
    deletarMusica,
    alterarMusica,
    atualizarMusica
}