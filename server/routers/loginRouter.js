import { Router } from "express";
import authService from "../service/authService/authService.js";

const router = Router();

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const status = await authService.loginUser(email, password);

  if (status.isSame) {
    req.session.user = { email: status.email, role: status.role };

    res.send({ data: { email: status.email, role: status.role } });
  } else {
    res.send({ data: "Not correct password" });
  }
});

export default router;
