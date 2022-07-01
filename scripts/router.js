
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/receive", (req, res) => {
    res.render("pages/receive");
});

router.get("/send", (req, res) => {
    res.render("pages/send");
});

router.get("/buy", (req, res) => {
    res.render("pages/buy");
});

module.exports = router;

