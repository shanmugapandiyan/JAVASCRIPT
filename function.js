//function

function add(a,b){
    return a+b;
}
console.log(add(10,20));

function sum(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total = total +arguments[i];
        
    }
    return total;
}
console.log(sum(12,12,12));



function tot(...rms){
    let tos=0;
    for(let i=0;i<rms.length;i++){
        tos= tos +rms[i];
        
    }
    return tos;
    
}
console.log(tot(12,12,24));


//function as arguments

let arial=function(a,b){
    return(a**2+b**2);
}

console.log(arial(2,4));


//function with map function


let numbers=[10,20,30,40,50];
let num=numbers.map(n=>n*2);
console.log(num);

//  funcion with filter funtion


let word=["red","blue","violate","green"];
console.log(word)
let wc=word.filter(w=>w.length>3);
console.log(wc);

//function with reduce


let totm=numbers.reduce((sum,numbe)=>sum+numbe);
console.log("tot",totm);

//function with map function


var k=["122","45"];
var m=k.filter(s=>s.length>2);
console.log(m)

//simple closure

let c=()=>{
    count=0;
    return ()=>{
        count++;
        return count;
    }
}

let counter=c();
console.log(counter());
console.log(counter());

//callback funtion 

function red(){
    console.log("the name is red");
}
function blue(t){
  t();
}

blue(red);


//setTimeout function


setTimeout(function(){
    console.log("pandiyan")
},3000)


//setIntervel Function
/*
setInterval(function skk(){
    console.log("sp")
},1000)*/


//forEach Funtion

let sss=[1,2,3,4,5];
sss.forEach(function(num){
    console.log(num)
});
