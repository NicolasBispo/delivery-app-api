import OrderController from "@/controllers/orderController";
import { validateBody } from "@/middlewares/errorValidation";
import { updateOrderItemSchema } from "@/schema/orderItemsSchema";
import { createOrderSchema } from "@/schema/orderSchemas";
import { Router } from "express";

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get("/", orderController.index.bind(orderController));
orderRouter.get("/:id", orderController.show.bind(orderController));
orderRouter.post(
  "/",
  validateBody(createOrderSchema),
  orderController.create.bind(orderController)
);
orderRouter.patch(
  "/:id",
  validateBody(updateOrderItemSchema),
  orderController.update.bind(orderController)
);
orderRouter.delete("/:id", orderController.destroy.bind(orderController));

export default orderRouter;
