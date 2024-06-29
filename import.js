var _ = require('loadash');

let notes = require('./note.js')

let age = notes.age;
console.log(age);
var result = notes.add(age+19,10)
console.log("result is",result)


var data = ["person", "person", 1,1,2,2]

var filter = _.uniq(data)
console.log(filter)