//level1
//1
//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/* let age = parseInt(prompt("enter your age"));
if (age >= 18) {
    console.log("You are old enough to drive");
}
else {
    let years = 18 - age;
    console.log(`You are left with ${years} years to drive`);
} */

//2
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/* let yourAge = parseInt(prompt("Enter your age"));
let myAge = 20;
if (myAge < yourAge) {
    let fark = yourAge - myAge;
    console.log(`You are ${fark} years older than me.`);
}
else if (myAge > yourAge) {
    let fark = myAge - yourAge;
    console.log(`I'm ${fark} years older than your.`);
}
else {
    console.log(`We are ${myAge} years old.`);
} */

//3
//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else
//ternary operator.

/* let a = 4;
let b = 3;
a > b ? console.log("a is greater than b") : console.log("a is less than b"); */


//4
//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/*
let numb = parseInt(prompt("enter a number"));
numb % 2 == 0 ? console.log("number is an even number") : console.log("number is an odd number"); */


//level 2
//1
/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F */
/* let score = parseInt(prompt("enter a score"));
switch (true) {
    case score <= 100 && score >= 80:
        console.log("A");
        break;
    case (score <= 79 && score >= 70):
        console.log("B");
        break;
    case (score <= 69 && score >= 60):
        console.log("C");
        break;
    case (score <= 59 && score >= 50):
        console.log("D");
        break;
    case (score <= 49 && score >= 0):
        console.log("F");
        break;
    default:
        console.log("Gecerli bir not degeri giriniz");
} */

//1. sorunun fonksiyonlu cozumu
/* let getGrade = (score) => {
    let grade;
    switch (true) {
        case score <= 100 && score >= 80:
            grade = "A";
            break;
        case score <= 79 && score >= 70:
            grade = "B";
            break;
        case score <= 69 && score >= 60:
            grade = "C";
            break;
        case score <= 59 && score >= 50:
            grade = "D";
            break;
        case score <= 49 && score >= 0:
            grade = "F";
            break;
        default:
            grade = "Invalid score";

    }
    return grade;
}
console.log(getGrade(79));
console.log(getGrade(-1));
console.log(getGrade(100));
console.log(getGrade(40));
console.log(getGrade(60)); */


//2
/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

/* let month = prompt("ay giriniz");
newName=month.charAt(0).toUpperCase() + month.slice(1)
let season;
switch (month) {
    case "September" || "October" || "November":
        console.log("Autumn");
        break;
    case "December" || "January" || "February":
        console.log("Winter");
        break;
    case "March" || "April" || "May":
        console.log("Spring");
        break;
    case "June" || "July" || "August":

        console.log("Summer");
        break;
    default:
        season = "Invalid season"
        console.log(season);
}

 */
//3
/* Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.

What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day. */

/* const day = prompt("What is the day today").toLowerCase();
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
for (let i = 0; i < days.length; i++) {
    if (days[i] === day) {
        if (days[i] === "sunday" || days[i] === "saturday") {
            console.log(`${days[i].charAt(0).toUpperCase()}${days[i].slice(1)} is a weekend`);
        }
        else {
            console.log(`${days[i].charAt(0).toUpperCase()}${days[i].slice(1)} is a working day`);
        }
    }
    else {
        console.log(`${day.charAt(0).toUpperCase()}${day.slice(1)} is invalid`);
    }
    break;
}
 */


//3 level
//1

/* Bir aydaki gün sayısını söyleyen bir program yazın.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */


let month = prompt("Enter a month").toLowerCase();
let months = ["ocak", "subat", "mart", "nisan", "mayis", "haziran", "temmuz", "agustos", "eylul", "ekim", "kasim", "aralik"];
let dayNumb;
for (let i = 0; i < months.length; i++) {
    if (months[i] === month) {
        if (months[i] === "ocak" || months[i] === "mart" || months[i] === "mayis" || months[i] === "temmuz" || months[i] === "agustos" || months[i] === "ekim" || months[i] === "aralik") {
            dayNumb = 31;
        }
        else if (months[i] == "subat") {
            dayNumb = 29;
        }
        else {
            dayNumb = 30;
        }
        break;
    }
    else {
        dayNumb = "invalid month"
    }
}
console.log(dayNumb);
