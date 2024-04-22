import { Router } from "express";
const router = Router();

router.get("/signup", (req, res) => {
  res.send({data: "Signup"});
});

export default router;