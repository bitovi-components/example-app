var bitTabsTemplate = can.stache("<h2>bit-tabs</h2><bit-tabs>"+
	"<bit-panel title='CanJS'>CanJS provides the MV*</bit-panel>"+
	"<bit-panel title='StealJS'>Steal provides the build</bit-panel>"+
"</bit-tabs>");

$("body").append(bitTabsTemplate());

var bitC3template = can.stache('<h2>bit-c3</h2><bit-c3>' +
    '<bit-c3-data>' +
        '<bit-c3-data-column key="dataSource" value="{dataSource}" />' +
    '</bit-c3-data>' +
'</bit-c3>');

$("body").append(bitC3template());
$("body").viewModel().attr({
    dataSource: new can.List([1, 2, 3])
});
