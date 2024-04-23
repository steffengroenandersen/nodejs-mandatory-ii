import { Router } from "express";
const router = Router();

import session from "express-session";
router.use(
  session({
    secret: "hello-dog",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

export default router;