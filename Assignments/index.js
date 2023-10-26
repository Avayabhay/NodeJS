const express = require("express");
const app = express();
const path = require("path");

const adminRouter = require("./routes/adminRoutes");
const sideRouter = require("./routes/sideRoutes");
app.use(express.static(path.join(__dirname, "public")));
app.use(adminRouter);
app.use("/side", sideRouter);
app.get("/", (req, res) =>
  res.send("HI, Server has been successfully started")
);

app.use((req, res) => res.send("Oops! site doesnot Exist"));

app.listen(4000, () => console.log("Server started at localhost:3000"));
