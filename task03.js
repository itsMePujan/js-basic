//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

const pNum = prompt("Enter the number:?")

if(pNum%3 && pNum%7){
    console.log(`${pNum} is not a multiple of either 3 or 7`)
}else{
    console.log('is multiply by 3 or 7')
}// 