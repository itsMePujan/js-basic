// ask user for name and time (number)

const name = prompt("your name?");
const time = prompt("time - ");

if(time >= 5  && time <=12 ){
    alert(`Good Morning ${name}`);
}else if(time >= 12  && time <=3 ){
    alert(`Afternoon ${name}`);
}else{
    alert(`evening ${name}`);
}

