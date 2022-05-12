/**
 * @file Bootstrap express.js server
 * @author Fikri Rahmat Nurhidayat
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");

const publicDir = path.join(__dirname, "../public");

const app = express();

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());

/** Set Public Directory */
app.use(express.static(publicDir));

/** Install Router */
app.use(router);

module.exports = app;
