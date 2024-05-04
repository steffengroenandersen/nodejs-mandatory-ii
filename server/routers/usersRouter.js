import userRepository from "../repository/userRepository/userRepository.js";
import authService from "../service/authService/authService.js";
import { adminAuth } from "./authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/api/users", adminAuth, async (req, res) => {
  const users = await userRepository.getAllUsers();

  res.send({ data: users });
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
