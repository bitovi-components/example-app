define(["can", "jquery", "can/view/stache","bit-tabs"], function(can, $){
	var template = can.stache("<h2>bit-tabs</h2><bit-tabs>"+
		"<bit-panel title='CanJS'>CanJS provides the MV*</bit-panel>"+
		"<bit-panel title='StealJS'>Steal provides the build</bit-panel>"+
	"</bit-tabs>");

	$("body").append(template());
});
