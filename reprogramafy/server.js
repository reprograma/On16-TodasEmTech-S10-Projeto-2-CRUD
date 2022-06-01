const app = require("./src/app"); // chamo o arquivo app

const PORT = 1313; // configura a porta

app.listen(PORT, () => {
  // inicia o server
  console.log(
    `Eu lhe mostro a porta ${PORT}, mas é você que tem que atravessá-la. ♥`
  );
});
