// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Expose the public directory to access CSS files
// app.use(express.static(path.join(__dirname, './app/public')));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
   console.log(`FriendFinder is running on port ${ PORT }`);
    });