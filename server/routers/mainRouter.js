import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send({ data: "Home" });
});

import authRouter from "./authRouter/authRouter.js";
router.use(authRouter);

export default router;
