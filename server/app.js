import express from "express";
const app = express();


/* 

  Routers

*/

import mainRouter from "./routers/mainRouter.js";
app.use(mainRouter);

const PORT = 8080;
app.listen(PORT, () => console.log("App is running on PORT: ", PORT));