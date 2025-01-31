import AdController from "@/controllers/adController";
import { validateBody } from "@/middlewares/errorValidation";
import { createAdSchema, updateAdSchema } from "@/schema/adSchemas";
import { Router } from "express";

const adRouter = Router();

const adController = new AdController();

adRouter.get("/", adController.index.bind(adController));
adRouter.get("/:id", adController.show.bind(adController));
adRouter.post(
  "/",
  validateBody(createAdSchema),
  adController.create.bind(adController)
);
adRouter.patch(
  "/:id",
  validateBody(updateAdSchema),
  adController.update.bind(adController)
);
adRouter.delete("/:id", adController.destroy.bind(adController));


export default adRouter