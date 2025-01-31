import OrderItemController from "@/controllers/orderItemController";
import { validateBody } from "@/middlewares/errorValidation";
import {
  createOrderItemSchema,
  updateOrderItemSchema,
} from "@/schema/orderItemsSchema";
import { Router } from "express";

const orderItemRouter = Router();
const orderItemController = new OrderItemController();

orderItemRouter.get("/", orderItemController.index.bind(orderItemController));
orderItemRouter.get("/:id", orderItemController.show.bind(orderItemController));
orderItemRouter.post(
  "/",
  validateBody(createOrderItemSchema),
  orderItemController.create.bind(orderItemController)
);
orderItemRouter.patch(
  "/:id",
  validateBody(updateOrderItemSchema),
  orderItemController.update.bind(orderItemController)
);
orderItemRouter.delete(
  "/:id",
  orderItemController.destroy.bind(orderItemController)
);

export default orderItemRouter;
