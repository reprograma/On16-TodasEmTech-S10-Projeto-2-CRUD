
const podcasts = require("../models/podcasts.json");

// retornando todas os podcasts
const getAllPods = (request, response) => {
  try {
    response.status(200).json([
      {
        Podcasts: podcasts,
      },
    ]);
  } catch (err) {
    response.status(500).send({
      message: "Deu ruim o  Servidor está com Erro",
    });
  }
};

/* retornando busca por topico 
request.query usado para filtrar um dado p.ex: ano, tipo, diretor, star etc.. */
const getTopics = (request, response) => {
  try {
    const topicRequest = request.query.topic;
    const topicFilter = podcasts.filter((podcasts) =>
      podcasts.topic.includes(topicRequest)
    );
    if (topicFilter.length > 0) {
      response.status(200).send(topicFilter);
    } else {
      response.status(404).send([
        {
          message: "Tópico não foi encontrado",
        },
      ]);
    }
  } catch (err) {
    response.status(500).send({
      message: "Erro no server",
    });
  }
};

// CADASTRAR, ADICIONAR,  NOVO PODCASTS
// USOU let porque as variáveis sempre poderá mudar
/* no try usou o body porque no POSTMAN irá passar as informações que irá cadastrar ou adicionar, verifique no BD(podcasts.json dentro do models) ex: id, name, etc.. */
const addPods = (request, response) => {
  try {
    let nameRequest = request.body.name;
    let podcasterRequest = request.body.podcaster;
    let topicRequest = request.body.topic;
    let starsRequest = request.body.stars;
    // Math.floor ... é o codigo que gera id radomico no javascript
    let novoPodcast = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      name: nameRequest,
      podcaster: podcasterRequest,
      topic: topicRequest,
      stars: starsRequest,
    };

    podcasts.push(novoPodcast); // empurrar o novo podcasts para o json(bando de dados que está na pasta models, arquivo podcasts.json)

    response.status(201).json([
      {
        message: "Podcast cadastrado",
        novoPodcast,
      },
    ]);
  } catch (err) {
    response.status(500).send([
      {
        message: "Atenção!!! Erro ao cadastrar",
      },
    ]);
  }
};
// ALTERAR A NOTA(STARS) DOS PODCASTS
// find esta sendo usado porque so vai modificar um item

const updateStars = (request, response) => {
  try {
    const idRequest = request.params.id;
    const starsRequest = request.body.stars; //body será passado as informações durante o uso do POSTMAN
    starsFilter = podcasts.find((podcast) => podcast.id == idRequest);
    /*se encontar o starsFilter.stars será igual ao starsRequest o valor que foi enviado no body quando foi testar no POSTMAN*/
    if (starsFilter) {
      starsFilter.stars = starsRequest;
      response.status(200).json([
        {
          mensagem: "Sua avaliaçao foi alterada com sucesso!",
          podcasts,
        },
      ]);
    } else {
      response.status(404).json([
        {
          message: "Sua avaliaçao não foi modificada!",
        },
      ]);
    }
  } catch (err) {
    response.status(500).send([
      {
        message: "Erro ao cadastrar",
      },
    ]);
  }
};

//DELETAR ID
const deletePodcasts = (request, response) => {
  const idRequest = request.params.id;
  const delPodcasts = podcasts.findIndex((pod) => pod.id == idRequest);

  podcasts.splice(delPodcasts, 1);

  response.status(200).json([
    {
      message: "Podcast foi Deletado, conforme solicitado",
      Deletado: idRequest,
      podcasts,
    },
  ]);
};

module.exports = {
  getAllPods,
  getTopics,
  addPods,
  updateStars,
  deletePodcasts
}
