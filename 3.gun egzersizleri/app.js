//level 1
let firstName = "elif",
    lastName = "marali",
    country = "Turkish",
    city = "istanbul",
    age = 20,
    isMarried = false,
    year = 2023;

console.log(`${firstName} - ${typeof (firstName)} 
${lastName} - ${typeof (lastName)}
${country} - ${typeof (country)}
${city} - ${typeof (city)}
${age} - ${typeof (age)}
${isMarried} - ${typeof (isMarried)}
${year} - ${typeof (year)}
`);

/* let num1 = 10, num2="10" , num3="9.8";
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
console.log(now.getTime())  */

//level 2
//ucgende alan
// let taban =parseInt(prompt("taban degerini giriniz"));
// console.log("Enter base: " + taban);
// let yukseklik = parseInt(prompt ("yukseklik degerini giriniz"));
// console.log("Enter height: " + yukseklik);
// let alan = taban * yukseklik * 0.5;
// console.log("The area of the triangle is " + alan);


/* //ucgende cevre
// let a= parseInt(prompt("ucgenin a kenar uzunlugunu giriniz")),
// b=parseInt(prompt("ucgenin b kenar uzunlugunu giriniz")),
// c=parseInt(prompt("ucgenin c kenar uzunlugunu giriniz"));
let cevre = a+b+c;
console.log(`Enter side a: ${a}
Enter side b: ${b}
Enter side c: ${c}
The perimeter of the triangle is ${cevre}`); */

/* //dikdortgen cevre ve alan
let dikdortgenUzun = prompt("uzun kenarin uzunlugunu giriniz"),
dikdortgenKisa = prompt("kisa kenarin uzunlugunu giriniz"),
dikdortgenCevre= (dikdortgenUzun*2 ) +  (dikdortgenKisa*2);
dikdortgenAlan = dikdortgenUzun* dikdortgenKisa;
console.log(dikdortgenCevre ,"=> dikdortgenCevre" , dikdortgenAlan , "=> dikdortgenAlan");
 */


/* //yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın
let pi = Math.PI;
let r= prompt("yaricap");
let daireAlan=pi*r*r;
let daireCevre = 2*pi*r;
console.log("Dairenin cevresi= ",daireCevre," Daire Alan= ",daireAlan); */

//y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
//slope bulmak icin => y2-y1 / x2-x1
//kesim noktlari icinde (0,y1) ,(x2,0)

/*
//Eğim m = (y2-y1)/(x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
let k1={x:2,y:2},
k2={x:6,y:10};
let slope= (k2.y-k1.y)/(k2.x-k1.x);
console.log(slope); */

/* //y'nin değerini hesaplayın (y = x2 + 6x + 9). Farklı x değerleri
//kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
let a = 1, b = 6, c = 9;
let delta = (b ** 2) - (4 * a * c);
let x1, x2;
if (delta < 0) {
    console.log("kok yoktur");
}
else if (delta == 0) {
    console.log("iki esit kok vardir");
    x1 = -b / (2 * a)
    x2 = x1;
}
else {
    console.log("iki farkli kok vardir");
    x1 = (-b + Math.pow(delta, 2)) / (2 * a);
    x2 = (-b - Math.pow(delta, 2)) / (2 * a);
}
console.log("x1=", x1, "x2=", x2); */

//İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse,
//kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
/* let kullaniciYas = prompt("yasinizi giriniz");
let yil = 18 - kullaniciYas
if (kullaniciYas < 18) {
    console.log(`Yasiniz ${kullaniciYas} oldugunzdan ehliyet almaniz icin  ${yil} yil sonra ehliyet alabilirsiniz`);
}
else {
    console.log(`Yasiniz ${kullaniciYas} oldugundan ehliyet alabilirsiniz`);
} */

//Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let now = new Date();
let years = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let readbles1 = `${years}-${month}-${date} ${hours}:${minutes}`
let readbles2 = `${date}-${month}-${years} ${hours}:${minutes}`
let readbles3 = `${date}/${month}/${years} ${hours}:${minutes}`
console.log(readbles1 + " " + readbles2 + " " + readbles3);
