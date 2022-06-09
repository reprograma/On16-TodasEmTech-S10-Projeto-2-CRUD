const app = require("./src/app") //chamando o arquivo app

const port = 1313 //PORTA

//iniciando o servidor
app.listen(port , ()=>{
    console.log(`Servidor está rodando na porta ${port}`)
})