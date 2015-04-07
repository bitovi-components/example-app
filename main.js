require("can-tabs");
require("can/view/stache/stache");
var can = require("can");
var $ = require("jquery");

var template = can.stache("<h2>can-tabs</h2><can-tabs><bit-panel title='CanJS'>CanJS provides the MV*</bit-panel><bit-panel title='StealJS'>StealJS provides the infrastructure.</bit-panel></can-tabs>")

$("body").append(template());
