import { Router } from "express";
import authService from "../service/authService/authService.js";

const router = Router();

router.get("/api/users", (req, res) => {
  res.send({ data: "Login" });
});

router.post("/api/users", (req, res) => {
  const { email, password, confirmedPassword } = req.body;

  const response = authService.createUser(email, password, confirmedPassword);

  if (response === "Password and confirm password do not match") {
    return res.status(400).send({ data: response });
  }

  return res.send({ data: response });
});

export default router;
