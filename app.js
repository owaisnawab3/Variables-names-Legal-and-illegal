let keywords = "keywords"
let number = "number"
let dollar = "$"
let sensitive = "sensitive"
let $name = "_." 

document.write("<h1>Rules for naming JS variables</h1>");
document.write("a) Variable names can only contain "+ number + ", "+dollar+ " and _. For example : $my_1stVariable<br>");
document.write("b) Variables must begin with a letter, $ "+$name+" sign. For example : $name, _name, or name<br>");
document.write("c) Variable names are case-" + sensitive +".<br/>");
document.write("d) Variable names should not be JavaScript " + keywords+".");

// Declare 3 variables in one statement

let var1, var2, var3;

//Legal Variable Names
let legalVariable1 = "number";
let legalVariable2 = "_name";
let legalVariable3 = "$price";
let legalVariable4 = "myVar";
let legalVariable5 = "sensitive";

//Display Legal Variable:

document.write("<h2>5 Legal Variable Names:</h2>")
document.write(legalVariable1 + "<br/>")
document.write(legalVariable2 + "<br/>")
document.write(legalVariable3 + "<br/>")
document.write(legalVariable4 + "<br/>")
document.write(legalVariable5 + "<br/>")

//Illegal Variable Names
let illegalVariable1 = "illegalvariable";
let illegalVariable2 = "illegal-variable";
let illegalVariable3 = "@illegalvariable";
let illegalVariable4 = "function";
let illegalVariable5 = "for";

//Display Variable:

document.write("<h2>5 Illegal Variable Names:</h2>")
document.write(illegalVariable1 + "<br/>")
document.write(illegalVariable2 + "<br/>")
document.write(illegalVariable3 + "<br/>")
document.write(illegalVariable4 + "<br/>")
document.write(illegalVariable5 + "<br/>")

//=================Console Display=================//

console.log("Rules for naming JS variables");
console.log("a) Variable names can only contain "+ number + ","+dollar+ " and _.For example: $my_1stVariable<br>");
console.log("b) Variables must begin with a letter, $ "+$name+" sign. For example: $name, _name, or name<br>");
console.log("c) Variable names are case-" + sensitive +".<br/>");
console.log("d) Variable names should not be JavaScript " + keywords+".");

//==================Legal Variable Console=================//

console.log("5 Legal Variable Names:")
console.log(legalVariable1)
console.log(legalVariable2)
console.log(legalVariable3)
console.log(legalVariable4)
console.log(legalVariable5)

//==============Illegal-Varaible-Console===============//

console.log("5 Illegal Variable Names:")
console.log(illegalVariable1)
console.log(illegalVariable2)
console.log(illegalVariable3)
console.log(illegalVariable4)
console.log(illegalVariable5)

//======================END=========================//