<p align="center"> Maria João Bueno</p>
<h2><br>
<b> Projeto Guiado </b></h2></p>
<h3> Reprogama - BootCamp BackEnd</h3>
------------------------------------------------------------------------------------------------

<h2 align="center"> {Reprograma}Fy </h2><br>


<p align="center" ><img src="img/capa-projeto.png" alt="logo reprogramafy" width="320"></p><br>

> ## Projeto API Nodejs   
<br>

Vamos montar nossa própria playlist de músicas e poderemos favoritar nossas músicas, buscar na Playlist por artista. Além disso, poderemos inserir músicas novas ou remover da nossa playlist as que não queremos mais. 
<br>


> Criando a estrutura da nossa API

Primeiramente, iremos criar uma pasta chamada “src” (de “source”) na raiz do nosso projeto, onde armazenaremos todos os códigos da aplicação. Dentro dessa, criaremos três pastas:

- [x] controllers - para armazenar a lógica de controle da nossa api
- [x] models - para armazenar os nosso modelos (ex: nossas músicas)
- [x] routes - para armazenar as rotas

```
reprogramafy
├── src
│   ├── controllers
│   ├── models
│   ├── routes
├── package.json
```
<br>

> Criando o servidor

Deveremos criar dentro de *src/* um arquivo chamado *app.js*. Nesse arquivo faremos as configurações da nossa aplicação. Configuraremos a mesma para utilizar o **Express**.

Quando criamos o servidor utilizando o protocolo HTTP, definimos um callback que será executado sempre que recebermos uma requisição web. Nesse caso, esse callback é executado quando o nosso servidor inicia e retornará uma mensagem. E reinicia-se com o **Nodemon**

<br>


> Para as rotas da reprogramafy

<p align="center" ><img src="https://i.ibb.co/MVTnnsM/iniciando-servidor.png" alt="logo reprogramafy" width="720"></p><br>

- [x]   listar todas as músicas da playlist do usuário

<p align="center"><img src="https://i.ibb.co/qB85QhN/all.jpg" alt="all" width="420"></p>

- [x]   listar apenas uma música específica

<p align="center"><img src="https://i.ibb.co/SQTCg1W/por-id.png" alt="all" width="420"></p>

- [x]   listar  músicas de um artista específico

Nessa também pudemos aproveitar para praticar mais manipulação de Arrays, uma vez que foi preciso usar um método para encontrar a string necessária e utilizá-la para filtrar.
  
<p align="center"><img src="https://i.ibb.co/rdWFY0C/filtrar-por-artist.png" alt="all" width="420"></p>

- [x]   adicionar uma nova música

<p align="center"><img src="https://i.ibb.co/wMNxnsh/novosong.png" alt="all" width="420"></p>

- [x]   remover uma música da lista

<p align="center"><img src="https://i.ibb.co/x82HfCy/delete.jpg" alt="all" width="420"></p>

- [x]   alterar informações da música

<p align="center"><img src="https://i.ibb.co/QYZGzgz/put.jpg" width="420"></p>

- [x]   favoritar/desfavoritar uma música

<p align="center"><img src="https://i.ibb.co/8cqhNfL/patch.png" width="420"></p>

=================================================================

<p align="center"> <img src="https://thumbs.gfycat.com/BronzeFeistyIzuthrush-size_restricted.gif" alt="dancante" width="420"> </p>