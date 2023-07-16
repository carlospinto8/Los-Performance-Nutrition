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

app.get("/creatine", (req, res) => {
    res.render("creatine-product-page");
});

app.get("/endurance", (req, res) => {
    res.render("endurance");
});

app.get("/bcaa", (req, res) => {
    res.render("bcaa-product-page");
});

app.get("/electrolytes", (req, res) => {
    res.render("electrolytes-product-page");
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

app.get("/collagen", (req, res) => {
    res.render("collagen-product-page");
});

app.get("/health", (req, res) => {
    res.render("health");
});

app.get("/greens", (req, res) => {
    res.render("greens-product-page");
});

app.get("/sleep", (req, res) => {
    res.render("sleepaid-product-page");
});

app.get("/multi", (req, res) => {
    res.render("multivit-product-page");
});

app.get("/d3", (req, res) => {
    res.render("d3-product-page");
});

app.get("/fishoil", (req, res) => {
    res.render("fishoil-product-page");
});

app.get("/joints", (req, res) => {
    res.render("joint-support-product-page");
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