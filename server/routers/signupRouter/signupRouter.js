import { Router } from "express";
import authService from "../../service/AuthService/AuthService.js";

const router = Router();

router.post("/api/signup", (req, res) => {
  // TODO: Add errorhandling
  const { email, password } = req.body;

  const response = authService.createUser(email, password);

  // send response to user

  res.send({ data: response });
});

export default router;
