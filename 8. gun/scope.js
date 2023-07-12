/* a = 'JavaScript' // bir değişkeni let veya const anahtar kelimeleri olamadan tanımlamako değişkeni global hale getirir ve geçerli dosya içerisinde her yerden erişilebilir.
b = 5 // bu gloabl scope olarak tanımlanmıştır ve dosya içerisinde her yerden erişilebilir.
function letsLearnScope() {
    console.log(a, b);
    if (true) {
        console.log(a, b);
    }
}
console.log(a, b); //erisilebilir
 */

/* //global scope
let a = "JavaScript"; // bu dosyanin herhangi bir yerinde erisilebilecek global bir kapsamdir
let b = 10; //burada da ustteki durum mevcuttur
function letsLearnScope() {
    console.log(a, b); // javascript 10 erisilebilir
    if (true) {
        let a = "Python";
        let b = 100;
        console.log(a, b); // python 100 erisilebilir
    }
    console.log(a, b); // javascript 10
}

letsLearnScope()
console.log(a, b); // javascript 10

 */

/* // local scope
let a = "JavaScript"; // bu dosyanin herhangi bir yerinde erisilir global bir kapsamdir
let b = 10 // ayni sekilde
function letsLearnScope() {
    console.log(a, b);
    let value = false;
    // block scope
    if (true) {
        let a = "Python";
        let b = 20;
        let c = 30;
        let d = 40;
        value = !value;
        console.log(a, b, c, value); // Python 20 30 true
    }
    console.log(a, b, c, value);// JavaScript 10 undefined true
    //c değişkenine erişemiyoruz çünkü c değişkeni sadec if bloğunda geçerli bir değişkendir
}
letsLearnScope()
console.log(a, b); */

/* //var anahtar kelimesi ile tanımlanan bir değişken fonksiyon scope'u içerisinde geçerlidir.
function letsLearnScope() {
    var gravity = 9.81;
    console.log(gravity); //gosterilmez
}

if (true) {
    var gravity = 9.81;
    console.log(gravity); //9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
    console.log(i); // 0,1,2
}
console.log(i);//3 */

function letLearnScope() {
    const gravity = 9.81;
    console.log(gravity); //gosterilmedi
}
/* console.log(gravity);//Uncaught ReferenceError: gravity is not defined
 */
if (true) {
    const gravity = 9.81;
    console.log(gravity); //9.81
}
/* console.log(gravity);//Uncaught ReferenceError: gravity is not defined
 */
for (let i = 0; i < 3; i++) {
    console.log(i); //0,1,2
}
console.log(i);//Uncaught ReferenceError: i is not defined