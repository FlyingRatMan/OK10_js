// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let arrEven = [];
// for (let i = 1; i < 25; i++) {
//     arrEven[i-1] = i * 2;
// }
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arrOdd = [];
// for (let i = 0; i < 25; i++) {
//     arrOdd[i] = i * 2 + 1;
// }
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arrRand = [];
// for (let i = 0; i < 20; i++) {
//     arrRand[i] = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 15);
// }
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arrRandom = [];
// for (let i = 0; i < 20; i++) {
//     arrRandom[i] = Math.floor(Math.random() * (733 - 8)) + 8;
// }
// console.log(arrRandom)
// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 2; i < arrRandom.length; i+=3) {
//     console.log(arrRandom[i])
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 2; i < arrRandom.length; i+=3) {
//     if (arrRandom[i] % 2 === 0) {
//         console.log(arrRandom[i])
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArr = [];
// for (let i = 2; i < arrRandom.length; i+=3) {
//     if (arrRandom[i] % 2 === 0) {
//         console.log(arrRandom[i])
//         newArr.push(arrRandom[i])
//     }
// }
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// for (let i = 0; i < arrRandom; i++) {
//     if (arrRandom[i] % 2 === 0) {
//         console.log(arrRandom[i - 1])
//     }
// }
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arrCount = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < arrCount.length; i++) {
//     sum = sum + arrCount[i];
// }
// let average = sum / arrCount.length;
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [];
// for (let i = 0; i < 6; i++) {
//     array[i] = Math.floor(Math.random() * 10);
// }
// let newArray = [];
// for (let j = 0; j < array.length; j++) {
//     newArray[j] = array[j] * 5;
// }
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arrOfRand = [13, 'string', 34, '35', true];
// let arrOfNums = [];
// let j = 0;
// for (let i = 0; i < arrOfRand.length; i++) {
//     if (typeof arrOfRand[i] === "number") {
//         arrOfNums[j] = arrOfRand[i];
//         j++;
//     }
// }
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
let usersWithCities = [];
let k = 0;
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[k] = usersWithId[i];
            usersWithCities[k].address = citiesWithId[j];
            k++;
        }
    }
}
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numArr = [];
for (let i = 0; i < 11; i++) {
    numArr[i] = Math.floor(Math.random() * 10)
}
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
        console.log(numArr[i])
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let emptyNumArr = [];
for (let i = 0; i < numArr.length; i++) {
    emptyNumArr[i] = numArr[i]
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let wordArr = [ 'a', 'b', 'c'];
let string = '';
for (let i = 0; i < wordArr.length; i++) {
    string = string + wordArr[i]
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let q = 0;
while (q < wordArr.length) {
    string = string + wordArr[q];
    q++
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (const str of wordArr) {
    string = string + str;
}