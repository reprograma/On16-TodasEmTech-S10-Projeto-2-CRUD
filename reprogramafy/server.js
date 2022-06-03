const app = require('./src/app')

const PORT = 4040

app.listen(PORT, () => {
    console.log(`Seu servidor está na porta ${PORT}`)
})

