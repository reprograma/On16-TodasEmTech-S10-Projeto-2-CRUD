// acessando app.js
const app = require("./src/app") 
// estabelecendo a porta com variável
const PORT = 1313 

// iniciando o servidor
app.listen(PORT, () => 
{
    console.log(`
    ------------Hola!----------------
    =================================
     bienvenida al puerta ${PORT}!`)
})
