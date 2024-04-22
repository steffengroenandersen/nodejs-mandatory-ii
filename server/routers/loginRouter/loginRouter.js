import { Router } from "express";

const router = Router();

router.get("/api/login", (req, res) => {
  res.send({ data: "Login" });
});

export default router;
