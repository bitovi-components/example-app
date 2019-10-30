var QUnit = require("steal-qunit");
var F = require("funcunit");
var can = require("can");
var $ = require("jquery");

require("bit-tabs");
require("can/view/stache/stache");

F.attach(QUnit);

QUnit.module("bit-tabs", {
  beforeEach: function(assert) {
    var template = can.stache("<h2>can-tabs</h2><bit-tabs><bit-panel title='CanJS'>CanJS provides the MV*</bit-panel><bit-panel title='StealJS'>StealJS provides the infrastructure.</bit-panel></bit-tabs>")

    $("body").append(template());
  }
});

QUnit.test("Basics", function(assert) {
  F("bit-tabs").exists("There is bit-tabs");
});

QUnit.test("Clicking something", function(assert) {
  F("bit-tabs li:nth(1)").click();
  F("bit-panel:nth(1)").text("StealJS provides the infrastructure.", "Clicking works");
});
