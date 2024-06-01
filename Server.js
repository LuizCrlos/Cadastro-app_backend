const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000', // ou '*' para permitir todas as origens
  optionsSuccessStatus: 200
}));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Conectado ao MongoDB...`);
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
