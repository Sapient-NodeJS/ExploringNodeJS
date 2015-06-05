var express = require("express");
var path = require("path");
var mainController = require("../assets/controllers/main");
var nodeExampleController = require("../assets/controllers/node_examples");

module.exports = function(app) {

	app.get("/", mainController.home);
	
	app.get("/nodeExample/example1", nodeExampleController.example1);
	

}