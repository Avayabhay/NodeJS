const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>');
// });

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});
app.listen(3000);
