var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/winebeats_app");

mongoose.set("debug",true)

module.exports.Wine = require("./wine");
module.exports.Varietal = require("./varietal");
module.exports.closeConnection = function() {
	mongoose.connection.close();
};

