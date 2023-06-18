//level 1
let firstName = "elif" ,
lastName = "marali",
country="Turkish" ,
city ="istanbul",
age = 20,
isMarried= false,
year = 2023;

console.log(`${firstName} - ${typeof(firstName)} 
${lastName} - ${typeof(lastName)}
${country} - ${typeof(country)}
${city} - ${typeof(city)}
${age} - ${typeof(age)}
${isMarried} - ${typeof(isMarried)}
${year} - ${typeof(year)}
`);

let num1 = 10, num2="10" , num3="9.8";
console.log(num1 + " => " + typeof(num1) +" "+ num2 + " => " + typeof(num2));
console.log(num3 + " => " + typeof(num3));
console.log(parseInt(num3) + " => " + typeof(parseInt(num3)));

//What is the year today?
let now = new Date();
let todayYear=now.getFullYear();
console.log(todayYear);
// What is the month today as a number?
let todayMonth=now.getMonth()+1;
console.log(todayMonth);
//What is the date today?
let todayDate=now.getDate();
console.log(todayDate);
//What is the day today as a number?
let todayDay=now.getDay();
console.log(todayDay);
//What is the hours now?
let todayHours=now.getHours();
console.log(todayHours);
//What is the minutes now?
let todayMinutes=now.getMinutes();
console.log(todayMinutes);
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime()) 

//level 2
//ucgende alan
let taban =prompt("taban degerini giriniz");
console.log("Enter base: " + taban);
let yukseklik = prompt ("yukseklik degerini giriniz");
console.log("Enter height: " + yukseklik);
let alan = taban * yukseklik * 0.5;
console.log("The area of the triangle is " + alan);


//ucgende cevre
