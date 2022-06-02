const app = require("./src/app") //chamando o arquivo app

const PORT = 1313

//iniciando o servidor
app.listen(PORT, ()=>{
    console.log(`Estou na porta ${PORT}`)
})
