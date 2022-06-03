<h1 align="center">
    <br>
    <p align="center">Reprograma - Semana 10 (Projeto Guiado II)<p> 
</h1>

<h3 align="center">  Turma On16 Todas em Tech - Back-end | S10  </h3> 

<br>
# Projeto API "{reprograma}fy" 
</br>

### API Pronta!

> ## Musics  :🎼:

Uma API onde se encontra uma playlist de música, sendo viável favoritá-las. É possível inserir novas músicas ou removê-las. Podemos filtrar nossas músicas por artista ou id!

<img src= ![Design sem nome](https://user-images.githubusercontent.com/100438303/171868565-a9d78bf3-7b3d-489b-ba5c-a77687686a17.gif)" width="500" height="500"/></h4><br>


### 💻: `Dados`

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

### `Requisitos`
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


----

<br>

> ## Podcasts :microphone:

Uma API de podcasts, onde pode listar todos os podcasts e também filtra-los por tópico. Também pode inserir novos podcasts ou remover podcasts já existentes, além de conseguir avaliá-los.
<br>

<img src= "![Design sem nome (1)](https://user-images.githubusercontent.com/100438303/171869692-ab054f69-4dbd-464a-8f99-63864ae67b29.gif)" width="500" height="500"/></h4><br>


### 💻: `Dados`

```
{
    "id": 5,
    "name": "Falando em Nostalgia",
    "podcaster": "Ana Vitória",
    "topic": "cultura pop",
    "stars": 5
}
```

###  `Requisitos` 
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


----

<br>

> ## 👩‍🎓: Iniciando a API Nodejs
</br>

| Passo | Comando/informação       |
| --------- | ----------- |
| Inicie um projeto node | npm init |
| No package.json o script | "start": "nodemon server.js" |
| Instale as dependências atualizadas   | npm install |
| Crie o .gitignore     | node_modules |

<br>

### ☑️: `Tecnologias`
</br>

| Ferramenta | Descrição |
| --- | --- |
| javascript | Linguagem de programação |
| nodejs | Ambiente de execução do javascript|
| npm | Gerenciador de pacotes|
| express |  Framework gerencia requisições de diferentes verbos HTTP em diferentes URLs|
| nodemon |  Biblioteca reinicia automaticamente o servidor. |

<br>

### 🏛️: `Arquitetura` 
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
  <img src="https://media.giphy.com/media/ZBoHqyxmhv85ff3qOI/giphy-downsized.gif" />
</p>

<p align="center">
Desenvolvido por Marina Porto, com o apoio da Prof. Mayhhara Morais e Camila Ribeiro. :purple_heart:
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" />

</p>
