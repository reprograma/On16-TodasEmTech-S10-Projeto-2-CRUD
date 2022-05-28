const app = require("./src/app") 

//configurando a porta
const PORT = 3000 

app.listen( PORT, () => {
	console.log(`Olá, estou na porta ${PORT}`)
	})