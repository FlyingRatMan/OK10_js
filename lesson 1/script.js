// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

let greet = 'hello';
let name = 'owu';
let com = 'com';
let ua = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;

console.log(`${greet} ${name} ${com} ${ua}`);
alert(`${greet} ${name} ${com} ${ua}`);
document.write(`${greet} ${name} ${com} ${ua}`);

console.log(greet);
alert(greet);
document.write(greet);

console.log(name);
alert(name);
document.write(name);

console.log(com);
alert(com);
document.write(com);

console.log(ua);
alert(ua);
document.write(ua);

console.log(num1);
alert(num1);
document.write(num1);

console.log(num2);
alert(num2);
document.write(num2);

console.log(num3);
alert(num3);
document.write(num3);

console.log(num4);
alert(num4);
document.write(num4);

console.log(num5);
alert(num5);
document.write(num5);

console.log(num6);
alert(num6);
document.write(num6);

console.log(num7);
alert(num7);
document.write(num7);

console.log(bool1);
alert(bool1);
document.write(bool1);

console.log(bool2);
alert(bool2);
document.write(bool2);

greet = 'whats up?';
name = 'okten';
num1 = '1';
num2 = '10';
num3 = '-999';
num4 = '123';
num5 = '3.14';
num6 = '2.7';
num7 = '16';
bool1 = 73;
bool2 = '';

console.log(greet);
alert(greet);
document.write(greet);

console.log(name);
alert(name);
document.write(name);

console.log(com);
alert(com);
document.write(com);

console.log(ua);
alert(ua);
document.write(ua);

console.log(num1);
alert(num1);
document.write(num1);

console.log(num2);
alert(num2);
document.write(num2);

console.log(num3);
alert(num3);
document.write(num3);

console.log(num4);
alert(num4);
document.write(num4);

console.log(num5);
alert(num5);
document.write(num5);

console.log(num6);
alert(num6);
document.write(num6);

console.log(num7);
alert(num7);
document.write(num7);

console.log(typeof bool1);
alert(typeof bool1);
document.write(typeof bool1);

console.log(typeof bool2);
alert(typeof bool2);
document.write(typeof bool2);

let firstName = 'Olga';
let middleName = 'Dmitrievna';
let lastName = 'Purtova';
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

let yourName = prompt('Enter your name', 'Olya');
let secondName = prompt('Enter your second name', 'Dmitrievna');
let age = prompt('Enter your age', '26');
console.log(`Вітаю ${yourName} ${secondName}. Тобі ${age} років`);

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

5 !== 6 -> true
5 >= 6 -> false
5 === 6 -> false
5 > 6 -> false
10 === 10 -> true
10 >= 10 -> true
10 !== 10 -> false
10 > 10 -> false
10 < 10 -> false
123 === '123' -> false
123 !== '123' -> true