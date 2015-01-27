require("can-tabs");
require("canjs/view/stache/stache");
var can = require("canjs");
var $ = require("jquery");

var template = can.stache("<h2>can-tabs</h2><can-tabs><can-panel title='CanJS'>CanJS provides the MV*</can-panel><can-panel title='StealJS'>StealJS provides the infrastructure.</can-panel></can-tabs>")

$("body").append(template());
