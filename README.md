<h1 align="center">
    <br>
    <p align="center">Projeto API Nodejs {reprograma}fy<p>
</h1>

<!--ts-->
- [Apresentação](#apresentação)
- [Instalações Necessárias para o teste no Postman](#instalações-necessárias-para-o-teste-no-postman)
  - [Iniciando a API Node.js](#iniciando-a-api-nodejs)
  - [Instalando o Express](#instalando-o-express)
  - [Nodemon](#nodemon)
  - [Scripts package.json](#scripts-packagejson)
  - [Criando o arquivo .gitignore](#criando-o-arquivo-gitignore)
- [Postman Músic](#postman-músic)
  - [Testando a rota POST via Postman](#testando-a-rota-post-via-postman)
  - [Testando a rota PUT via Postman](#testando-a-rota-put-via-postman)
  - [Testando a rota PATCH via Postman](#testando-a-rota-patch-via-postman)
  - [Testando a rota DELETE via Postman](#testando-a-rota-delete-via-postman)
- [Postman Podcast](#postman-podcast)
- [API Pronta!](#api-pronta)
- [Autora](#autora)

<!--te-->

<br>
<br>

<img src="img/capa-projeto.png" alt="logo reprogramafy" width="500">


## Apresentação

Parabéns, você foi escolhida para testar um novo produto que deverá ser lançado em breve. Na nossa playlist poderemos favoritar nossas músicas e ver quais artistas tocam a música. Além disso, poderemos inserir novas músicas ou remover da nossa playlist as que não queremos mais. Não curte músicas? Tem espaço pra podcast também!! No nosso {reprograma}fy você poderá listar todos os podcasts e também filtra-los por tópico. Somado a isso, pode também inserir novos podcasts ou remover algum já existente, além de conseguir avaliá-lo.
<br>


## Instalações Necessárias para o teste no Postman

### Iniciando a API Node.js

Com o terminal aberto na pasta "reprogramafy", para iniciar nossa API Nodejs, precisamos inicializar o *package manager*, que é o gerenciador de pacotes do Node. Para isso executaremos ```npm init``` no terminal. Pressionando “Enter”, serão exibidas uma sequência de perguntas que deverão ser preenchidas ou mantidas o valor padrão.

Com isso um arquivo com o nome de package.json será criado. Esse arquivo é muito importante pois define que o nosso projeto como sendo Node.

### Instalando o Express

Feito isso, precisaremos instalar o Express no nosso projeto, que é um framework que nos trará facilidades. Para isso executaremos no terminal:

``` npm install express --save ```

Ao rodar a instalação do express, uma *pasta node_modules* com os pacotes do meu projeto será criada. Se reparar, dentro dessa pasta teremos uma pasta chamada “express”. Toda vez que você rodar o comando ``` npm install``` essa pasta node_modules será atualizada com as últimas atualizações conforme o que estiver configurado no arquivo *package.json*.

### Nodemon

Caso você esteja com o servidor rodando e tente alterar algum arquivo, para que o servidor capte essas alterações será necessário reiniciá-lo manualmente. Porém é bem chato ficar fazendo isso. Para evitar esse tipo de problema, podemos utilizar o *nodemon* para inicializar nosso servidor. Para utilizá-lo, deveremos primeiramente instalá-lo rodando o comando ```npm install nodemon --save```. Com o nodemon instalado, para rodar nosso servidor o utilizando, deveremos utilizar o comando ```nodemon server.js```. Com isso nosso servidor será inicializado com o nodemon e você poderá editar seus arquivos sem precisar reiniciá-lo.

### Scripts package.json

Para não precisar ficar escrevendo ```nodemon server.js``` para inicializar o servidor, podemos ir no nosso arquivo *package.json* e editar o atributo "scripts" do json. Poderemos incluir um script de start, informando que quando ele for utilizado, executará o comando ```nodemon server.js```:

```package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
```
Dessa forma para inicializar o servidor, basta digitar ```npm start``` no terminal e pressionar enter, que o mesmo já chamará automaticamente o comando ```nodemon server.js```.

### Criando o arquivo .gitignore

Devemos criar na raíz do "reprogramafy" o arquivo *.gitignore* e escrever nele ```node_modules/``` para o git nao trackear essa pasta para commit.


O novo produto de músicas deverá:

- [x] poder listar todas as músicas da playlist do usuário
- [x] poder listar apenas uma música específica
- [x] poder listar  músicas de um artista específico
- [x] poder adicionar uma nova música
- [x] poder remover uma música da lista
- [x] poder alterar informações da música
- [x] poder favoritar/desfavoritar uma música

Sendo assim precisaremos criar 7 rotas para músicas:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| POST   | Adicionar nova música                  |
| GET    | Listar música                          |
| GET    | Listar uma música específica           |
| GET    | Listar música por artista              |
| DELETE | Remover música                         |
| PUT    | Alterar informações da música          |
| PATCH  | Favoritar/desfavoritar música          |


O novo produto de podcasts deverá:

- [x] poder listar os podcasts
- [x] poder listar os podcasts por tópico
- [x] poder adicionar um podcast
- [x] poder remover um podcast da lista
- [x] poder alterar a nota do podcast

Sendo assim precisaremos criar 5 rotas para podcasts:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| POST   | Adicionar novo podcast                 |
| GET    | Listar podcasts                        |
| GET    | Listar podcast por tópico              |
| DELETE | Remover podcast                        |
| PATCH  | Alterar a nota de um podcast           |


## Postman Músic

Depois de criar a rota lá no nosso controler, vamos testar se está funcionando lá no postman. Para testar nossa rota GET de listagem de todos os musicas no Postman, deveremos clicar em New > Request. Com a nova requisição aberta, deveremos escolher na combobox o verbo HTTP *GET* e digitar *http://localhost:1313/playlist/musicas*. Ao clicar no botão *send* o array de json com nossas musicas será exibido. Quando digitarmos *http://localhost:1313/playlist/musica/buscar/4* e clicarmos no botao *send* deverá ser retornado a música que possui o id=4 (escolhi o id 4 mas poderia ter escolhido outro id qualquer existente na lista). Quando digitarmos *http://localhost:1313/playlist/musica/artista?artista=beyonce* deverá ser retornado todas as musicas do nosso *musicas.json* que sejam da Beyonce.

### Testando a rota POST via Postman

Para testar via Postman, a rota POST que cria uma nova musica na listagem musicas, deveremos clicar em New > Request. Com a nova requisição aberta, deveremos escolher na combobox o verbo HTTP *POST* e digitar *http://localhost:1313/playlist/musicas*. Deveremos então, passar a informação da nova musica que iremos adicionar. Para isso deveremos clicar em *body* e clicar em *raw*. Logo após trocar a combobox "text" para *JSON*. Isso significa que estamos definindo que iremos enviar um JSON para nossa API quando enviarmos a requisição. Deveremos então informar o seguinte JSON:

```
{
    {
        "title": "Flawless",
        "launchYear": "2014",
        "favorited": true,
        "artists": [
            "Beyonce",
            "Nicki Minaj"
        ]
    }
}
```

Ao clicar no botão *send*, enviaremos nossa nova musica para ser criada na nossa API. Dando certo, a musica que enviamos será retornada em tela para a gente.

### Testando a rota PUT via Postman

Para testar, via Postman, a rota PUT que altera uma musica na listagem musicas, deveremos clicar em New > Request. Com a nova requisição aberta, deveremos escolher na combobox o verbo HTTP *PUT* e digitar *http://localhost:1313/playlist/musics/4* (escolhi o id 4 mas poderia ter escolhido outro id qualquer existente na lista). Deveremos então, passar a nova informação que iremos atualizar. Para isso deveremos clicar em *body* e clicar em *raw*. Logo após trocar a combobox "text" para *JSON*. Isso significa que estamos definindo que iremos enviar um JSON para nossa API quando enviarmos a requisição. Deveremos então informar o seguinte JSON:

```
    {
        "id": 2,
        "title": "Flawlessss",
        "launchYear": "2012",
        "favorited": false,
        "artists": [
            "Bey",
            "Nicki"
        ]
    }
```
Ao clicar no botão *send*, se você passou o id de uma musica que existe na listagem, o mesmo deverá ser retornado com a alteração feita na resposta. 

### Testando a rota PATCH via Postman

Depois de criar o código, para testar, via Postman, a rota PATCH que altera o status de favorito da musica, deveremos clicar em New > Request. Com a nova requisição aberta, deveremos escolher na combobox o verbo HTTP *PATCH* e digitar *http://localhost:1313/playlist/musica/4/favoritada* (escolhi o id 4 mas poderia ter escolhido outro id qualquer existente na lista). Deveremos então, passar a informação de que a musica foi favoritada ou não para enviar junto na requisição. Para isso deveremos clicar em *body* e clicar em *raw*. Logo após trocar a combobox "text" para *JSON*. Deveremos então informar o seguinte JSON:

```
{
	"favorited" : true
}
```
Ao clicar no botão *send*, se você passou o id de uma musica que existe na listagem, o mesmo deverá ser retornado com a alteração de status feita na resposta. 

### Testando a rota DELETE via Postman

Para testar, via Postman, a rota DELETE que deleta uma música, deveremos clicar em New > Request. Com a nova requisição aberta, deveremos escolher na combobox o verbo HTTP *DELETE* e digitar *http://localhost:1313/playlist/delete/4* (escolhi o id 4 mas poderia ter escolhido outro id qualquer existente na lista). Ao clicar no botão *send*, se você passou o id de uma musica que existe na listagem, deverá ser retornado um 200.


## Postman Podcast


## API Pronta!

Desenvolvemos todas as rotas necessárias para nosso produto da reprogramafy. Criamos a rota de POST (que cria uma nova musica), tres rotas de GET (uma para trazer todas as musicas, uma para trazer uma musica dado o id e a última para trazer as musicas dado o artista), PUT (para alterar a musica), PATCH (para alterar o status de favorito da musica) e DELETE (para deletar a musica). Com todas as rotas desenvolvidas na nossa API de musicas está pronta pra ser lançada!!


## Autora


<p align="center">
Desenvolvido com 🪐 por Andreza Pipolo com o apoio da {reprograma}
</p>




