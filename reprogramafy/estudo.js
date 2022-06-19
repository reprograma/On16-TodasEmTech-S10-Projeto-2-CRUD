// COMO FILTRAR DENTRO DE UM ARRAY

const getMusicByArtist =(request, response) => {
// guardo o artista passado na 
    let artistaRequisicao = request.query.artists.toLowerCase()
//variavel para acessar o bancodedado.json para encontrar o artista
//filter vai entrar no array e filtrar todo o array de musica
//map para filtrar todo o array do artista dentro do array e transformar numa string
//musica que esta dentro do parentese apos o filter é um objeto que desejamos filtrar - sintaxe filter(nome => nome.id == algumacoisa)
    let musicFound = meujsondemusicas.filter(musica => {
        artistasLowerCase = musica.meujsondemusicas.map(artistaqueeupegueinoarray => artistaqueeupegueinoarray.toLowerCase())

        return artistasLowerCase.includes(artistaRequisicao)
    })
    //para fazer o teste if e else pega o musicFound
    if(musicFound) {
        message: "encontrado o artista"
    }else{
        message: "não encontrado o artista"
    }
}

/* POSTMAN para testar
GET - localhost:numerodaporta/playlist/musicas/
Params - KEY coloca artists   em VALUE coloca nome do artista 
SEND

*/
