const app = require("./src/app"); //chamando o arquivo app

const PORT = 3000; //PORTA

//iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor da PLAYLIST está rodando na porta ${PORT}`);
});
