var express = require('express');
var app = express();

//using middlewares
app.use(express.static(path.join(path.resolve(), "public"))); // Static files
app.use(express.urlencoded({extended: true})); // Body parser

app.set("viewengine", "ejs");

app.get("/", (req, res) => {
    res.send("index");
});

app.listen(5000, () => {
    console.log("Server is running");
})
