var presentStudents = require('./students');

var pickedStudent = presentStudents[Math.round(Math.random()*presentStudents.length)];

module.exports = pickedStudent;