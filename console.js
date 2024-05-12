var a=12345;
var b="hai everyone";
var c=[1,2,3,4,5]
var d={name:"pandi",age:19,phone:8610018901}

console.log(a)
console.log(b)
console.log(c)
console.table(d)
console.error("may be error")
console.warn("may be error")
console.time()
for(i=0;i<15;i++){
    console.log(i);
}
console.timeEnd()
//variable types
//1.var 2.let 3.const
/*if (true){
    var a=2245   //var


}
console.log(a)
if (true){
    let ap=2245   //let


}
console.log(ap)
if (true){
    var sp=2245   //const


}
console.log(sp)

*/
//variable redeclearation

/*var a=45;
console.log(a)
var a=25;
console.log(a)*/



/*let a=45;
console.log(a)
let a=25;
console.log(a)

*/
/*
const a=45;
console.log(a)
const a=25;
console.log(a)
*/



//premitive data types  number to others

var num=123;
console.log(num,typeof num)
var n="pandi";
console.log(typeof n)

var np=null;
console.log(typeof np)

var np=true;
console.log(typeof np)

var n;
console.log(typeof np)


//reference data type

const ar=[1,2,3,4,5]
console.log(typeof ar)

const s1=Symbol();
console.log(typeof s1)
const s2=Symbol();
console.log(typeof s2)

console.log(s1==s2)

const nm=new Date;
console.log(nm)


//type conversion


var nq=25;
console.log(nq,typeof nq);
var p=String(nq);
console.log(p,typeof p);


var ns=true;
console.log(ns,typeof ns);
var p=String(ns);
console.log(p,typeof p);


var nn=[1,2,3,4,5];
console.log(nn,typeof nn);
var p=String(nn);
console.log(p,typeof p);
var nd=new Date;
console.log(nd,typeof nd);
var r=String(nd);
console.log(r,typeof r)


//others to numbers


//day-1



//datatypes  
//preimitive data type

var a=10;
console.log(a,typeof a);
var a="10";
console.log(a,typeof a);
var a=false;
console.log(a,typeof a);
var a=null;
console.log(a,typeof a);
var a;
console.log(a,typeof a);
var a=Symbol();
console.log(a,typeof a);



//reference datatype
var a=[10,11,12,13,14,15,16,17];
console.log(a,typeof a);
var a=new Date;
console.log(a,typeof a);
var a={name:"pandi",age:19};
console.log(a,typeof a);

//datatype conversion


var b={Name:"pandi",age:19};
console.log(b,typeof b);
var c=Number(b);
console.log(c,typeof c);

//arithmetic operation
 

var k=40;
var m=20;

console.log(k+m);
console.log(k-m);
console.log(k*m);
console.log(k/m);
console.log(k%m);
console.log(k**3);
console.log(k/3);
console.log(++k);
console.log(--k);


//assignment operator

var x=10;
console.log(x);

x +=5;
console.log(x);
x -=5;
console.log(x);
x *=5;
console.log(x);
x /=5;
console.log(x);
x %=5;
console.log(x);


//comparison operator

var numq=10;
var nam=20;
console.log(numq==nam);
console.log(numq!=nam);
console.log(numq===nam);


//relational operator

console.log(numq<nam);
console.log(numq>nam);
console.log(numq>=nam);
console.log(numq<=nam);

//logical operator

console.log(a<b && b>a);
console.log(a>b || numq!=nam);
console.log(!a);


//condtion or tertory operator



var age=17;
const result=age>18?"eligible for vote":"not eligible";
console.log(result);

function mag(name){
    const res=name?name.name:"No Name"
    console.log("my name is:",res)
};

const ppp={name:"maganth",age:3};
mag(ppp);

//mark average


var smr=55;
var reso=smr>=90?"A Grade":smr>=80?"B Grade":smr>=50?"C Grade":"D Grade";
console.log("Grade :",reso
)

//String Methods

var str="welcome to 30 days of javascript java"
console.log(str.length);//String.length

console.log(str.charAt(11));//chartAt
console.log(str.charCodeAt(3));//it return ascii value
console.log(str.concat(" in tamil"));//it concatinate value
console.log(str.endsWith("javascript"));

console.log(str.includes("30"));//it return boolean if it is present in the string return true
console.log(str.repeat(2));
console.log(str.replace(30,40));
console.log(str.lastIndexOf("of"));
console.log(str.search("java"));
console.log(str.split(' '));
console.log(str.startsWith("w"));
console.log(str.substr(14,4));
console.log(str.substring(14,18));
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.trim());
console.log(str.indexOf("s"));



//if condition

let ag=19;

if(ag>18 && ag!=null){
    console.log("You Are Eligible For Vote");
}

//else condition
else{
    console.log("You Are Not Eligible For Vote");
}

//else if


let mar=25;

if(mar>0){
    console.log("Pasitive")
}
else if(mar<0){
    console.log("negative ")
}
else{
    console.log("zero")
}


//nested if

let tamil=45,english=58,maths=78;
let total=tamil+english+maths;
let avg=35;
console.log("total:",total);
console.log("avg:",avg.toFixed(2));

if(tamil>=35&&english>=35 && maths>=35){
    if(avg<=100 && avg>=90){
        console.log("Pass With A-Grade")
    }
    if(avg>=80 && avg<90){
        console.log("Pass With B-Grade")
    }
    if(avg>=70 && avg<80){
        console.log("Pass With C-Grade")
    }
    if(avg>=60 && avg<70){
        console.log("Pass With D-Grade")
    }
    if(avg>=50 && avg<60){
        console.log("Pass With C-Grade")
    }
    if(avg>=35 && avg<50){
        console.log("Pass With C-Grade")
    }
    
}
else{
    console.log("Fail");
    console.log("No Grade");
}


//switch statement

var choice=1;
switch(choice){
    case "1":
        console.log("one");
        break;
    case "2":
        console.log("two");
        break;
    case "3":
        console.log("three");
        break;
    case "4":
        console.log("four");
        break;
    case "5":
        console.log("five");
        break;
    case "6":
        console.log("six");
        break;
    case "7":
        console.log("seven");
        break;
    case "8":
        console.log("eight");
        break;
    case "9":
        console.log("nine");
        break;
    default:
        console.log("NOt valid");
        break;
     
}
switch(choice){
    case "1":
    case "2":
    case "3":
    case "4":
        console.log("1-4");
        break;
    default:
        console.log("not valid")
}
//while loop 

var n=0;

//do while
var tables=2;
do{
    console.log(tables+"*"+n+"="+(tables*n));
    n++;
}while(n<0);

//for loop
let  arr1=[]
for(let c=1;c<=10;c++){
    console.log(c);
    arr1.push(c);
    
}
console.log(arr1)


//nested for loop

let nums=[];
for(let i=0;i<5;i++){
    nums.push([]);
    for(let j=0;j<5;j++){
       nums[i].push(j);
    }
}
console.table(nums);

//for of loop


let names=["pandiyan","edison","raj"];
for(let h of names){
    console.log(h);
}

//for in loop

let list={
    name:"pandi",
    age:19,
    number:8610018901
}
for(let g in list){
    console.log(g+":"+list[g]);
}
//object to array


let user={
    name:"pandi",
    age:19,
    number:8610018901
}


let arr_k=Object.keys(user);
let arr_v=Object.values(user);
console.log(arr_k);
console.log(arr_v);