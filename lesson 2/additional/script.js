// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('It is a big array. More than 3 elements.');
} else {
    console.log('It is a small array. Less than 3 elements.');
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let a = 9;
let b = 5;
let c = 1;

if ((a > b && a < c) || (a > c && a < b)) {
    console.log(a);
} else if ((b > a && b < c) || (b > c && b < a)) {
    console.log(b);
} else {
    console.log(c);
}

// let middle = a;
//
// if (middle < b) {
//     if (middle > c) {
//         middle = a;
//     } else if (middle < c) {
//         if (c < b) {
//             middle = c;
//         } else {
//             middle = b;
//         }
//     }
// } else if (middle > b) {
//     if (middle < c) {
//         middle = a;
//     } else if (middle > c) {
//         if (c > b) {
//             middle = c;
//         } else {
//             middle = b;
//         }
//     }
// }
// console.log(middle)

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

console.log(a + b < 4 ? 'Мало' : 'Багато');

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let num = 100;
let sign = Math.sign(num);
sign === 0 ? 'zero' : sign === -1 ? 'negative' : 'positive';

num < 0 ? 'negative' : num > 0 ? 'positive' : 'zero';