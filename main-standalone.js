var template = can.stache("<h2>bit-tabs</h2><bit-tabs><can-panel title='CanJS'>CanJS provides the MV*</can-panel><can-panel title='StealJS'>StealJS provides the infrastructure.</can-panel></bit-tabs>");

$("body").append(template());
