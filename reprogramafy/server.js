const app = require("./src/app");

const PORT = 1313;

app.listen(PORT, () => {
  console.log(
    `Eu lhe mostro a porta ${PORT}, mas é você que tem que atravessá-la. ♥`
  );
});
