//EXTERNAL JAVASCRIPT
//data types 1
console.log("Display information in browser console")
var ref=document.getElementById('demo1')
var ref2=document.getElementById('demo2')


let val1="1200"
let val2 = "4500"
let greet="Welcome to HOT JS classes"
let value40
console.log( value40)

let value50= null
console.log( value50)
//ref.innerHTML=val1+val2
//ref2.innerHTML=parseInt(val1)+parseInt(val2)
console.log( greet.length)
//ref.innerHTML="<h3>"+greet+"</h3>"
//ref2.innerHTML= greet.length
//get item at a position using the
//charAt() string method
console.log( greet.charAt(3))
console.log( greet.charAt(4))
console.log( greet.charAt(5))
console.log( greet.charAt(6))

//Join two strings together using the concat()
//string method
var string1="Welcome to class" ;
var string2="WebDesign" ;

 var x = string1.concat(string2)
//string seraching methods
//search
let text1="the quick brown fox "
//let res = text1.search("FOX")
text1[2]="u"


function chk(){
let data1=document.getElementById('text1').value
let data2=document.getElementById('text2').value
let res = data1.search(data2)
if(res != -1)
{
ref.innerHTML= res	
ref2.innerHTML= "Item was  found"	
}
else{
	ref.innerHTML= res
ref2.innerHTML="Item was NOT  found"
}

}



let text2="the quick brown fox jumped over "
let res = text1.indexOf("green")
//console.log("**",res)

 text2="the quick brown fox jumped over the lazy"
 res = text1.includes("green")
//console.log("**",res)


let tosearch ="the quick brown fox jumped over the lazy"
let tofind =  /FOX/
res = tofind.test(tosearch)
console.log("****",res)

tofind =  /FOX/i
res = tofind.test(tosearch)
console.log("****",res)