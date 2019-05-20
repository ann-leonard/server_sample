// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require('path')


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000; //THIS IS WHAT YOU NEED TO CHANGE! GOOGLE IT IDK SORRY

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});


// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
