console.log("hello world");

//Variables (var , let , const) //  camelCase Letter

var broadwayTeacher = "Pujan Poudel";  //es5

broadwayTeacher = "Pawan";


console.log(broadwayTeacher);


// let , const (ES6)
let mernTeacher = "raktim";

console.log(mernTeacher);

//const 
const mernSir = "raktim";
//mernSir = "pujan"; cant change
console.log(mernSir);



// create 4 variable useing const keyword for table, fan , chair , pen
 const table = "Computer Table";
 const fan = "Table Fan";
 const chari = "Computer chair";
 const pen = "Red Pen";



 //  Interaction ,
 // Promt , alert , confirm 

 //const idAdult = confirm("are you adult ?");



 /*const name = prompt("whats your name");
 console.log(name);

*/

//alert("hello world");

// statement (switch // if else)


const gender = prompt("whats your gender? m/f");

if(gender == "m"){
    console.log(" if/else , you are male");
}else{
    console.log("if/else , you are female");
}

// switch case 

switch(gender){
    case "m":
        console.log(" switch , you are male");
        break;
    case "f":
        console.log("switch , you are female");
        break;
    default :
    console.log("switch , i don't know what you are");
}