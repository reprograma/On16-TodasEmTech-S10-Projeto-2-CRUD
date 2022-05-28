const app = require('./src/app'); //chamar o arquivo app

const PORT = 1010; //config uma porta

app.listen = (PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
}); //inicia o server