const express = require("express");
const PORT = 8000;
const app = express();
const expressLayouts = require("express-ejs-layouts");

const methodOverride = require("method-override");

const router = require("./routes/app");

const session = require("express-session");
const cookieParse = require("cookie-parser");
const flash = require("connect-flash");

// config flash msg
app.use(cookieParse("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
