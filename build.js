var browserify = require("browserify");
var fs = require("fs");

var b = browserify();
b.add(__dirname + "/main-browserify.js");
b.bundle().pipe(fs.createWriteStream(__dirname + "/out.js", "utf8"));
