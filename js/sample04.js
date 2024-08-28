//EXTERNAL JAVASCRIPT
//VARIABLES
console.log("Display information in browser console")
var ref=document.getElementById('demo1')
var ref2=document.getElementById('demo2')
//using the var
//variable declaration using var
var value1="234"
var value2=234  
var value3=400
var value4=10
var value2=1024

//using the let
//variable declaration using let
let value20=234
//let value2=1024  //error we cannot redeclare
value20=1024  //okay here we can only reassign another value to it

//variable declaration using let variable scopes 
{
let value20=234  // will work
}

//using constant

const val25=2000  // here we declare a constant
val25=400 //here you cannot reassign
//but you cn use n another scope
{
const val25=45000	
}

let value40
console.log( value40)







