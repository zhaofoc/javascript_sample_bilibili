//This is sample code for video: https://www.bilibili.com/video/BV17x4y1g7qb
//字符串操作

let herName = "Aoyama Nanami";
//青山七海


//1. length

console.log(herName.length);

//2. toUpperCase

console.log(herName.toUpperCase());


//3. toLowerCase

console.log(herName.toLowerCase());

//4. 字符串的连接（两种主要方式）

console.log("This girl is " + herName + " , she is cute!");

console.log(`This girl is ${herName}, she is cute!`);

//5. subString


console.log("Her family name is " + herName.substring(0,6) +".");

console.log("Her given name is " + herName.substring(7,13)+".");

console.log(`Her family name is ${herName.substring(0,6)}.`);

console.log(`Her given name is ${herName.substring(7,13)}.`);


