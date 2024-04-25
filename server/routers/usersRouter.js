import { Router } from "express";

const router = Router();

router.get("/api/users", (req, res) => {
  res.send({ data: "Login" });
});

router.post("/api/users", (req, res) => {
  const { email, password, confirmedPassword } = req.body;

  const signupRequest = {
    email: email,
    password: password,
    confirmedPassword: confirmedPassword,
  }

  console.log(signupRequest);

  

  res.send({ data: signupRequest });
});

export default router;
