// ENTRY POINT
// var currentTime = require('./modules/time');
// var pickedStudent = require('./modules/chooseStudent');
// var gradingData = require('./modules/pickGrade');
// var gradedModule = require('./modules/saeModule');

// console.log('The current time is ' + currentTime + ' and ' + pickedStudent + ' got ' + gradingData.getTheWord() + ' ' + gradingData.gradeForStudent + ' on the test in ' + gradedModule);

var loop = require('./modules/loop');
var fizzbuzz = require('./modules/fizzbuzz');
var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('Hello World!');
})

app.get('/student', (req, res) =>{
    res.send('Hello, again.')
})

app.get('/loop', (req, res) =>{
    res.send(loop);
})

app.get('/fizzbuzz', (req, res) =>{
    res.send(fizzbuzz);
})

app.listen(3000, function(){
    console.log("Server is running.")
})