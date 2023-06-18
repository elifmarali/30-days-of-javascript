let isLightOn=true;
let isRaining=false;
let isHungry=false;
let isMarried=true;
let trueValue=4>3;
let falseValue=3>4;
console.log(falseValue);
//undefined value
let firstName;
console.log(firstName);
console.log(typeof firstName);
//null value
let empty=null;
console.log(empty); 

//operators
//Assigment operators
firstName="Elif";
let lastName="Maralı";
let x=3;
let y=2;
//3 2
console.log("x= ", x, " y= ", y);
x=y;
//2 2
console.log("x=y işleminden sonra x= ", x, " y= ", y);
x+=y;
//4 2
console.log("x+=y işleminden sonra x= ", x, " y= ", y);
x-=y;
//2 2
console.log("x-=y işleminden sonra x= ", x, " y= ", y);
x*=y;
//4 2
console.log("x*=y işleminden sonra x= ", x, " y= ", y);
x/=y;
//2 2
console.log("x/=y işleminden sonra x= ", x, " y= ", y);
x%=y;
//0 2
console.log("x%=y işleminden sonra x= ", x, " y= ", y);
x**=y;
//0 2
console.log("x**=y işleminden sonra x= ", x, " y= ", y);

//arithmetic operators 
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

//calculate area of a circle - daire alanı hesaplama
const PI=3.14;
let radius=100; //length is meter
const areaOfCircle= PI * radius * radius;
console.log(areaOfCircle);

// Let us calculate weight of an object - bir cismin ağırlığını hesaplama
const gravity=9.81;// in m/s2
let mass= 72; // in kilogram
const weight=mass * gravity;
console.log(weight);

//comparison operators - karşılaştırma operatorleri  
console.log(5=="5");
console.log(5==="5");
console.log(5!="5");
console.log(5!=="5");
console.log(4>5);
console.log(4<5);
console.log(4<=5);
console.log(4>=5);
console.log(0=="");
console.log(0==="");
console.log(0==false);
console.log(0===false);


//logical operators - mantiksal operatorler
const check1 = 4>3 && 10>5; // true
const check2 = 4>3 && 10<5; // false
const check3 = 4<3 && 10<5; // false
console.log(check1, check2, check3);
const check4 = 4>3 || 10>5; // true
const check5 = 4>3 || 10<5; // true
const check6 = 4<3 || 10<5; // false
console.log(check4, check5, check6);
 let check7=4>3;
 console.log(check7);

 console.log(!(check7));


//increment operator - arttirma operator
let count=0;
console.log(++count);
console.log(count);
let count2=0;
console.log(count2++);
console.log(count2);

//decrement operator - AZALTMA operator
let count3=0;
console.log(--count3);
console.log(count3);
let count4=0;
console.log(count4--);
console.log(count4);

//ternary operator - uclu operator
isRaining=true;
isRaining? console.log("You need a rain coat."):console.log("No need for a rain coat.");
isRaining=false;
isRaining ? console.log("You need a rain coat"):console.log("No need  for a rain coat");

let number=5;
number>0? console.log(`${number} is a positive number`):console.log(`${number} is a negative number`);
number=-5;
number>0? console.log(`${number} is a positive number`):console.log(`${number} is a negative number`);

//Window methods

//window alert() methods
let message= "Merhaba nasilsin?";
alert(message);
alert("Welcome to 30DaysOfJavascript");

//window prompt() methods
prompt("bir sayi giriniz");
prompt("bir sayi giriniz","sayi yalnizca pozitif olmalidir");
let sayi=prompt("Bir sayi giriniz","5");
let result= sayi*2;
console.log(result);

//confirm methods
let isDelete= confirm("Silmek istediginize emin misiniz?");
isDelete?console.log("Silme islemi basarili"):console.log("Silme islemi basarisiz");

//Date Objects
//getFullYear() - getMonth() - getDate() - getHours() - getMinutes() - getSeconds() - getMilliseconds() - getTime() - getDay()

//creating a time object
const now= new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); // 0-11
console.log(now.getDate());  // 1-31
// Getting the weekday as a number (0-6)
console.log(now.getDay()); //  Sunday is 0, Monday is 1 and Saturday is 6
console.log(now.getHours()); 
console.log(now.getMinutes()); 
console.log(now.getSeconds());
console.log(now.getHours()); 

//readeble time
const now2=new Date();
let year=now2.getFullYear(), //return year
month=now2.getMonth()+1, // return month (0-11)
date = now2.getDate() , // return date (1-31)
hours= now2.getHours() , // return hours (0-23)
minutes = now2.getMinutes() , // return minutes
second = now2.getSeconds() ,
day = now2.getDay();

let months = [
    "ocak" , 
    "subat" ,
    "mart" ,
    "nisan" , 
    "mayis" ,
    "haziran" ,
    "temmuz"  , 
    "agustos" ,
    "eylul" , 
    "ekim" , 
    "kasim" ,
    "aralik"
];
let days = [
    "pazar",
    "pazartesi", 
    "sali" , 
    "carsamba",
    "persembe",
    "cuma",
    "cumartesi"
];
// 18 haziran 2023 , pazar , 21:12:00
console.log(month);
 let humanRedableDate = `${date} ${months[month-1]} ${year} , ${days[day]} , ${hours} : ${minutes} : ${second}`;
 console.log(humanRedableDate);