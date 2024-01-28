//function 
const multi = (tab) =>{
 
    for(let i=1 ; i<=10 ;i++){
         console.log(`${tab} * ${i} = ${tab*i}`);
    }
}

multi(2);


//area of rectangle 

const area = (l,b)=>{

    return l*b;
}

const areaRect = area(5,3);
console.log(areaRect);