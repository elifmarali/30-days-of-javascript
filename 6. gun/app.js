//for
/* for (let i = 0; i <= 5; i++) {
    console.log(i);
}
for (let i = 5; i >= 0; i--) {
    console.log(i);
} */

/* for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
} */

/* const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"]
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase());
}
console.log(countries);
console.log(newArr); */

/* //Dizideki tüm elemanları toplama
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); */

/* //Mevcut diziyi temel alan yeni bir dizi oluşturma
let numbers = [1, 2, 3, 4, 5];
let newArr = [];
for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] ** 2);
}
console.log(newArr); */

/* //dizideki tum string degerleri kucuk harfe cevirerek yeni bir dizi olusturma
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
let countriesArr = [];
for (let i = 0; i < countries.length; i++) {
    countriesArr.push(countries[i].toLowerCase());
}
console.log(countriesArr); */


/* //while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
 */

/* //do while loop
let i = 0
do {
    console.log(i);
    i++
} while (i <= 5) */

/* //for of loop
for(const element of array){
    //uygulamak istedigimiz kod
} */

const number = [1, 2, 3, 4, 5];
/* for (const num of number) {
    console.log(num);
}

for (const num of number) {
    console.log(num * num);
} */
// array içindeki tüm nsayıları toplama

/* let sum = 0;
for (const num of number) {
    sum += num;
}
console.log(sum);

 */
/*
const webTechs = ["Html", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
for (const tech of webTechs) {
    console.log(tech.toUpperCase());
}

for (const tech of webTechs) {
    console.log(tech[0]);
}
 */

/* //break
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
} */

//continue
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}