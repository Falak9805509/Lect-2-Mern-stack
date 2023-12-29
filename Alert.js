
// This code is for Alert 
//alert("Hi im Falak")
//let name2 = "Falak";
//let name1 = "Falak";

//to output display on screen
//document.write(name1);
//console log is also for output but main disffrenec is show in console web broweser 
//console.log()

// three types of variables 1) let 2) const 3) var

/*let name3 = "Falakniaz"
let bal = 450;

document.write("Name", name3);

document.write(bal);*/

/*let bal = 400;

bal = bal - 200 ;

document.write("Yours balance is :", "Type of variable", "=", typeof bal, " ,", "value is ",bal);
*/
//Maths Expression in javascript


//let add = 10000+5000-10000+1000000
//document.write(add)


/*let n1 = prompt("Enter num 1");
let n2 = prompt("Enter yiour second num");

n1 = Number(n1)
n2 = Number(n2)

let n3 = n1 + n2;
alert("Sum is"+ n3)
*/



//uniaey operator ++ --

/*let num1 = 5;
let num3 = num1
let num2 = num1++;

//console.log("num1",num3);
console.log("num2",num2);*/

//let username = prompt("Enter Your name Please");
//alert ("How are You" + "  " + username)

//console.log("abc" + (2 + 4));

// If statement in javascript 


/*let celiuse = prompt("Enter celius in degree");

celiuse = Number(celiuse)

let condition = celiuse > 30 

console.log(condition)

if (condition){

    console.log("Bohat garmi hai yar")
}

else{

    console.log("Pyara mosam hai jani")
}*/


/*let x = "Falak"
let z = "Falak"

if(x===z){

    console.log("Both are same types ")
}
else{
    console.log("both are different data type")
}*/

/*let temp = prompt("Enter temprature")
temp = Number(temp);

if(temp > 30 && temp < 35){
    console.log("Garmi hai")

}
else if(temp > 35 && temp < 40){
console.log("Bohat garmi hai")
}
else{
    console.log("Garmi nhi hai")
}*/


function BMICAL(){

// Getting value from html input tags
let Feet = document.getElementById("Feet").value;
let inch = document.querySelector("#inch").value;
let weight = document.querySelector("#weight").value

//Parsing value to integer
Feet = parseInt(Feet);
inch = parseInt(inch);

//height in inches conversion formula for bmi calculator

inch = (Feet * 12 )+ inch ;

// conversion formula of height in Meter

let meter = (inch * 2.54) / 100 ;

let metersqr = meter * meter;

let bmibody = weight/metersqr;

let idealweight = 22 * metersqr;

let title = "You are";

if(bmibody>30){

title += `. obese you need to loose weight of ${weight - idealweight.toFixed(2)} kg`

}else if (bmibody>25){

title += `. overweight you need to loose weight of ${weight-idealweight} kg`
}

else if (bmibody>18){

    title += '. healthy you dont need to loose weight or gain'
    }
else if (bmibody<18.5){
    title+=`. underweight you need to gain ${idealweight.toFixed(2)-weight} kg`
}
//console.log("BMI",bmibody)
//console.log("title",title)
document.write("BMI" , bmibody);
document.write("title",title);

}












