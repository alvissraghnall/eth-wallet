const express = require("express");
const router = require("./router");
const app = express();
const PORT = process.env.PORT || 8798;

app.use(express.static(__dirname + '../public'));

app.set("view engine", "ejs"); 

app.use(router);

app.listen(PORT, () => {
    console.log("ETH Wallet Server running on port " + PORT);
})