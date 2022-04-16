const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index", {title: "User list"});
});

// Default
app.use((req, res) => {
  res.send("Mau kemana bos?");
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});