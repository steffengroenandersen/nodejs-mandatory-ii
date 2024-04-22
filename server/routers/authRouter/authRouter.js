import { Router } from "express";
const router = Router();

router.get("/signup", (req, res) => {
  res.send({data: "Signup"});
});

router.get("/login", (req, res) => {
  res.send({data: "Login"});
});

export default router;