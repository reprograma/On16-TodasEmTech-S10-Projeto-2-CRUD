const app = require("./src/app")

const PORT = 1313

app.listen(PORT, () => {
    console.log(`O servidor está funcionando na porta ${PORT}.`)
})