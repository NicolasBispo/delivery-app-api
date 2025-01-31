import express from "express";
import { PORT } from "./config/constantes";
import appRouter from "./routes";

const app = express();

app.use(express.json());

app.use(appRouter);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
