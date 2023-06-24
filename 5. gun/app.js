//array constructor i kullanarak dizi tanimlayalim 
const arr = Array();
console.log(arr);
//ya da 
const arr2 = new Array();
console.log(arr2);

//bos bir dizi olusturmak icin en cok tavsiye edilen yontem ise;
const arr3 = [];
console.log(arr3);

//degerlerle bir dizi olusturmak 
const numbers = [0, 3, 9.81, "elif", 2002];
console.log(numbers.length);
console.log(numbers);

const nums2 = [0, 3.14, 9.81, 37, 98.6]; // sayi dizisi
let fruits = ["banana", "orange", "orange", "mango", "lemon"] // string dizisi , meyveler
const vegetables = ["patato", "cabbage", "onion", "carrot"] // sebze dizisi , sebzeler
const animalProducts = ["milk", "meat", "butter", "yoghurt"] // string dizisi , hayvansal urunler
const webTechs = ["Html", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"] // string dizisi
const countries = ["Finland", "Denmark", "Sweden", "Norway"] // string dizisi , ulkeler

//diziyi ve dizinin uzunlugunu yazdiralim
console.log("Numbers =>" + " " + nums2);
console.log("Numbers Length = " + nums2.length);
console.log("Fruits =>" + " " + fruits);
console.log("Fruits Length = " + fruits.length);
console.log("Web Techs =>" + " " + webTechs);
console.log("Web Techs Length = " + webTechs.length);


//Dizinin farklı veri tiplerinde elemanları olabilir.
const arr4 = ["Elif",
    2002,
    true,
    { country: "Turkey", city: "Istanbul" },
    { skills: ["HTML", "CSS", "JavaScript", "React"] }
]

console.log(arr4);
console.log(arr4.length);



//Split kullanarak dizi oluturmak
let js = "javascript";
const charsJavascript = js.split("");
console.log(charsJavascript);

let socialMedia = "Twitter,Instagram,Facebook,Google,Snapchat";
const socialMedias = socialMedia.split("");
console.log(socialMedias);
const socialMedias2 = socialMedia.split(",");
console.log(socialMedias2);

let txt = "I love to JavaScript. I teach JavaScript, Html, Css"
const words = txt.split(" ");
console.log(words);

//index kullanarak dizi elemanlarına ulaşmak
//index degerlerini kullanarak dizi elemanlarına ulaşabiliriz 

fruits = ["banana", "orange", "mango", "lemon"] // string dizisi , meyveler
let firstFruits = fruits[0];
console.log(firstFruits);
let secFruit = fruits[1];
console.log(secFruit);
let thirdFruit = fruits[2];
console.log(thirdFruit);
let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);


//dizi elemanlarini duzenlemek
const numbers2 = [1, 2, 3, 4, 5];
numbers2[0] = 10;
numbers2[1] = 20;
console.log(numbers2);

//dizileri manuple edecek metotlar
const arr5 = Array(); // bos bir dizi yaratir

const eightEmptyValues = Array(8); //8 tane bos deger yaratir
eightEmptyValues[4] = "elif"
console.log(eightEmptyValues);

//fill ile statik degerler atama
const sixXValues = Array(6).fill("X"); //6 tane bos deger yarattik daha sonra bosluklari "X" ile doldurduk
console.log(sixXValues);

const four0Values = Array(4).fill(0); //Array ile bos olarak 4 deger olusturduk ve daha sonra fill kullanarak statik olarak her bir bosluga 0 degerini atadik
console.log(four0Values);

// concat ile iki veya ikiden fazla sayıda diziyi birleştirmek
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

// length
const numbe = [1, 2, 3, 4, 5];
console.log(numbe.length);

// indexOf
const numbersss = [1, 2, 3, 4, 5];
console.log(numbersss.indexOf(0)); // 0 in bulunup bulunmadigini kontrol eder
console.log(numbersss.indexOf(1)); // 1 in bulunup bulunmadigini kontrol eder
console.log(numbersss.indexOf(6));// 6 nin bulunup bulunmadigini kontrol eder
console.log(numbersss.indexOf(5));// 5 nin bulunup bulunmadigini kontrol eder

