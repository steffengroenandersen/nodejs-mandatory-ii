import { Router } from "express";
import authService from "../service/authService/authService.js";
import { adminAuth } from "./authMiddleware.js";

const router = Router();

router.get("/api/users", adminAuth, (req, res) => {
  res.send({ data: "user data" });
});

router.post("/api/users", (req, res) => {
  const { email, password, confirmedPassword } = req.body;

  const response = authService.createUser(email, password, confirmedPassword);

  if (response === "Password and confirm password do not match") {
    return res.status(400).send({ data: response });
  }

  req.session.userEmail = { email };
  return res.send({ data: response });
});

export default router;
