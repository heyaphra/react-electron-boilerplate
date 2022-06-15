/* Core modules / environment config */

import dotenv from "dotenv";

dotenv.config("../.env");

import path from "path";
import http from "http";

/* Express */
import express from "express";
import { router } from "./router.js";

/* Express middleware */
import cors from "cors";

/* Utils */
// const tunnel = require("../internals/utils/tunnel");
// import Tunnel from "../internals/utils/tunnel/tunnel.js";
// const tunnel = new Tunnel();

/* Server config */
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
  /* Server is listening! */
  console.log(`Listening at ${PORT}`);
  // await tunnel.connect();
  router(app);
});

// /* Middleware config */
app.use(express.json({ type: "*/*" }));
app.use(express.static(path.resolve(import.meta.url, "../build")));
app.use(cors());
