const document = {};
document.write = console.log;

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let arr = [];
for (int = 0; int < 10; int++) {
    arr.push(Math.floor(Math.random() * 100));
}
let sum = (a, b) => a + b;
let result = (arr.reduce(sum));

let bookOne = {
    name: 'HarryPotter',
    pages: 98,
    genre: 'fantastic'
};

let bookTwo = {
    name: 'Crime and Punishment',
    pages: 98,
    genre: 'fantastic',
    authors: 'whoEver'
};

let arrBooks = [
    {
        name: '1984',
        pages: 98,
        genre: 'fantastic',
        authors: 'whoEver'
    },

    {
        name: 'To Kill a Mockingbird',
        pages: 98,
        genre: 'fantastic',
        authors: 'whoEver'
    },

    {
        name: 'Fahrenheit 451',
        pages: 98,
        genre: 'fantastic',
        authors: 'whoEver'
    }
]
for (const book of arrBooks) {
    document.write(
        `${book.name} ${book.pages} ${book.genre} ${book.authors}`
    )
}


let height = 23;
let width = 10;
let s = height * width;
console.log(s + 'cm');

let heightC = 10;
let dC = 4;
const PI = 3.14;
let v = PI * ((dC / 2) ** 2)  * heightC;
console.log(Math.floor(v) + 'm');

let n = 3;
let m = 4;
let k = Math.sqrt(n ** 2 + m ** 2);
console.log(k);