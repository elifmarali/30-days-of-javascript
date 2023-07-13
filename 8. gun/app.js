//object
//bos nesne olusturmak 
/* const person = {}; */

//Degerlerle nesne olusturmak
let person = {
    firstName: "Elif",
    lastName: "Marali",
    age: 20,
    country: "Turkey",
    city: "Istanbul",
    skills: ["Html", "Css", "JavaScript", "React"],
    isMarried: false
}
console.log(person);

//nesneden degerleri alabilmek
//nesneden degerleri alabilmek icin iki farkli yontemimiz vardir
person = {
    firstName: "Elif",
    lastName: "Marali",
    age: 20,
    country: "Turkey",
    city: "Istanbul",
    skills: ["Html", "Css", "Javascript", "React"],
    isMarried: false,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    "phoneNumber": "+95236127319",
    "phone number 2": "+081293712"
}

//ilk olarak "." operatorunu kullanarak erisebiliriz
console.log(person.firstName); //Elif
console.log(person.lastName);//Marali
console.log(person.age);//20
console.log(person.location);//undefined


//ikinci yontem olan koseli parantez yontemini kullanalim
console.log(person["firstName"]);//Elif
console.log(person["lastName"]);//Marali
console.log(person["age"]);//20
console.log(person["location"]);//undefined
//eger telefon numarasi bu sekilde tanimlanmissa boyle de ulasabiliriz ancak altindaki gibi ayri olarak yazilarak
//tanimlandiysa bunu sadece koseli paramtez yontemliyle ulasabiliriz
console.log(person.phoneNumber);
console.log(person["phone number 2"]);

console.log(person.getFullName());

//nesnede yeni keyler olusturma
person.title = "Software Engineer"
person.country = "Finland"
person.country = "Turkey"
console.log(person);
console.log(person.title);
person.skills.push("Sass")
console.log(person["skills"]);

person.getPersonInfo = function () {
    let skillsFirst = this.skills.splice(0, this.skills.length - 1).join(", ");
    let skillsLast = this.skills.splice(0);
    let fullSkils = `${skillsFirst} and ${skillsLast}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}. She live in ${this.country}. She teaches ${fullSkils}.`
    return statement
}
console.log(person.getPersonInfo());

//object metotlari
//Object.assign:Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır

const copyPerson = Object.assign({}, person)
console.log(copyPerson);

// Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır
//once anahtarlarini alalim
const keys = Object.keys(copyPerson);
console.log(keys);
//ozelliklerini/ adreslerini alalim

if (copyPerson.address !== undefined && copyPerson.address !== null) {
    const address = Object.keys(copyPerson.address);
    console.log(address);
} else {
    if (copyPerson.address !== undefined) {
        console.log("Address property is undefined");
    }
    else {
        console.log("Address property is null");
    }
}

//Object.values: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır
const values = Object.values(copyPerson)
console.log(values);

//Object.entries: Bir dizideki key ve value değerlerini almak için kullanılır

const entries = Object.entries(copyPerson)
console.log(entries);
person.skills.push("Html", "Css", "JavaScript", "React")
console.log(person["skills"]);

//hasOwnProperty: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır
console.log(copyPerson);
console.log(copyPerson.hasOwnProperty('firstName'));
console.log(copyPerson.hasOwnProperty("Elif"));
console.log(copyPerson.hasOwnProperty("phone number 2"));
console.log(copyPerson.hasOwnProperty("Turkey"));
console.log(copyPerson.hasOwnProperty("city"));
