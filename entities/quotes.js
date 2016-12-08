/// <reference path="../typings/index.d.ts" />
var mongoose = require("mongoose");
;
var quoteSchema = new mongoose.Schema({
    text: String,
    author: String
});
var Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;
//# sourceMappingURL=quotes.js.map