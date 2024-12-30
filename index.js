const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const socialMedias = [
  {
    name: "Discord",
    url: "https://discord.com/nurulislamrimon",
  },
  {
    name: "Github",
    url: "https://github.com/nurulislamrimon",
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/+8801715494846",
  },
  {
    name: "Linkedin",
    url: "https://linkdin.com/nurulislamrimon",
  },
  {
    name: "Gmail",
    url: "mailto:nurulislamrimon@gmail.com",
  },
];

app.get("/admin-greetings", (req, res) => {
  res.render("admin-greetings", {
    socialMedias,
  });
});
app.get("/customer-greetings", (req, res) => {
  res.render("customer-greetings", {
    socialMedias,
  });
});
app.get("/password-reset-completed", (req, res) => {
  res.render("password-reset-completed", {
    socialMedias,
  });
});
app.get("/password-reset-otp", (req, res) => {
  res.render("password-reset-otp", {
    socialMedias,
  });
});
app.get("/sign-up-verification", (req, res) => {
  res.render("sign-up-verification", {
    socialMedias,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
