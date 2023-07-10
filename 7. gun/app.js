//klasik fonksiyon tanimlama
//parametresiz
function functionName() {
    //uygulanacak kod parcasi
}
functionName();

//isimsiz fonksiyon
const anonymousFun = function () {
    console.log("İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor");
}

anonymousFun()
//Expression Function - isimsiz fonksiyonlardir
const squaree = function () {
    console.log("Bu bir expression function türünde fonksiyondur");
}

squaree();


//Parametresiz ve dönüş değeri olamayan fonksiyon
function square() {
    let num = 2;
    let square = num * num;
    console.log(`${num} * ${num} = ${square}`);
}
square()

//parametresiz fonskiyon ornek 2
function addNumbersFunction() {
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;
    console.log(`${numOne} + ${numTwo} = ${sum}`);
}
addNumbersFunction()


function printFullName() {
    let name = "Elif";
    let surname = "Maralı";
    let space = " ";
    let fullName = name + space + surname;
    console.log(fullName);
}
printFullName();

// bir değer döndüren fonksiyon
function printFullName() {
    let firstName = "Elif", lastName = "Maralı", space = " ";
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(printFullName());

// parametreli fonksiyon
//bir parametreli fonksiyon
/* function functionName(param1) {
    //istenilen kod parcasi
}
functionName(param1); */


function areaOfCirclee(r) {
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCirclee(10));

function square(number) {
    return number * number;
}
console.log(square(10));

//İki parametreli fonksiyon
/* function functionName(param1, param2) {
    //istenilen kod parcasi
}
functionName(param1, param2) */

// Parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksiyon yapalım
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum);
}
sumTwoNumbers(10, 20);


function fullName(name, surname) {
    let fullName = name + " " + surname;
    return fullName;
}
console.log(fullName("elif", "marali"));


function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName("elif", "marali"));

//cok parametreli fonksiyon
/* function functionName(param1, param2, param3, ...) {
    //istenilen kod parcasi
}
functionName(param1, param2, param3, ...) */


// bu fonksiyon, bir diziyi parametre olarak alır ve dizideki sayıları toplar
function collectArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = array[i] + sum;
    }
    return sum;
}
let array = [1, 2, 3, 4, 5]
console.log(collectArrayElements(array));

const areaOfCircle = (r) => {
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(3));


//Sınırsız sayıda parametreyle çalışan fonksiyon
//sinirsiz sayida parametreli fonksiyon tanimlamanin iki yolu vardir
//klasik fonskiyonda sinirsiz sayida parametreli fonksiyon
//Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli
//arguments anahtar kelimesi ile erişilir. 
//Parametre olarak atanan her öğeye arguments üzerinden ulaşabiliriz.

function sumAllNumbs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}
console.log(sumAllNumbs(1, 2, 3, 4));
console.log(sumAllNumbs(10, 20, 30, 40));

//Arrow function'da sınırsız sayıda parametre konusunu Arraw fonksiyonu gördükten sonra görebilirsiniz.

//Kendi kendine çağırılan fonksiyon
(function (n) {
    console.log(n * n);
})(2);


let squaredNum = (function (n) {
    return n * n;
})(10)
console.log(squaredNum);

//Arrow function
// once klasik fonksiyon hallerini yazip daha sonra arrow hallerini yazalim 
function square(n) {
    return n * n;
}
console.log(square(5));

const squareArrow = (n) => {
    return n * n
}
console.log(squareArrow(10));

//kod blogumuzda sadece bir satir kod varsa fonksyionu tek satirda tanimlatabilriiz
const squareArrowShort = n => n * n;
console.log(squareArrowShort(2));

// arraydeki elemanlari buyuk harfe ceviren fonksiyon 
const changeToUpperCase = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries));

// alinan isim ve soyisim degerlerini birlestirip ve bas harflarini buyutup konsola bastiran fonksiyon
const fullNames = (name, surname) => {
    console.log(`${name.at(0).toUpperCase()}${name.slice(1)} ${surname.at(0).toUpperCase()}${surname.slice(1)}`);
}
fullNames("elif", "marali")

//Arrow function'da sınırsız sayıda parametre
// klasik fonksiyonda nasıldı hatırlayalım 
function sumAllNumbs() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}
console.log(sumAllNumbs(1, 2, 3, 4));

//arrow function icin sinirsiz sayida parametre
const sumAllNumbers = (...args) => {
    console.log(args);
}
sumAllNumbers(1, 2, 3, 4);

//function declaration
const sumAlllNums = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sumAlllNums(1, 2, 3));

//2. bir hali 
const sumAlllNums2 = (...args) => {
    let sum = 0;
    for (element of args) {
        sum += element;
    }
    return sum;
}
console.log(sumAlllNums2(4, 5, 6));


// default parametre ile fonksiyon kullanimi
//syntax
/* function functionName(param = value) {
    //codes
}
//fonk cagirimi
functionName()
functionName(arg)
 */

//default parametre examples
//1 : name degiskeni parametre alirsa statik olarak degisir, parametre almazsa "Peter" olarak kullanilir

function greetings(name = "Peter") {
    let message = `${name} welcome to 30 Days Of JavaScript!`;
    return message;
}
console.log(greetings());
console.log(greetings("Elif"));

//2
function generateFullName(firstName = "Elif", lastName = "Marali") {
    let space = " ";
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(generateFullName());
console.log(generateFullName("Ayse", "Oz"));

//3 : yas hesaplama 
let now = new Date();
let nowYear = now.getFullYear();
function calculateAge(birthYear = 2002, currentYear = nowYear) {
    let age = currentYear - birthYear;
    return age;
}
console.log(calculateAge());


//default value ile arrow function tanimlamak
//yer cekimi hesaplama
const weightObjects = (mass, gravity = 9.81) => mass * gravity + "N";
console.log(`Weight of an object in Newton : `, weightObjects(100)); // 9.81 dunya yuzeyinde yercekimi
console.log(`Weight of an object in Newton : `, weightObjects(100, 1.62)); // Ay yuzeyinde yercekimi
