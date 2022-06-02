<h1 align="center">
    <br>
    <p align="center">Reprograma - Semana 10 (Projeto Guiado II)<p>
</h1>

<h3 align="center">  Turma On16 Todas em Tech - Back-end | S10 :Woman Student: </h3> 

<br>
# Projeto API "{reprograma}fy" :Hand with Index Finger and Thumb Crossed:
</br>

### API Pronta!

> ## Musics 	:notes:

Uma API onde se encontra uma playlist de música, sendo viável favoritá-las. É possível inserir novas músicas ou removê-las. Podemos filtrar nossas músicas por artista ou id!

### :game_die: `Dados`

```
{
    "id": 1,
    "title": "Home",
    "launchYear": "2019",
    "favorited": true,
    "artists": [
        "BTS"
    ]
}
```

### :warning: `Requisitos` :warning:
</br>

- [x] listar todas as músicas da playlist do usuário
- [x] listar apenas uma música específica
- [x] listar  músicas de um artista específico
- [x] adicionar uma nova música
- [x] alterar informações da música
- [x] remover uma música da lista
- [x] favoritar/desfavoritar uma música

:heavy_check_mark: Criação de 7 rotas para músicas:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| GET    | Listar música                          |
| GET    | Listar uma música específica           |
| GET    | Listar música por artista              |
| POST   | Adicionar nova música                  |
| PUT    | Alterar informações da música          |
| DELETE | Remover música                         |
| PATCH  | Favoritar/desfavoritar música          |

[Musics prints Postman | terminal](src/../reprogramafy/src/musicasREADME.md)

----

<br>

> ## Podcasts :microphone:

Montas uma API de podcasts, onde pode listar todos os podcasts e também filtra-los por tópico. Também pode inserir novos podcasts ou remover algum já existente, além de conseguir avaliá-lo.
<br>

### :game_die: `Dados`

```
{
    "id": 5,
    "name": "Falando em Nostalgia",
    "podcaster": "Ana Vitória",
    "topic": "cultura pop",
    "stars": 5
}
```

### :warning: `Requisitos` :warning:
</br>

- [x] listar os podcasts
- [x] listar os podcasts por tópico
- [x] adicionar um podcast
- [x] remover um podcast da lista
- [x] alterar a nota do podcast

:heavy_check_mark: Criação de 7 rotas para músicas:

| Verbo  | Descrição da Rota                      |
| ------ | ---------------------------------------|
| GET    | Listar podcasts                        |
| GET    | Listar podcast por tópico              |
| POST   | Adicionar novo podcast                 |
| DELETE | Remover podcast                        |
| PATCH  | Alterar a nota de um podcast           |

[Podcasts prints Postman | terminal](src/../reprogramafy/src/podcastsREADME.md)

----

<br>

> ## :mage_woman: Iniciando a API Nodejs
</br>

| Passo | Comando/informação       |
| --------- | ----------- |
| Inicie um projeto node | npm init |
| No package.json o script | "start": "nodemon server.js" |
| Instale as dependências atualizadas   | npm install |
| Crie o .gitignore     | node_modules |

<br>

### :zap: `Tecnologias`
</br>

| Ferramenta | Descrição |
| --- | --- |
| javascript | Linguagem de programação |
| nodejs | Ambiente de execução do javascript|
| npm | Gerenciador de pacotes|
| express |  Framework gerencia requisições de diferentes verbos HTTP em diferentes URLs|
| nodemon |  Biblioteca reinicia automaticamente o servidor. |

<br>

### :triangular_ruler: `Arquitetura` 
</br>

:heavy_check_mark: Criação de 3 pastas no “src”

- [x] controllers - para armazenar a lógica de controle da api;
- [x] models - para armazenar os nosso modelos;
- [x] routes - para armazenar as rotas.
 
```
📁reprogramafy
├── 📁node_modules
├── 📁src
│   ├── 📁controllers
|       ├── 📄musicasControllers.js
|       ├── 📄podcastsControllers.js
│   ├── 📁models
|       ├── 📄musicas.json
|       ├── 📄podcasts.json
│   ├── 📁routes
│       ├── 📄musicasRoutes.js
│       ├── 📄podcastsRoutes.js
|   ├── app.js
|   ├── musicasREADME.md
|   ├── podcastsREADME.md
├── 📄.gitignore
├── 📄package-lock.json
├── 📄package.json
├── 📄server.js
├── 📄README.md
```
</br>

----

<p align="center">
  <img src="https://media.giphy.com/media/ZBoHqyxmhv85ff3qOI/giphy.gif" width= "400px"/>
</p>

<p align="center">
Desenvolvido por Marina Porto, com o apoio da Prof. Mayhhara Morais e Camila Ribeiro. :purple_heart:
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" />

</p>