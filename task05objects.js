//object (Real Life Objects  , methods)

//CRUD(Create , Read , Update , Delete )


const person = {
    name: "Pujan Poudel",
    birthDate: 2057,
   // h : 2222,
    isMale: true,
    age: function (){
         return 2080 - this.birthDate ;
    },
    calAge: () => {
        // console.log(person.birthDate);
        return 2090 - person.birthDate;
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

console.log(person.calAge());


const car = {
    brand: "Toyata",
    model: "Aygo",
    year : 2024,
    engin : "60.9 cu-in",
    horsePower : 71,
    torqueNm: 243,
    body:{
        lengthCm : 370.0,
        widthCm:370.0,
        heightCm:152.5,
        wheelbaseCm:243.0
    },
    breaks:{
        fontBreaks: "Disc Brakes",
        cooling: "Ventilated",
        rearBreaks:"Drum Brakes"
    }
}

console.log({car});