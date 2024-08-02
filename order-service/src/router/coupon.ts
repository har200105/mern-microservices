import express from "express";
import { asyncWrapper } from "../utils";
import { CouponController } from "../controllers/coupon";
import authenticate from "../middleware/authenticate";

const router = express.Router();
const couponController = new CouponController();
router.post("/", authenticate, asyncWrapper(couponController.create));
router.post("/verify", authenticate, asyncWrapper(couponController.verify));

export default router;
