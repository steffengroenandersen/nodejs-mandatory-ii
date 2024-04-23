import express from "express";
import { Router } from "express";
const router = Router();

/* 

  MIDDLEWARE

*/
router.use(express.json());

import path from "path";
router.use(express.static(path.resolve("../../client/dist")));


import session from "./middleware/session/session.js"
router.use(session);

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
