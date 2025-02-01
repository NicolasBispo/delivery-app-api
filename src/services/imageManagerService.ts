import { rm } from "fs";
import ServerLogService from "./serverLogService";

export default class ImageManagerService {
  async deleteImageByPath(imagePath: string) {
    rm(imagePath, (error) => {
      if (error) {
        console.log("Aconteceu um erro ao deletar uma imagem");
        console.log("Caminho da imagem a ser deletada", imagePath);
        console.log("#############ERROR############");
        console.error(error);
        console.log("#############ERROR############");
        ServerLogService.registerAction(
          "apagar imagem",
          `Erro ao apagar imagem no caminho => ${imagePath}`
        );
      }
    });
    return;
  }
}
