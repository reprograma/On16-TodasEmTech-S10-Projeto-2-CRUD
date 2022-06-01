<h1 align="center">  Projeto Guiado II :rocket: </h1>
<h3 align="center">  Turma On16 Todas em Tech - Back-end | S10  </h3>
<h5 align="center">  Prof. Mayhhara Morais  </h5> <br>

# :rainbow: Projeto API Nodejs "{reprograma}fy" :vulcan_salute:

</br>

> ## Musics 	:notes:

Montar uma API com playlist de musica, onde pode favoritar as musicas favoritas e quem são seus artistas. Também pode inserir novas músicas ou remover da nossa playlist as que não queremos mais. 

### :game_die: `Dados`

```
{
      "id": 19,
      "title": "Hold My Hand",
      "launchYear": "2022",
      "favorited": true,
      "artists": [
          "Lady Gaga"
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

[Musics Print Postman](https://github.com/camisarp/On16-TodasEmTech-S10-Projeto-2-CRUD/blob/camisarp/reprogramafy/src/musicasREADME.md)

----

<br>

> ## Podcasts :microphone:

Montas uma API de podcasts, onde pode listar todos os podcasts e também filtra-los por tópico. Também pode inserir novos podcasts ou remover algum já existente, além de conseguir avaliá-lo.
<br>

### :game_die: `Dados`

```
{
      "id": 1,
      "name": "Quero ser dev",
      "podcaster": "Simara Conceicao",
      "topic": "tecnologia",
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

[Podcasts Print Postman](https://github.com/camisarp/On16-TodasEmTech-S10-Projeto-2-CRUD/blob/camisarp/reprogramafy/src/podcastsREADME.md)

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


### :zap: `Tecnologias`
</br>

| Ferramenta | Descrição |
| --- | --- |
| javascript | Linguagem de programação |
| nodejs | Ambiente de execução do javascript|
| npm | Gerenciador de pacotes|
| express |  Framework gerencia requisições de diferentes verbos HTTP em diferentes URLs|
| nodemon |  Biblioteca reinicia automaticamente o servidor. |

  
### :triangular_ruler: `Arquitetura` 
</br>

:heavy_check_mark: Criação de 3 pastas no “src”

- [x] controllers - para armazenar a lógica de controle da nossa api
- [x] models - para armazenar os nosso modelos (ex: nossas músicas)
- [x] routes - para armazenar as rotas
 
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
  <img src="https://user-images.githubusercontent.com/84551213/171315925-9e44d438-7b33-4301-b420-7f5da30a7531.gif" width= "400px"/>
</p>
