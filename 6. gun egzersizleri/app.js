/*
1. for döngüsünü kullanarak 0'dan 10'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
*/
let i = 10;
do {
    console.log(i);
    i++;
} while (i <= 10)

while (i <= 10) {
    console.log(i);
    i++;
}

/*
2. for döngüsünü kullanarak 10'dan 0'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
*/

do {
    console.log(i);
    i--;
} while (i >= 0)

while (i >= 0) {
    console.log(i);
    i--;
}

/*
3. for döngüsünü kullanarak 0'dan n'ye kadar yineleyin
*/

let n;/* = prompt("Please enter"); */
for (let i = 0; i <= n; i++) {
    console.log(i);
}
/*
4. console.log() kullanarak aşağıdaki kalıbı oluşturan bir döngü yazın:

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```
*/

for (let i = 0; i <= 7; i++) {
    console.log("#".repeat(i + 1));
}

/*
5. Aşağıdaki deseni yazdırmak için döngüyü kullanın:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```
*/

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

/*
6. Aşağıdaki deseni yazdırmak için döngüyü kullanın:

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```
*/
console.log("i" + "   " + "i^2" + "   " + "i^3");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}

/*
7. for döngüsü ile çift sayıları yazdırın
*/
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/*
8. for döngüsü ile tek sayıları yazdırın
*/

for (let i = 0; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

/* 
9. 0'dan 100'e kadar olan asal sayıları bir döngü yardımı ile ekrana yazdırın
*/
for (let i = 2; i <= 100; i++) {
    for (let j = 2; j <= 100; j++) {
        if (i % j != 0 && i == j) {
            console.log(i);
        }
    }
}

/* 10. 0 ile 100 arasındaki tüm sayıların toplamını ekrana yazıdırn */
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

let tekSayiTop = 0, ciftSayiTop = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        ciftSayiTop += i
    }
    else {
        tekSayiTop += i
    }
}
console.log("Çift sayıların toplamı", ciftSayiTop);
console.log("Tek sayıların toplamı", tekSayiTop);

/*
11. for döngüsü ile 1 den 100 e kadar olan çift ve tek sayıların toplamını bulun. Dizi olarak kaydedin

    ```sh
      [2550, 2500]
    ```
*/
let sumEvenOdd = [];
let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    }
    else {
        sumOdd += i;
    }
}
sumEvenOdd.push(sumEven);
sumEvenOdd.push(sumOdd);
console.log(sumEvenOdd);

/*
12. 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin(1-100 arasinda)
*/
let yeniDizi = [];
for (let i = 0; i < 5; i++) {
    yeniDizi.push(Math.floor(Math.random() * 101));
}
console.log(yeniDizi);


//level 2
/* 1. Herhangi bir sayıda rastgele id numarası atayan bir fonksiyon yazın */
// 6-11 uzunlunda rastegele id numarası atayan bir kod parcasi
let randomLength = Math.floor((Math.random() * 5) + 6);
let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(characters.length);
let randomId = "";
for (let i = 0; i < randomLength; i++) {
    let randomCharset = Math.floor(Math.random() * characters.length);
    randomId += characters[randomCharset];
}
console.log(randomId);

/* 2. Rastgele hexadecimal sayı üreten bir fonksiyon yazın. */
/* Hexadecimal format, 16'lık sayı sistemine dayanır ve her basamağı 
16'nın bir gücünü temsil eder. Sırasıyla 
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F şeklinde sembolleri kullanarak 
ifade edilen rakamların değerleri şu şekildedir
*/
/* 0 = 0
1 = 1
2 = 2
3 = 3
4 = 4
5 = 5
6 = 6
7 = 7
8 = 8
9 = 9
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15 */

let hexadecimalChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let length = Math.floor((Math.random() * 2) + 2);
let hexadecimalId = "";
for (let i = 0; i < length; i++) {
    let hexRandom = Math.floor(Math.random() * (hexadecimalChar.length));
    hexadecimalId += hexadecimalChar[hexRandom]
}
console.log(hexadecimalId);

/* 3. Rastgele bir rgb renk numarası oluşturan fonksiyon yazın.*/
// rgb(240,180,80)
let kontrol = true;
while (kontrol) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    console.log(`rgb(${red},${green},${blue})`);
    kontrol = false;
}


/* 4. Yukarıdaki array'i kullanarak rastgele yeni bir dizi oluşturun. */
let anaDizi = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let kopyaDizi = [...anaDizi]
let newArr = new Array();
for (let i = 0; i < 4; i++) {
    let rastgeleIndex = Math.floor(Math.random() * kopyaDizi.length);
    newArr.push(kopyaDizi[rastgeleIndex]);
    kopyaDizi.slice(rastgeleIndex, 1)

}
console.log(newArr);


/* 5.  Yukarıdaki array'i kullanarak ülkelerin harf uzunluklarını içeren bir dizi olşturun'. */
/* [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5] */
function lengthBulma() {
    let uzunluklar = []
    for (let i = 0; i < anaDizi.length; i++) {
        uzunluklar.push(anaDizi[i].length)
    }
    console.log(uzunluklar);
}

lengthBulma();

/* Yukarıdaki diziyi kullanarak aşağıdaki diziyi oluşturun:
```
[
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
  ```
*/

function bilgilendir() {
    for (let i = 0; i < anaDizi.length; i++) {
        console.log(`['${anaDizi[i].charAt(0).toUpperCase()}${anaDizi[i].slice(1, anaDizi[i].length).toLowerCase()}' , '${anaDizi[i].slice(0, 3).toUpperCase()}' , '${anaDizi[i].length}'],`);
    }
}
bilgilendir()


/* Yukarıdaki ülkeler dizisinde "land" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. 
"land" içeren ülkeler varsa bunu dizi halinde yazdırın. */