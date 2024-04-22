import express from "express";
import { Router } from "express";
const router = Router();

/* 

  MIDDLEWARE

*/
router.use(express.json());

/* 

  API ROUTES(?)

*/

import signupRouter from "./signupRouter/signupRouter.js"
router.use(signupRouter);

import loginRouter from "./loginRouter/loginRouter.js"
router.use(loginRouter);
/* 

  CLIENT ROUTES

*/

router.get("/", (req, res) => {
  res.send({ data: "Home" });
});

export default router;
