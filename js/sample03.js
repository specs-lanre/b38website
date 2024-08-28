//EXTERNAL JAVASCRIPT

console.log("Display information in browser console")
var ref=document.getElementById('demo1')
var ref2=document.getElementById('demo2')

var value1="234"
var value2=234
var value3=400
var value4=10
//comparison operators

var result = value2==value2
//console.log(result)
var result = value2==value4

//console.log(result)
//value equality
var result = value2==value1
//console.log(result)
//type equality
var result = value2===value1
//console.log(result)

//data types or value type

//the value types or categories of data 
//that you can assign to a variable
//strings or text data type
var val10="the quick brown fox"
var val11 ="jumped over the lazy white dogs"
//numbers or digits data type
var val12=20045

//greater than equlity comparison
var result = value2>value4
//console.log(result)

//less than equlity comparison
var result = value2<value4
//console.log(value2 ,"<",value2,result)

//less than OR equals equlity comparison
var result = value2<=value3
//console.log(value2 ,"<=",value3,result)


//greater than OR equal equlity comparison
var result = value2>=value3
//console.log(value2 ,">=",value3,result)


var result = (value2<value3) && (value2==value3)
//console.log(result)

var result = (value2<value3) ||(value2==value3)
//console.log(result)


//ASSIGNMENT OPERATORS
//console.log(value2)
var value2=value2+10
//console.log(value2)
//console.log(r)
var r=20
r+=5
//console.log(r)

console.log(r)
var r=20
r*=5
console.log(r)


//TERNARY OPERAY

var tee = 200<89?console.log("YES"):console.log("NO")

//the above can alos be done using IF and else
	if(200<89){
		console.log("YES")
	}
	else{
	console.log("NO")	
	}