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
///proper case
const convertToTitleCase=(str) => {
    if (!str) {
        return ""
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }

  console.log(convertToTitleCase("my name is pujan "));

  //vowels in string 

  const checkVowels = (str)=>{
     const len= str.length;
     let count = 0;
     for(let i =0; i < len; i++){
        if(str[i].includes('a') || str[i].includes('e') || str[i].includes('i')|| str[i].includes('o')|| str[i].includes('u')){
         count = count+1;
        }
     }
     console.log(`it count ${count} vowels`);
  }
  console.log(checkVowels("aeiou"));
/// email validate 
const emailCheck = (txt) => {
    let email = txt;
   if(!email.includes('@') || !email.includes('.com') ){
        console.log("email not validate")
   }else{
    console.log("email validate");
   }
}
emailCheck("pujanpoudel@.com");

//convert F to C or C to F
 
const convertTemp = (tem, type= "C")=>{
    if(type==="F"){
        console.log(` Cal ${tem} equels to ${(tem * 9 / 5) + 32} fah`);
    }else{
        console.log(`Fah ${tem} equels to ${(tem-32)* 5/9} cal`);
    }
}

convertTemp("20","C");
//