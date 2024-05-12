console.log("welcome to array");

const a=[1,"one",true,{1:"one",2:"two"}];
console.log(a);
console.table(a);


//array methods 

//1.forEach

//print the element in a array
const fruits=["orenge","pineapple","apple","lemon"];
fruits.forEach((fruit,index)=>{
    console.log(index+" "+fruit);
})

//find sum of the array


var numbers=[10,20,30,40,50];
let sum=0;
numbers.forEach(number=>
    {
    sum+=number;
            }
    )
    console.log(sum)


    //max element in a array

let max=numbers[0];
numbers.forEach(number=>{
    if(number>max){
        max=number;
    }
})
console.log(max)

//average of an array

let samp=[1,2,3,4,5];
let s=0;
samp.forEach(se=>{
    s+=se;
})
console.log(s/samp.length);

//double of an array

let double=[];
samp.forEach(nn=>{
    double.push(nn*2);
})
console.log(double);

//print even number in arrray

let even=[];
samp.forEach(ss=>{
    if(ss%2===0){
        even.push(ss);
    }
})
console.log(even);


//map() function in array




//double the array
const cm=[1,2,3,4,5,6,7,8,9,10];

let cc=cm.map(c=>c*2);
console.log(cc);


//capitilaize the array

let color=["red","orenge","yellow"];
let cr=color.map(col=>col.toUpperCase());
console.log(cr)

//combinig two array

let fru=["apple","orenge","banana"];
let combine=fru.map((fr,index)=>fr +"-"+color[index]);
console.log(combine)

//even numbers

let eve=cm.map(number=>number%2===0);
console.log("even",eve);


//extract property from array

let user=[

    {name:"pandiyan",age:19,city:"tnj"},
    {name:"edison",age:18,city:"trichy"},
    {name:"ajay",age:20,city:"trichy"},
    {name:"vetri",age:17,city:"trichy"},
    {name:"raja",age:21,city:"trichy"},
    {name:"vikki",age:22,city:"trichy"},
    {name:"seeni",age:23,city:"trichy"},
    {name:"deva",age:20,city:"trichy"}
];

console.table(user);


let use=user.map((userr)=>({
    ...userr,

    status:userr.age>=18 ?"eligible":"not eligible"
}));

console.table(use)


let mod=fruits.map(function(orginal,index,orval){
    return{
        word:orginal,
        length:orginal.length,
        position:index,
        totalword:orval.length
        
    };
});

console.table(mod);


//filter() method


let nerm=[1,2,3,4,5,6,7,8,9,10];
let nnn=nerm.filter(n=>n%2===0);
console.log(nnn);


let users=[
    {name:"pandi",age:19},
    {
        name:"ramesh",age:16
    },
    {
        name:"sivaram",age:22
    }
];
console.log(users);

let vote=users.filter(u=>u.age>20);
console.log(vote);


//1.fiter the size of the word

let names=["pandi","edison","rajacholan","vetri","ajay","seeni","vikki"];
let le=names.filter(nm=>nm.length>5);
console.log(le);
console.log(names);

//inculde type


let books=[
    {
        title:"THe life of pie",price:600,year:1990
    },
    {
        title:"html",price:200,year:1990
    },
    {
        title:"css",price:400,year:1992
    },
    {
        title:"javascript",price:600,year:1996
    },
    {
        title:"python",price:600,year:2012
    },
    {
        title:"react",price:700,year:2020
    },

];
let book=books.filter(book=>{
    return book.title.toLocaleLowerCase().includes("html") ||book.price<500
});
console.log(book);



let boom=[
    {
        title:"THe life of pie",price:600,year:1990
    },
    {
        title:"html",price:200,year:1990
    },
    {
        title:"css",price:300,year:1992
    },
    {
        title:"javascript",price:600,year:1996
    },
    {
        title:"python",price:600,year:2012
    },
    {
        title:"react",price:700,year:2020
    },



];

let boooks=boom.filter(book=>{
        return book.title.toLocaleLowerCase().includes("html") || book.price<400

});


console.log(boooks);




//reduce() method

let adding=[1,2,3,4,5];
let x=adding.reduce((accumulator,currentvalue)=>{
           return accumulator+=currentvalue


});
console.log(x);

//fallened array


let narr=[[1,2],[3,4],[5,6]];
let na=narr.reduce((accumulator,currentvalue)=>{
    return accumulator.concat(currentvalue)
});
console.log(na);

//how many time accur

let words=["red","blue","green","blue","red","yellow"];
let wcc=words.reduce((accumulator,currentvalue)=>{
        if(currentvalue in accumulator){
            accumulator[currentvalue]++;
        }
        else{
            accumulator[currentvalue]=1;
        }
        return accumulator;
},{});

console.log(wcc);

//  slice()

let  nums=[10,20,30,40,50,60,70,80,90,100];
let sks=nums.slice(1,3);
console.log(nums);
console.log(sks);


//   splice()

let spc=nums.splice(1,2,25,35);
console.log(nums);

// concat

let num1=[1,2,3,4,5];
let num2=[6,7,8,9,10];
let d=num1.concat(num2,11,12,[13,14,15]);
console.table(d)


// sort()
let userrr=["ram","ajay","barani"];
userrr.sort();
console.log(userrr);
let numm=[10,8,5,12,15,9,1,0];
console.log(numm);
numm.sort((a,b)=>{
    return a-b;

});
console.log(numm);



// fill()
 
// numm.fill(value,start,end);

numm.fill(20,3,5);
console.log(numm);

//  include()


//array.include(value,start_index)


let hook=["python","java","javasript","html","css","c++"];
console.log(hook.includes("jav"));
console.log(hook.includes("java"));

// join()

let kk=nums.join("@");
console.log(kk);
let sn=nums.join("$");
console.log(sn);
let sk=nums.join(":");
console.log(sk);

//    reverse()
console.log(nums);
nums.reverse();
console.log(nums);


//array like object

let arra={0:10,1:20,2:40,3:5,length:3};
Array.prototype.reverse.call(arra);
console.log(arra);


//     push()

console.log(nums);
nums.push(40,60,70,80);
console.log(nums);

//pop()

nums.pop();
console.log(nums);



let smr=[1,"ram","raj",4,5];
smr.splice(1,1);
console.log(smr);


//string method

let mm="shanmugapandiyan";
let ageo=-1;
console.log(mm.charCodeAt(5));



//if statement 


if (ageo>18){
    console.log("eligible for vote")
}
else if(ageo<0){
    console.log("incorrect data")
}
else{
        console.log("not");
}



