const objtoconvert = {
    name : "arslan",
    age : "24"
}
// stringify object to strng
const json = JSON.stringify(objtoconvert)
console.log("type is :",typeof json)
console.log(json)


// parse string to object
const jparse = JSON.parse(json)
console.log("type after :",typeof jparse)
console.log(jparse)


