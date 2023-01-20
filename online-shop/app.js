const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const adminRouts = require("./routes/admin");
const shopRouts = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin", adminRouts); 
app.use(shopRouts);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(3000);

