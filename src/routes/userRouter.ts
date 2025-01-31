import UserController from "@/controllers/userControlelr";
import { validateBody } from "@/middlewares/errorValidation";
import { createUserSchema, updateUserSchema } from "@/schema/userSchemas";
import { Router } from "express";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/", userController.index.bind(userController));
userRouter.get("/:id", userController.show.bind(userController));
userRouter.post(
  "/",
  validateBody(createUserSchema),
  userController.create.bind(userController)
);
userRouter.patch(
  "/:id",
  validateBody(updateUserSchema),
  userController.update.bind(userController)
);
userRouter.delete("/:id", userController.destroy.bind(userController));

export default userRouter
