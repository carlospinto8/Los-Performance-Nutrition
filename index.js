import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render("index");
});

// Routes for the squares on the home page below the banner

app.get("/preworkout", (req, res) => {
    res.render("preworkout");
});

app.get("/pre", (req, res) => {
    res.render("preworkout-product-page");
});

app.get("/endurance", (req, res) => {
    res.render("endurance");
});

app.get("/proteins", (req, res) => {
    res.render("protein");
});

app.get("/whey", (req, res) => {
    res.render("wheypro-product-page");
});

app.get("/vegan", (req, res) => {
    res.render("veganpro-product-page");
});

app.get("/health", (req, res) => {
    res.render("health");
});

app.get("/apparel", (req, res) => {
    res.render("apparel");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/faq", (req, res) => {
    res.render("faq");
});

app.get("/prop65", (req, res) => {
    res.render("prop65");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})