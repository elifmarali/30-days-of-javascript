//level 1
let defaultArray = new Array();
let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(oddNumbers.length);
console.log(oddNumbers[oddNumbers.length - oddNumbers.length]);
console.log(((oddNumbers[Math.floor((oddNumbers.length - 1) / 2)]) + oddNumbers[Math.ceil((oddNumbers.length - 1) / 2)]) / 2);
console.log(oddNumbers[oddNumbers.length - 1]);


let mixedDataTypes = [
    "elif",
    "marali",
    true,
    21,
    {
        coutry: "turkey",
        city: "istanbul"
    },
    ["english", "turkish", "german"]
]
console.log(mixedDataTypes.length);

let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
]
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[itCompanies.length - itCompanies.length]);
console.log(itCompanies[((itCompanies.length - 1) / 2)]);
console.log(itCompanies[(itCompanies.length - 1)]);
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}
console.log(itCompanies.toString() + " are big IT companies");
// let aranacak = prompt("aramak istediginiz degeri giriniz").toLowerCase();
let kucukItCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
    kucukItCompanies[i] = itCompanies[i].toLowerCase();
}
/*
if (kucukItCompanies.includes(aranacak) === true) {
    console.log("Aradiginiz deger " + kucukItCompanies.indexOf(aranacak) + " . index degerinde bulunmaktadir");
}
else {
    console.log("Deger dizide bulunmamaktadir");
}
 */

let filteredCompanies = [];
for (let i = 0; i < kucukItCompanies.length; i++) {
    let company = kucukItCompanies[i];
    let count = 0;
    for (let j = 0; j < company.length; j++) {
        if (company[j] == "o") {
            count++;
        }
    }
    if (count > 1) {
        filteredCompanies.push(company)
    }
}
console.log(filteredCompanies);
console.log(itCompanies.sort());
console.log(itCompanies);
console.log(itCompanies.reverse());
console.log(itCompanies);
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log(itCompanies);
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(2, 2);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

//level 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[^\w\s]/g, "");
// replace() fonksiyonu kullanılarak str değişkenindeki noktalama işaretleri [^\w\s] düzenli ifadesi ile bulunur ve boş bir dizeyle ("") değiştirilir. [^\w\s] ifadesi, \w ile kelime karakterlerini ve \s ile boşluk karakterlerini temsil eder. ^ işareti, bu karakterlerin dışındaki herhangi bir karakteri ifade eder. g bayrağı, tüm eşleşmelerin değiştirilmesini sağlar.
console.log(text);
console.log(words);
words = words.split(" ");
console.log(words);
console.log(text.length);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat")
}
if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}
let balAlerjisi = true;
if (balAlerjisi) {
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i] === "Honey") {
            shoppingCart.splice(i, 1);
        }
    }
}
let index = shoppingCart.indexOf("Tea");
if (index !== -1) {
    shoppingCart[index] = "Green Tea"
}
console.log(shoppingCart);

//countries
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
if (countries.includes("Ethiopia")) {
    let index = countries.indexOf("Ethiopia");
    countries[index] = countries[index].toUpperCase()
}
console.log(countries);

//web techs
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
}
else {
    webTechs.push("Sass");
    console.log(webTechs);
}


//iki değişkeni birleştirip tek diziye atama
const frontEnd = ["Html", "CSS", "JavaScript", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const cumle = "I love JavaScript,React,Redux,Html,CSS"
const web = cumle.split(",");
console.log(web);


//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const siraliAges = ages.sort();
console.log(siraliAges);
console.log(siraliAges.shift());// en kucuk
console.log(siraliAges.pop());//en buyuk
if (siraliAges.length % 2 == 0) {
    let sonuc = ((siraliAges[(Math.floor(siraliAges.length / 2))]) + (siraliAges[(Math.ceil(siraliAges.length / 2))])) / 2;
    console.log(sonuc);
}
else {
    console.log((siraliAges[siraliAges.length / 2]));
}
let ortalama = 0;
ages.forEach((age) => {
    ortalama += age;

})
ortalama = ortalama / ages.length;
console.log(ortalama);
console.log(siraliAges);
let minAges = siraliAges[0];
let maxAges = siraliAges[siraliAges.length - 1];
let ageRange = maxAges - minAges;
console.log(ageRange);



const countriess = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

let countriessSlice = countriess.slice(0, 10);
console.log(countriessSlice);
if (countriess.length % 2 != 0) {
    console.log((countriess[(Math.floor(countriess.length / 2))]), (countriess[(Math.ceil(countriess.length / 2))]));
}
else {
    console.log(countriess[(countriess.length / 2)]);
}