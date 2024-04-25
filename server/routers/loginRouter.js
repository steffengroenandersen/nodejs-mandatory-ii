import { Router } from "express";
import authService from "../service/authService/authService.js";

const router = Router();

router.post("/api/login", (req, res) => {
  console.log("route hit: /api/login");

  const { email, password } = req.body;

  authService.loginUser(email, password);

  res.send({data: email});
});


export default router;
