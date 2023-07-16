//level 1
//1. Create an empty object called dog
let dog = {};
// 2. Print the the dog object on the console
console.log(dog);
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "J.getDogInfoasper";
dog["legs"] = 4;
dog.color = "brown";
dog.age = 4;
dog.bark = function () {
    return "woof woof"
}
// 4. Get name, legs, color, age and bark value from the dog object
console.log(Object.values(dog));
// 5.Set new properties the dog object: breed, getDogInfo
dog.bread = "german shepherd";
dog.getDogInfo = function () {
    let dogInfo = `It name is ${dog.name} and  color is ${dog.color}. It is ${dog.age} years old. ${dog.name} has ${dog.legs} legs. ${dog.name}  says "${dog.bark()}".`
    return dogInfo;
}

console.log(dog.getDogInfo());

//level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// 2.1
//Find the person who has many skills in the users object.
// 5 ten fazla yetenegi olan kisilerin ismini yazdir

let findToSkillsNames = [];
for (const property in users) {
    if (users[property].skills.length > 5) {
        findToSkillsNames.push(property);
    }
}

console.log(findToSkillsNames);

// en fazla sayida yetenegi olan kullaniciyi konsola yazdiran fonkisyonu yaz
function maxFindToSkillsNames(obj) {
    let winner; //kazanan kisi 
    let max = 0; // max skill miktari
    for (const property in obj) {
        if (max < obj[property].skills.length) {
            max = obj[property].skills.length;
            winner = property;
        }
    }
    return `${max} yetenek ile kazanan ${winner}`
}

console.log(maxFindToSkillsNames(users));

//3
//Find people who are MERN stack developer from the users object
const mernStackSkills = ["MongoDB", "Express", "React", "Node"];
const userNames = Object.keys(users);
const mernStackDev = [];
userNames.forEach(userName => {
    let userSkills = users[userName].skills;
    if (mernStackSkills.every(tech => (userSkills.includes(tech)))) {
        mernStackDev.push(userName)
    }
})
console.log(mernStackDev);




// 4. 
//Set your name in the users object without modifying the original users object

let newUsersObject = Object.assign({}, users)
newUsersObject["Elif Marali"] = new Object; //kullanicilar nesnesine yeni bir obje ekler orijinalini degistirmeden
console.log(newUsersObject);
newUsersObject["Elif Marali"].email = "elifamalkda@gmail.com";

//5.
//Get all keys or properties of users object
let usersKeys = Object.keys(users);
console.log(usersKeys);
//2. yontem
const keysOfUsersObject = Object.keys(users);

//6.
//Get all the values of users object

let usersValues = Object.values(users)
console.log(usersValues);
// 2.yontem
keysOfUsersObject.forEach(keys => console.log(users[keys]))


//7.
//Use the countries object to print a country name, capital, populations and languages.

const countries = {
    countryName: "India",
    capital: "Delhi",
    population: "8 Bilion",
    languages: "More than 55 languages were spoken",
    getInformation: function () {
        return `${this.countryName} is a country with more than ${this.population}, it isa capital of ${this.capital} and ${this.languages}`
    }
}
console.log(countries.getInformation());

//level 3
//1
/* Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and 
it has totalIncome, totalExpense, accountInfo,addIncome, addExpense 
and accountBalance methods. Incomes is a set of incomes and 
its description and expenses is a set of incomes and its description. */

const personAccount = {
    firstName: "Elif",
    lastName: "Marali",
    incomes: {
        salary: 5000,
        sales: 2000,
        courses: 1000
    }, //gelir, kazanc //8000 gelir
    expenses: {
        kitchenShopping: 1750,
        clothingShopping: 1000,
        rent: 2250
    }, //masraflar // 5000 gider
    totalIncome: function () {
        let total = 0;
        for (let income in this.incomes) {
            total += this.incomes[income];
        }
        return total;
    },
    totalExpenses: function () {
        let total = 0;
        for (let expense in this.expenses) {
            total += this.expenses[expense];
        }
        return total;
    },
    //hesap bilgisi
    accountInfo: function () {
        return `Her name is ${this.firstName} and last name is ${this.lastName}. Her total incomes is ${this.totalIncome()} and total expenses is ${this.totalExpenses()}.`
    },
    //gelir ekleme
    addIncome: function (newIncomeNames, newIncomeAmount) {
        personAccount.incomes[newIncomeNames] = newIncomeAmount;
        return personAccount;
    },
    //hesap bakiyesi
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    }
}
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenses());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome("tutoring", 500));
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenses());
console.log("Available Balance: " + personAccount.accountBalance());
// 2. bir yontem olsun diye gosterdim tum fonskiyonlari da nesne icinde yazicaz hem bu daha kolay olacak
/* function totalIncome2() {
    const personTotalIncome = Object.values(personAccount.incomes);
    let totalIncome = 0;
    for (let income in personTotalIncome) {
        totalIncome += personTotalIncome[income];
    }
    return totalIncome;
}
console.log(totalIncome2());
 */


//2.
//Imagine you are getting the above users collection from a MongoDB database.
const usersData = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
function createAccount() {
    let randomIdChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let randomPasswordChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDate = now.getDate();
    let nowHours = now.getHours();
    let nowMinute = now.getMinutes();
    let fullDate = `${nowDate}/${nowMonth}/${nowYear} ${nowHours}:${nowMinute}`
    let randomId = "";
    let randomPassword = "";
    let randomNumb;
    for (let i = 0; i < 6; i++) {
        randomNumb = Math.floor(Math.random() * randomPasswordChars.length);
        randomPassword += randomPasswordChars[randomNumb];
    }
    for (let i = 0; i < 6; i++) {
        randomNumb = Math.floor(Math.random() * randomIdChars.length);
        randomId += randomIdChars[randomNumb];
    }
    let username = prompt("Please enter username: ")
    let email = prompt("Please enter email: ")
    let isLoggedIn = true;
    usersData.push({ _id: randomId, username: username, email: email, password: randomPassword, createdAt: fullDate, isLoggedIn: isLoggedIn })
    return usersData;
}
function signUp() {
    let username = prompt("Enter your username");
    let email = prompt("Enter your email address");
    let foundUser = usersData.find(user => user.username === username && user.email === email);
    if (foundUser) {
        console.log(`Daha onceden kayit olusturulmustur. Kayitli bilgileriniz; id: ${foundUser["_id"]} username: ${foundUser["username"]} email: ${foundUser["email"]} createdAt: ${foundUser["createdAt"]}`);
    }
    else {
        console.log("Daha onceden kayit olusturulmamistir.Lutfen yeni kullanici olusturunuz");
        console.log(createAccount());
    }
}
signUp()

//3
//The products array has three elements and each of them has six properties.
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]


//3.a. Create a function called rateProduct which rates the product
/* Soruda, rateProduct adında bir fonksiyon oluşturmanız isteniyor. Bu fonksiyon, kullanıcıya belirli bir ürüne puan verme işlemini gerçekleştirmeli. 
Fonksiyonun alması gereken parametreler ise urunId, kullaniciId ve puan. Yani, fonksiyonu çağırırken bu üç değeri vermeniz gerekiyor. 
Fonksiyon içinde, verilen urunId'ye sahip ürünü bulmalı, kullanıcının daha önce bu ürüne puan verip vermediğini kontrol etmeli ve 
verdiği puanı güncellemeli veya yeni bir puan eklemeli. 
Fonksiyonun çıktısı olarak, ekrana "Puan güncellendi" veya "Puan eklendi" mesajlarını yazdırmalısınız. */
