var os = require('os')
var fs = require('fs')

console.log("server is running")

let add = (a,b) => { return a+b; }

let result = add(5,7);
console.log("result is:",result );

var user = os.userInfo();
console.log(user)

fs.appendFile('greetings text', 'Hi '+user.username+' !\n',()=>{
  console.log("file is appended successfully")
})

