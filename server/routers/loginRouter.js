import { Router } from "express";
import authService from "../service/authService/authService.js";

const router = Router();

router.post("/api/login", async (req, res) => {
  console.log("route hit: /api/login");

  const { email, password } = req.body;
  console.log("req.email: " + email + " req.password: " + password);

  const status = await authService.loginUser(email, password);

  if (status.isSame) {
    res.send({ data: { email: status.email, role: status.role } });
  } else {
    res.send({ data: "Not correct password" });
  }

});

export default router;