//Bir dizide mevcut olup olmadığını kontrol edin.
const fruitss = ["banana", "orange", "mango", "lemon"];
let index = fruitss.indexOf("mango");
/* if (index === -1) {
    console.log("This fruit does not exist in the array");
}
else {
    console.log("This fruit does exist in the array");
}
 */
//burada ternary operatorude kullanabiliriz
index === -1 ? console.log("Bu meyve dizimizde mevcut degildir") : console.log("Bu meyve dizimizde mevcuttur ve index degeri : " + index);

// dizide bir avocado olup olmadığını kontrol edelim
let indexNotFound = fruitss.indexOf("avocado");
indexNotFound == -1 ? console.log("not found") : console.log("found is " + indexNotFound);

//Dizinin içindeki son indexe ulaşmak
//lastIndexOF

const lastNumb = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(lastNumb.lastIndexOf(2));
console.log(lastNumb.lastIndexOf(0));
console.log(lastNumb.lastIndexOf(1));
console.log(lastNumb.lastIndexOf(3));
console.log(lastNumb.lastIndexOf(4));

//includes
let numLast = [1, 2, 3, 4, 5];
console.log(numLast.includes(5));
console.log(numLast.includes(2));
console.log(numLast.includes(0));
console.log(numLast.includes(1));
console.log(numLast.includes(89));

const web = ["HTML", "CSS", "Js", "React"];
console.log(web.includes("HTML"));
console.log(web.includes("Node"));

numLast = [1, 2, 3, 4, 5];
console.log(Array.isArray(numLast));

const number = 100;
console.log(Array.isArray(number));

//toString
numLast = [1, 2, 3, 4, 5];
console.log(numLast);
console.log(numLast.toString());

const names = ["Elif", "Marali"];
console.log(names);
console.log(names.toString());

//join
const name = ["Elif", "Marali", "Marali", "Marali", "Marali", "Marali"];
console.log(name);
console.log(name.join());
console.log(name.join(""));
console.log(name.join(" "));
console.log(name.join(" , "));
console.log(name.join(" # "));


//slice

const newNumb = [1, 2, 3, 4, 5];
const neww = newNumb.slice(); // Bütün öğeyi kopyalar
const newww = newNumb.slice(0); //Bütün öğeyi kopyalar
const newwww = newNumb.slice(0, newNumb.length) //Bütün öğeyi kopyalar
const newwwww = newNumb.slice(1, 4); // [2,3,4]
console.log(neww, newww, newwww, newwwww);

/* //splice

const sayilar = [1, 2, 3, 4, 5];
console.log(sayilar.splice());// -> Bütün elemanları kaldırır
console.log(sayilar.splice(0, 1));
console.log(sayilar.splice(3, 3, 7, 8, 9)); */

//push ve pop
let arr8 = ["item1", "item2", "item3"];
arr8.push("new item");
console.log(arr8);

let arr9 = [1, 2, 3, 4, 5];
arr9.push(6);
console.log(arr9);

arr9.pop();
console.log(arr9);
arr9.pop();
console.log(arr9);
arr9.pop();
console.log(arr9);


let newFruits = ["banana", "orange", "mango", "pineapple", "apple"];
newFruits.push("lemon");
console.log(newFruits);
newFruits.push("lime");
console.log(newFruits);
newFruits.pop();
console.log(newFruits);
newFruits.pop();
console.log(newFruits);
newFruits.pop();
console.log(newFruits);


//shift

const numbers3 = [1, 2, 3, 4, 5];
numbers3.shift();
console.log(numbers3);
numbers3.shift();
console.log(numbers3);

//unshift
numbers3.unshift(44);
console.log(numbers3);
numbers3.unshift(1231244);
console.log(numbers3);


//reverse
numbers3.reverse();
console.log(numbers3);

const webTechss = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
webTechss.sort();
console.log(webTechss);
webTechss.reverse();
console.log(webTechss);

//Dizi içinde diziler
//Diziler farklı veri tiplerinde elemanları ve yeni bir dizi de depolayabilirler

const firstNumbers = [1, 2, 3]
const secondNumbers = [1, 4, 9]
const arrayOfArray = [[1, 2, 3], [1, 2, 3]];
console.log(arrayOfArray[0]);
console.log(arrayOfArray[1]);

const frontEnd = ["HTML", "CSS", "JS", "React"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
console.log(fullStack.length);
console.log(fullStack[0]);
console.log(fullStack[1]);
