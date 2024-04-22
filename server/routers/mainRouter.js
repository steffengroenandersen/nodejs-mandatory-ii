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
import authRouter from "./authRouter/authRouter.js";
router.use(authRouter);

/* 

  CLIENT ROUTES

*/

router.get("/", (req, res) => {
  res.send({ data: "Home" });
});

export default router;
