//primitive and unmutable properties
let world = "hello world";
console.log(world);
world[0] = "E";
console.log(world);
let numOne = 1;
let numTwo = 1;
console.log(numOne == numTwo);
let js = "javascript";
let py = "python";
console.log(js == py);
let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);



//non-primitive and mutable properties
let nums = [1, 2, 3];
console.log(nums);
nums[0] = 10;
console.log(nums);
let numberss = [1, 2, 3];
//referans olarak alinmadigi icin false
console.log(nums == numberss);


let useOne = {
    name: "Elif",
    surname: "Marali"
}

let useTwo = {
    name: "Elif",
    surname: "Marali"
}
//referans olarak alinmadigi icin false
console.log(useOne == useTwo);

//referans olarak alindigi icin true
nums = [1, 2, 3];
let numbers = nums;
console.log(nums == numbers);

//veri turleri
//number
let age = 35;
const yerCekimi = 9.81;
let kutle = 72;
const pi = 3.14;

//math objects
const PI = Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(Math.round(5.49));
console.log(Math.round(5.5));
console.log(Math.ceil(5.5));//up
console.log(Math.floor(5.5));//down

console.log(Math.min(2, 3, 5, 8, -1, 4, 7, 33));
console.log(Math.max(2, 3, 5, 8, -1, 4, 7, 33));

console.log(Math.random());//random 0-0.9999
console.log(Math.floor((Math.random() * 11)));//random 0-10

//mutlak deger
console.log(Math.abs(-100));
//karekok
console.log(Math.sqrt(4));
//uslu
console.log(Math.pow(3, 2));
console.log(3 ** 2);
//trigonometri
console.log(Math.sin(0));
console.log(Math.sin(60));
console.log(Math.sin(90));
console.log(Math.cos(0));
console.log(Math.cos(60));
console.log(Math.cos(90));


//strings
let space = " ";
let firstName = "Elif";
let lastName = "Marali";
let country = 'Turkey';
let city = `Istanbul`;
let language = `Javascript`;
let job = "software engineer";

//string concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

//Long Literal Strings
const p = "Lorem Ipsum is simply dummy \
text of the printing and typesetting industry. \
Lorem Ipsum has been the industry's standard dummy\
text ever since the 1500s, when an unknown printer\
took a galley of type and scrambled it to make a type specimen book. \
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\
desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


//Escape Sequences in Strings
/* \n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (") */

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')
console.log("benim\nadim\nelif\nmarali");

console.log("Merhaba\t\tDunya");
console.log("el\\if");
console.log('el\'if');
console.log("el\"if");


//template literals
let fullNames = `name is ${firstName} and surname is ${lastName}`;
console.log(fullNames);

