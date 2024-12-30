const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const logoUrl = "/mail_assets/assets/LogoElite.png";

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
    logoUrl,
  });
});
app.get("/customer-greetings", (req, res) => {
  res.render("customer-greetings", {
    socialMedias,
    logoUrl,
  });
});
app.get("/password-reset-completed", (req, res) => {
  res.render("password-reset-completed", {
    socialMedias,
    logoUrl,
  });
});
app.get("/password-reset-otp", (req, res) => {
  res.render("password-reset-otp", {
    socialMedias,
    logoUrl,
    otp: [1, 2, 4, 5],
  });
});
app.get("/sign-up-verification", (req, res) => {
  res.render("sign-up-verification", {
    socialMedias,
    logoUrl,
    otp: [1, 2, 4, 5],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
