//level 1
// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(3, 4));
console.log(addNumbers(5, 10));

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
//dikdortgen alani hesaplama
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
console.log(areaOfRectangle(5, 10));

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(5, 10));


//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
//dikdortgenler prizmasinin hacmi 
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    console.log("Volume", volume);
}
volumeOfRectPrism(5, 3, 10)


//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
//daire alani
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(3));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r;
    console.log(circumference);
}
circumOfCircle(5)

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
//yogunluk hesaplama
const density = (mass, volume) => {
    let density = mass / volume;
    return density
}
console.log(density(100, 5));

/*  10. Hız, hareketli bir nesnenin kat ettiği toplam mesafenin, alınan toplam süreye bölünmesiyle hesaplanır. 
Hareket eden bir cismin hızını, yani hızı hesaplayan bir fonksiyon yazınız. */
function hiz(toplamMesafe = 200, toplamSure = 2) {
    let hiz = toplamMesafe / toplamSure;
    return hiz;
}
console.log(hiz());
console.log(hiz(100, 5));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity = 9.81) {
    let weight = mass * gravity;
    console.log(`${mass} * ${gravity} = ${weight}`);
}
weight(100);

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oCValue = 20) {
    let oFValue = (oCValue * 9 / 5) + 32;
    console.log(`oC değeri: ${oCValue} - oF değeri: ${oFValue}`);
}
convertCelsiusToFahrenheit(10)
convertCelsiusToFahrenheit()


/* 
13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */
function BMI(age, kg, height) {
    let bmıDegrees = kg / (height * height);
    let bmı;
    if (age >= 20) {
        if (bmıDegrees < 18.5)
            bmı = "Underweight"
        else if (bmıDegrees >= 18.5 && bmıDegrees <= 24.9) {
            bmı = "Normal weigh"
        }
        else if (bmıDegrees >= 25 && bmıDegrees <= 29.9) {
            bmı = "Overweight"
        }
        else if (bmıDegrees <= 30) {
            bmı = "Obese"
        }
    }
    else {
        bmı = "BMI olcumu icin yasiniz musait degil";
    }
    return bmı;
}
console.log(BMI(15, 60, 1.60))
console.log(BMI(25, 60, 1.60))


//15
/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0 */

function findMax(num1, num2, num3) {
    let max = num1;
    let newNum1 = [];
    if (max < num2) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    newNum1.push(max);
    return newNum1;
}
console.log(findMax(3, 9, 1));

// ekstra: daha zor bir halini yapalim 
// dizi olarak alip num1, num2,num3 u siralayalim buyukten kucuge dizi olarak yazdiralim
function funcSort(num1, num2, num3) {
    let numm = [num1, num2, num3];
    let newNum = [];
    let num;
    if (num1 < num2) {
        let num = num1;
        num1 = num2;
        num2 = num;
    }
    if (num2 < num3) {
        let num = num2;
        num2 = num3;
        num3 = num;
    }
    if (num1 < num3) {
        let num = num1;
        num1 = num3;
        num3 = num;
    }
    newNum.push(num1, num2, num3);
    return newNum;
}
console.log(funcSort(3, 7, 2));

//level 2
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(x, y) {
    let a = 3, b = 2, c = 1;
    let linearEquation = a * x + b * y + c;
    console.log(linearEquation);
}
solveLinEquation(1, 2)

/* 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

 */

let solveQuadratic = (a, b, c) => {
    let result;
    if (a === undefined || b === undefined || c === undefined) {
        result = 0;
        return result;
    }
    if (a === 0) {
        result = "Girdiginiz a=0 degerinden dolayi bur bir ikinci dereceden denklem degildir Lütfen a katsayısını sıfırdan farklı bir değer olarak giriniz.";
        return result
    }
    let discriminant = b * b - (4 * a * c);
    if (discriminant < 0) {
        result = "Gercek kok yoktur";
    }
    else if (discriminant === 0) {
        let x = -b / (2 * a)
        result = x
    }
    else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = [x1, x2];
    }
    return result;
}

console.log(solveQuadratic())
console.log(solveQuadratic(1, 4, 4))
console.log(solveQuadratic(1, -1, -2))
console.log(solveQuadratic(1, 7, 12))
console.log(solveQuadratic(1, 0, -4))

//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += `${i}. index =  ${arr[i]}\n`
    }
    return result
}
console.log(printArray([1, 2, 7, 9, 12, 3]));

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

/* showDateTime()
08 / 01 / 2020 04: 08 */