let a = 5;
let b = 4;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a}>${b} = ${a > b}`);

//strings methods
//length methods
js = "javascript";
console.log(`js = ${js} and ${js.length}`);
console.log(js[5]);
let dizi = ["e", "l", "i", "f"];

//son indexe ulasmak icin 
console.log(js[js.length - 1]);
//upperCase methods
let upperName = fullName.toUpperCase();
console.log(upperName);
//lowerCase methods
let lowerName = fullName.toLowerCase();
console.log(lowerName);

//substr methods
let string = "javascript";
console.log(string.substr(4, 6));
let youtube = "prototurk";
console.log(youtube.substr(5, 2));
//substring methods
console.log(string.substring(0, 4));
console.log(string.substring(4, 8));

//split methods
console.log(fullName);
console.log(fullName.split(" "));
let first = "Elif";
console.log(first.split("").reverse().join("").toUpperCase());


//trim methods baslangictaki ve sondaki bosluklari kaldirir
let strings = "      30 days of javascript        ";
console.log(strings)
console.log(strings.trim());;

//includes icerip icermedigini kontrol eder
console.log(strings.includes("days"));
console.log(strings.includes("daysss"));
console.log(strings.includes("30"));
console.log(strings.includes("                                              "));
console.log(strings.includes("ava"));


//replace methods degerleri degistirmek bir kez degistirir

console.log(strings.replace("script", "python"));
console.log(strings);
let str = "merhaba elif, nasilsin elif";
console.log(str.replace("elif", "yunus"));
//tumunu degistirmek icin replaceAll() methodu kullanilir
console.log(str.replaceAll("elif", "yunus"));


//charAt() methods indexteki degerleri getirir
console.log(strings);
console.log(strings.charAt(15));

//charCodeAt() methods indexteki degerlerin ascii kodlarini getirir
//indexOf method stringin icinde geciyorsa ilk gectigi yerin indexini dondurur gecmiyorsa -1 dondurur
console.log(str);
console.log(str.indexOf("i"));
console.log(str.indexOf("il"));
console.log(str.indexOf("a"));
console.log(str.indexOf("yu"));
//lastIndexOf() methos indexOf da ilk gectigi degeri alirdi burda da son gectigi degeri alir

let lastString = "I love javascript. If you do not love javascript what else can you love .";
console.log(lastString.lastIndexOf("love"));
console.log(lastString.lastIndexOf("you"));
console.log(lastString.lastIndexOf("javascript"));

//concat method
let otuz = "30";
console.log(otuz.concat("Days", "Of", "Javascript"));

//startsWidth method
console.log(lastString.startsWith("love"));
console.log(lastString.startsWith("i"));
console.log(lastString.startsWith("I"));
//endsWidth method
console.log(lastString.endsWith("Love"));
console.log(lastString.endsWith("ve ."));
console.log(lastString.endsWith("love"));


//search method
lastString = "I love javascript. If you do not love javascript what else can you love .";
console.log(lastString.search("love"));
console.log(lastString.search(/javascript/g)); // i küçük büyük duyarsız hale getirşr /g ise global hale getirir


//match methods
let stringOrn = "loveride"; //bu bir string değerdir
let patternOne = /love/; //bu bir regular expression pattern değer herhangi bir flag olamdığı hali
let patternTwo = /love/gi; //bu bir regular expression pattern değer g (globals) (tüm yazıda ara) ve i (büyük küçük harf duyarsızlığı)
lastString = "I love javascript. If you do not love javascript what else can you love .";
console.log(lastString.match("love"));
console.log(lastString.match(patternOne));
console.log(lastString.match(patternTwo));

let txt = "In 2019, I ran 30 Days of python, Now, in 2020 ...";
let regEx = /\d+/; // + en az bir tane olabilir anlamina gelir
console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));

//repeat() kac kez tekrar edecegini soyleriz

let strng = "love";
console.log(strng.repeat(10)); //lovelovelovelovelovelovelovelovelovelove


//checking data types and casting
space = " ";
firstName = "Elif";       //string    
lastName = "Marali";   //string
country = 'Turkey';   //string
city = `Istanbul`;   //string
language = `Javascript`;   //string
job = "software engineer";   //string 
age = 21;//number
let job2; //undefined
console.log(typeof space);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof language);
console.log(typeof job);
console.log(typeof age);
console.log(typeof job2);

//changing Data types (castings)
//string to integer
/*
"10"=10
"5"=5 ...
parseInt();
Number();
Plus sign(+)
*/
let num="10";
let numInt=parseInt(num);
numInt=Number(num);
numInt=+num;
console.log("num: " +num+ "and TypeOf=" + typeof num);
console.log("numInt: " +numInt+ "and TypeOf=" + typeof numInt);


//string to float
/*
"9.81"=9.81;
"3.14"=3.14;
parseFloat();
Number();
Plus sign(+);
*/

let num2="9.81";
let floatNum=parseFloat(num2);
console.log("num2: " +num2+ " and TypeOf=" + typeof num2);
console.log("num2Float: " +floatNum+ " and TypeOf=" + typeof floatNum);



//float to integer
//parseInt()
let num3=9.81;
let integerNum=parseInt(num3);
console.log(num3);
console.log(integerNum);