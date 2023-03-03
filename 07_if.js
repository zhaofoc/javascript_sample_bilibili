//This is sample code for video: https://www.bilibili.com/video/BV1c84y187JL

//if, if else, if elseif else, 
// ==  ===
// &&  ||

let numOne = 10;
let numTwo = '10';

console.log(typeof numOne, typeof numTwo);

//if ( numOne == numTwo){
//    console.log("equal");
//}else{
//    console.log("not equal");
//}

// == 是“无视”数据类型的，例如：str和number可以equal
// === 是“重视”数据类型的，例如：str和number是不equal的

//试推测21-27行代码运行的结果

if(numOne === numTwo){
    console.log(`${numOne} equal to ${numTwo}.`);
}else if(numOne == numTwo){
    console.log(`${numOne} is partly equal to ${numTwo}.`);
}else{
    console.log(`${numOne} is not equal to ${numTwo}.`);
}

//&& 且关系

if(numOne == numOne && numOne==10){
    console.log("true!");
}

//||或关系

if(numOne == numOne || numOne==1120){
    console.log("true!");
}

