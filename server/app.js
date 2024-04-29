import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import path from "path";
app.use(express.static(path.resolve("../client/dist")));

import livereload from "livereload";
import connectLivereload from "connect-livereload";

const liveReloadServer = livereload.createServer();
liveReloadServer.watch("../client/dist");
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 500);
});

app.use(connectLivereload());

import session from "express-session";
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

import loginRouter from "./routers/loginRouter.js";
app.use(loginRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

const PORT = 8080;
app.listen(PORT, () => console.log("App is running on PORT: ", PORT));
