const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const logoUrl = "/mail_assets/LogoElite.png";

const socialMedias = [
  {
    icon: "https://malepower-boost.com/settings/discordicon1735572567389.png",
    link: "facebook.com",
  },
  {
    icon: "https://malepower-boost.com/settings/linkedinicon1735572567389.png",
    link: "legbook.com",
  },
];

app.get("/admin-greetings", (req, res) => {
  res.render("admin-greetings", {
    socialMedias,
    logoUrl,
    userRole: "Admin",
    shopName: "Elite Commerce",
    shopUrl: "https://dashboard.elitecommerce.app",
    userEmail: "nurulislamrimon@gmail.com",
    userPassword: "123456",
  });
});
app.get("/customer-greetings", (req, res) => {
  res.render("customer-greetings", {
    socialMedias,
    logoUrl,
    shopName: "Elite Commerce",
    shopUrl: "https://dashboard.elitecommerce.app",
  });
});
app.get("/password-reset-completed", (req, res) => {
  res.render("password-reset-completed", {
    socialMedias,
    logoUrl,
    accessUrl: "https://dashboard.elitecommerce.app",
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
