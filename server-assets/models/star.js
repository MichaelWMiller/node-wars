var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schemaName = "Star";

var schema = new Schema({
    name: { type: String, required: true },
    created: { type: Date, required: true, default: Date.now() },
    size: { type: String, enum["Dwarf", "Normal", "Giant"] },
    color: { type: String }
});

module.exports = mongoose.model(schemaName, schema);