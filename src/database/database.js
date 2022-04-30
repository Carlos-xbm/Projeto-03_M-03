const mongoose = require("mongoose");
const connectDatabase = () => {
  console.log("Conectando com banco de dados ...");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Conectado"))
    .catch((err) => console.log(`Erro ao conectar com banco de dados ${err}`));
};
module.exports = connectDatabase;
