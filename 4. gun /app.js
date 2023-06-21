//if-else if -else
let isRaining = true;
if (isRaining) {
    console.log("yagmur yagiyor");
}
else {
    console.log("hava guneslidir");
}

let number = 3;
if (number == 5) {
    console.log("number 5 degerine esit degildir ve degeri = " + number);
}
else if (number < 5 && number > 5) {
    console.log("number 5 degerinden kucuktur veya buyuktur degeri = " + number);
}
else {
    console.log("number 3 degeridir");
}


let result = parseInt(prompt("5+2 nin cevabini giriniz", "5+2"));
/* if (result == 7) {
    console.log("dogru cevabi verdin cevap=7");
}
else {
    console.log("yanlis cevap girdin cevap=7 olacakti");
} */

//switch-case
switch (result) {
    case 7:
        console.log("dogru cevabi verdin cevap=7 - switch case");
        break;
    default:
        console.log("yanlis cevap girdin cevap=7 olacakti - switch case");
}

//ternary operators
isRaining = false ? "yagmur yagmiyor semsiyesiz cikabilirsin" : "yagmur yagiyor semsiyesiz cikmamalisin";

result = 7 ? "dogru cevap - ternary" : "yanlis cevap 7 olacakti- ternary";