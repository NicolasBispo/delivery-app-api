import CategoryController from "@/controllers/categoryController";
import { validateBody } from "@/middlewares/errorValidation";
import {
  createCategorySchema,
  updateCategorySchema,
} from "@/schema/categorySchema";
import { Router } from "express";

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get("/", categoryController.index.bind(categoryController));
categoryRouter.get("/:id", categoryController.show.bind(categoryController));
categoryRouter.post(
  "/",
  validateBody(createCategorySchema),
  categoryController.create.bind(categoryController)
);
categoryRouter.patch(
  "/:id",
  validateBody(updateCategorySchema),
  categoryController.update.bind(categoryController)
);
categoryRouter.delete(
  "/:id",
  categoryController.destroy.bind(categoryController)
);

export default categoryRouter
