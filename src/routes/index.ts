import { Router } from "express";
import adRouter from "./adRouter";
import orderRouter from "./orderRouter";
import orderItemRouter from "./orderItemRouter";
import userRouter from "./userRouter";
import categoryRouter from "./categoryRouter";

const appRouter = Router();

appRouter.use("/ads", adRouter);
appRouter.use("/orders", orderRouter),
  appRouter.use("/orderItems", orderItemRouter),
  appRouter.use("/users", userRouter);
appRouter.use("/categories", categoryRouter);

export default appRouter;
