// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//    максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacture, year, maxspeed, engine) {
//     return {
//         model,
//         manufacture,
//         year,
//         maxspeed,
//         engine,
//         drive: function () {
//             return `їдемо зі швидкістю ${this.maxspeed} на годину`;
//         },
//         info: function () {
//             return this;
//         },
//         increaseMaxSpeed: function (newSpeed) {
//             return this.maxspeed = newSpeed;
//         },
//         changeYear: function (newValue) {
//             return this.year = newValue;
//         },
//         addDriver: function (driver) {
//             return this.driver = driver;
//         },
//     };
// }
//
// let myCar = new Car('Golf', 'Volkswagen', 2021, 200, 2);
// console.log(myCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, manufacture, year, maxspeed, engine) {
//         this.model = model;
//         this.manufacture = manufacture;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         return `їдемо зі швидкістю ${this.maxspeed} на годину`;
//     }
//
//     info() {
//         return this;
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         return this.maxspeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         return this.year = newValue;
//     }
//
//     addDriver(driver) {
//         return this.driver = driver;
//     }
// }
//
// let myCar = new Car('Golf', 'Volkswagen', 2021, 200, 2);
// console.log(myCar.drive());

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arrOfCinderelas = Array(10)
    .fill()
    .map((_, i) => new Cinderella(`Cinderella ${i}`, Math.floor(Math.random() * (30 - 18)) + 18, Math.floor(Math.random() * (12 - 7)) + 7));

let matthew = new Prince('Matthew', 31, 7);

let msg = 'unlucky bro';
for (let i = 0; i < arrOfCinderelas.length; i++) {
    if (matthew.size === arrOfCinderelas[i].size) {
        msg = arrOfCinderelas[i].name;
        break;
    }
}
console.log(arrOfCinderelas);
console.log(msg);

let theOne = arrOfCinderelas.find(cinderella => cinderella.size === matthew.size);
console.log(theOne || msg);