define(["can", "jquery", "can/view/stache","can-tabs"], function(can, $){
	var template = can.stache("<h2>can-tabs</h2><can-tabs>"+
		"<can-panel title='CanJS'>CanJS provides the MV*</can-panel>"+
		"<can-panel title='StealJS'>Steal provides the build</can-panel>"+
	"</can-tabs>");

	$("body").append(template());
});