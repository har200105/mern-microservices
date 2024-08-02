import express from "express";
import { asyncWrapper } from "../utils";
import { StripeGW } from "../helpers/stripe";
import { createMessageBroker } from "../helpers/brokerFactory";
import { PaymentController } from "../controllers/payment";

const router = express.Router();

// todo: move this instanciation to a Factory
const paymentGW = new StripeGW();
const broker = createMessageBroker();

const paymentController = new PaymentController(paymentGW, broker);

router.post("/webhook", asyncWrapper(paymentController.handleWebhook));

export default router;
