//object (Real Life Objects , propertise , methods)

//CRUD(Create , Read , Update , Delete )


const person = {
    name: "Pujan Poudel",
    birthDate: 2057,
   // h : 2222,
    isMale: true,
    age: function (){
         return 2080 - this.birthDate ;
    },
    calAge: ()=>{
    return 2090 - this.birthDate;
    },
    height:5.6,
    facialDetail :{
        hair:"black",
        eyeColor:"brown",  
    }

}

console.log({person});
//property
console.log(person.name);
//method
console.log(person.age());
//update
person.name = "pujan Poudel";
console.log(person.name);
//delete
delete person.name;
console.log({person});

//

console.log(person.birthDate());