import express from "express";
import { PORT } from "./config/constantes";

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
