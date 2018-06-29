const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const routes = require("./controllers/articleRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Use static folder to serve pages
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

// Use body parser to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars for templates
app.engine("html", handlebars({ defaultLayout: "main" }));
app.set("view engine", "html");