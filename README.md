<h1 align="center">
    <br>
    <p align="center">〽️ Projeto API Nodejs {reprograma}fy 〽️<p>
</h1>

<!--ts-->
- [〽️ {Reprograma}fy](#️-reprogramafy)
- [⚙️ Instalações necessárias para os testes no Postman](#️-instalações-necessárias-para-os-testes-no-postman)
  - [🧩 Iniciando a API Node.js](#-iniciando-a-api-nodejs)
  - [🧩 Instalando o Express](#-instalando-o-express)
  - [🧩 Instalando o Nodemon](#-instalando-o-nodemon)
  - [🧩 Scripts package.json](#-scripts-packagejson)
  - [🧩 Criando o arquivo .gitignore](#-criando-o-arquivo-gitignore)
- [🎧 {Reprograma}fy Músicas](#-reprogramafy-músicas)
- [🔗 Postman {Reprograma}fy Música](#-postman-reprogramafy-música)
- [🎤 {Reprograma}fy Podcast](#-reprogramafy-podcast)
- [🔗 Postman {Reprograma}fy Podcast](#-postman-reprogramafy-podcast)
- [Autora](#autora)

<!--te-->

<br>
<br>

<p align="center">
<img src="img/capa-projeto.png" alt="logo reprogramafy" width="500">
</p> <p align="center"> </p>


## 〽️ {Reprograma}fy

Parabéns, você foi escolhida para testar um novo produto que deverá ser lançado em breve. Na nossa {Reprograma}fy poderemos favoritar nossas músicas e ver quais artistas tocam a música. Além disso, poderemos inserir novas músicas ou remover da nossa playlist as que não queremos mais. Não curte músicas? Tem espaço pra podcast também!! No nosso {reprograma}fy você poderá listar todos os podcasts e também filtra-los por tópico. Somado a isso, pode também inserir novos podcasts ou remover algum já existente, além de conseguir avaliá-lo.
<br>


## ⚙️ Instalações necessárias para os testes no Postman

### 🧩 Iniciando a API Node.js

Com o terminal aberto na pasta "reprogramafy", para iniciar nossa API Nodejs, precisamos inicializar o *package manager*, que é o gerenciador de pacotes do Node. Para isso executaremos ```npm init``` no terminal. Pressionando “Enter”, serão exibidas uma sequência de perguntas que deverão ser preenchidas ou mantidas o valor padrão.

Com isso um arquivo com o nome de package.json será criado. Esse arquivo é muito importante pois define que o nosso projeto como sendo Node.

### 🧩 Instalando o Express

Feito isso, precisaremos instalar o Express no nosso projeto, que é um framework que nos trará facilidades. Para isso executaremos no terminal:

``` npm install express --save ```

Ao rodar a instalação do express, uma *pasta node_modules* com os pacotes do meu projeto será criada. Se reparar, dentro dessa pasta teremos uma pasta chamada “express”. Toda vez que você rodar o comando ``` npm install``` essa pasta node_modules será atualizada com as últimas atualizações conforme o que estiver configurado no arquivo *package.json*.

### 🧩 Instalando o Nodemon

Caso você esteja com o servidor rodando e tente alterar algum arquivo, para que o servidor capte essas alterações será necessário reiniciá-lo manualmente. Porém é bem chato ficar fazendo isso. Para evitar esse tipo de problema, podemos utilizar o *nodemon* para inicializar nosso servidor. Para utilizá-lo, deveremos primeiramente instalá-lo rodando o comando ```npm install nodemon --save```. Com o nodemon instalado, para rodar nosso servidor o utilizando, deveremos utilizar o comando ```nodemon server.js```. Com isso nosso servidor será inicializado com o nodemon e você poderá editar seus arquivos sem precisar reiniciá-lo.

### 🧩 Scripts package.json

Para não precisar ficar escrevendo ```nodemon server.js``` para inicializar o servidor, podemos ir no nosso arquivo *package.json* e editar o atributo "scripts" do json. Poderemos incluir um script de start, informando que quando ele for utilizado, executará o comando ```nodemon server.js```:

```package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
```
Dessa forma para inicializar o servidor, basta digitar ```npm start``` no terminal e pressionar enter, que o mesmo já chamará automaticamente o comando ```nodemon server.js```.

### 🧩 Criando o arquivo .gitignore

Devemos criar na raíz do "reprogramafy" o arquivo *.gitignore* e escrever nele ```node_modules/``` para o git nao trackear essa pasta para commit.


## 🎧 {Reprograma}fy Músicas

- ✅ poder listar todas as músicas da playlist do usuário
- ✅ poder listar apenas uma música específica
- ✅ poder listar  músicas de um artista específico
- ✅ poder adicionar uma nova música
- ✅ poder remover uma música da lista
- ✅ poder alterar informações da música
- ✅ poder favoritar/desfavoritar uma música

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


## 🔗 Postman {Reprograma}fy Música


**`GET`** Rota listar todas as músicas da playlist do usuário | `localhost:1313/playlist/music`;

**`GET`** Rota listar apenas uma música específica | `localhost:1313/playlist/music/1`;

**`GET`** Rota listar  músicas de um artista específico | `localhost:1313/playlist/search/artist?artists=Ariana Grande`;

**`POST`** Rota adicionar uma nova música | `localhost:1313/playlist/add`;

**`PUT`** Rota alterar informações da música | `localhost:1313/playlist/alterar/3`;

**`DELETE`** Rota remover uma música da lista | `localhost:1313/playlist/deletar/5`;

**`PATCH`** favoritar/desfavoritar uma música | `localhost:1313/playlist/favoritar/9`;


## 🎤 {Reprograma}fy Podcast

- ✅ poder listar os podcasts
- ✅ poder listar os podcasts por tópico
- ✅ poder adicionar um podcast
- ✅ poder remover um podcast da lista
- ✅ poder alterar a nota do podcast

Sendo assim precisaremos criar 5 rotas para podcasts:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| POST   | Adicionar novo podcast                 |
| GET    | Listar podcasts                        |
| GET    | Listar podcast por tópico              |
| DELETE | Remover podcast                        |
| PATCH  | Alterar a nota de um podcast           |


## 🔗 Postman {Reprograma}fy Podcast

**`GET`** Rota listar os podcasts | `localhost:1313/podcast/library` ;

**`GET`** Rota listar os podcasts por tópico | `localhost:1313/podcast/library/topic?topic=tecnologia`;

**`POST`** Rota adicionar uma nova música | `localhost:1313/podcast/add`;

**`DELETE`** Rota remover uma música da lista | `localhost:1313/podcast/delete/2`;

**`PATCH`** Rota favoritar/desfavoritar uma música | `localhost:1313/podcast/update/1`;



## Autora

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQFUFLABHg5xfA/profile-displayphoto-shrink_800_800/0/1646500768370?e=1659571200&v=beta&t=ZeyR8RdmYcjcC_Mfr83iTLwkrQT3MR74QzceWIdbWfI" width="100px;" alt="Foto de Perfil de Andreza"/>
 <br/>
</a>


<p align="center">
Desenvolvido por  <img alt="in version" src="https://img.shields.io/badge/-Andreza_Pipolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andrezapiolo/)> com o apoio da {reprograma}
</p> <p align="center"> </p>








