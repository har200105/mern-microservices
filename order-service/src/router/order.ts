import express from "express";
import { asyncWrapper } from "../utils";
import { StripeGW } from "../helpers/stripe";
import { createMessageBroker } from "../helpers/brokerFactory";
import { OrderController } from "../controllers/order";
import authenticate from "../middleware/authenticate";
const router = express.Router();

const paymentGw = new StripeGW();
const broker = createMessageBroker();

const orderController = new OrderController(paymentGw, broker);

router.post("/", authenticate, asyncWrapper(orderController.create));
router.get("/", authenticate, asyncWrapper(orderController.getAll));
router.get("/mine", authenticate, asyncWrapper(orderController.getMine));
router.get("/:orderId", authenticate, asyncWrapper(orderController.getSingle));
router.patch(
  "/change-status/:orderId",
  authenticate,
  asyncWrapper(orderController.changeStatus),
);

export default router;
