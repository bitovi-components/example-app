var template = can.stache("<h2>bit-tabs</h2><bit-tabs><bit-panel title='CanJS'>CanJS provides the MV*</bit-panel><bit-panel title='StealJS'>StealJS provides the infrastructure.</bit-panel></bit-tabs>");

$("body").append(template());
