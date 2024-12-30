const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/admin-greetings", (req, res) => {
  res.render("admin-greetings");
});
app.get("/customer-greetings", (req, res) => {
  res.render("customer-greetings");
});
app.get("/password-reset-completed", (req, res) => {
  res.render("password-reset-completed");
});
app.get("/password-reset-otp", (req, res) => {
  res.render("password-reset-otp");
});
app.get("/sign-up-verification", (req, res) => {
  res.render("sign-up-verification");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
