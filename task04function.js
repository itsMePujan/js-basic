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

//reverse

const reverse = (x) =>{
 let newNum = "";
 const str = String(x);
 for(let i = str.length-1; i>=0;i--){
    newNum += str[i];
 }
    return newNum;
};

const res = (reverse("pujan"));
console.log(res);

//// commaFromatter , example 10000 t0 10,000

const comaFromatter = (x)=>{
  let newValu = "";
  const str = String(x);

}