import { Router } from "express";
import AnuncioRepository from "../repositories/anuncios-repository";
import AnunciosService from "../services/anuncios-service";
import AnunciosController from "../controllers/anuncios-controller";
import { validarBody } from "@/middlewares/validacao-erros";
import { criarAnuncioSchema } from "@/schema/anuncios-schema";

const anunciosRouter = Router();

const anuncioRepository = new AnuncioRepository();
const anunciosService = new AnunciosService(anuncioRepository);
const anunciosController = new AnunciosController(anunciosService);

anunciosRouter.get(
  "/",
  anunciosController.listarAnuncios.bind(anunciosController)
);
anunciosRouter.get("/:id", anunciosController.exibirAnuncio.bind(anunciosController))
anunciosRouter.post("/", validarBody(criarAnuncioSchema), anunciosController.criarAnuncio.bind(anunciosController))
