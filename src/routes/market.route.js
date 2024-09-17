import { Router } from "express";
import { getExchageData } from "../controllers/market.controller.js";

const router = Router();

router.route("/exchange-data").get(getExchageData);

export default router;
