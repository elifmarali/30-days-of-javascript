let challenge="30 Days Of JavaScript";
console.log(challenge.length);//uzunlugunu ogren
console.log(challenge.toUpperCase());// hepsini buyuk harf yap
console.log(challenge.toLowerCase());// hepsini kucuk harf yap
console.log(challenge.substring(0,7));// 0. indexten 7. indexe kadar yazdir ---> 30 Days
console.log(challenge.slice(3,challenge.length));// 3. indexten sona kadar yazdir  --->Days Of JavaScript
console.log(challenge.includes("Script")); // icerisinde "Script" bulunuyor mu ---> True
console.log(challenge.split(" "));// " " olan yerden ayirarak dizi olustur ---> (4) ['30', 'Days', 'Of', 'JavaScript']
let array=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]; //dizi olustur
console.log(challenge.replace("JavaScript","Python"));//"javascript" i "python" s cevir bir kerelik ---> 30 Days Of Python
console.log(challenge.charAt(15));//15. indekste ne bulunur ---> S
console.log(challenge.charAt(11).charCodeAt());//11. karakterin ascii degeri -----> 74
console.log(challenge.indexOf("a"));//a nin ilf gectigi yer ---> 4
console.log(challenge.lastIndexOf("a"));//a en son kacinci indekstes kullanilmis ------>14

let string=' You cannot end a sentence with because because because is a conjunction ';
console.log(string.indexOf("because"));
console.log(string.lastIndexOf("because"));
console.log(string.search("because"));
console.log(string);
console.log(string.trim());//baslangictaki ve sondaki bosluklari sil
console.log(string.startsWith(" "));//baclangicta " " bulunuyor mu
console.log(string.startsWith(" Y"));//baclangicta " Y" bulunuyor mu
console.log(string.startsWith("can",5));// 5. indexten itibaren can bulunuyor mu
console.log(string.endsWith("tion "));//en sonda "tion" bulunuyor mu
console.log(challenge.match(/a/gi)); //ierisindeki tum a lari match methoduyla bul


let ilk=" 30 Days Of";
let son="JavaScript"
let full=`${ilk} ${son}`;
console.log(full);

console.log(full.repeat(2));