const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const homeRoutes = require('./routes/home-routes');

const app = express();
app.use(expressLayouts);
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(homeRoutes);


app.listen(3000,() => console.log('App is Listening on http://localhost:3000'));