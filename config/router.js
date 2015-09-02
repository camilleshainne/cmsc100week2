var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports= function(router){ // if we want to export fxns on other modules
	router.route('/students') // route handler
		.get(student.find)   // callback fxns
		.post(student.insert);
	
	router.route('/students/:id')
		.get(student.findOne)
		.put(student.update)
		.delete(student.remove);
	
	router.route('/teachers')
		.get(teacher.find)
		.post(teacher.add);
	
	return router;
};