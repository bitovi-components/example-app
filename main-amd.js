define(["can", "jquery", "can/view/stache","bit-tabs"], function(can, $){
	var template = can.stache("<h2>bit-tabs</h2><bit-tabs>"+
		"<can-panel title='CanJS'>CanJS provides the MV*</can-panel>"+
		"<can-panel title='StealJS'>Steal provides the build</can-panel>"+
	"</bit-tabs>");

	$("body").append(template());
});
