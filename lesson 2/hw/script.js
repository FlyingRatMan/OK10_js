// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.floor(Math.random() * 60);
if (time <= 15) {
    console.log('morning');
} else if (15 < time && time <= 30) {
    console.log('lunch');
} else if (30 < time && time <= 45) {
    console.log('evening');
} else {
    console.log('night');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.floor(Math.random() * 31) + 1;
if (day <= 10) {
    console.log('first');
} else if (10 < day && day <= 20) {
    console.log('second');
} else {
    console.log('third');
}

// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test;
if (test !== true) {
    console.log('correct test');
} else {
    console.log('wrong test');
}

test = true;
console.log(test ? 'wrong test' : 'correct test');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
let result = a === !0 ? 'correct a' : 'wrong a';
console.log(result);
a = 0;
a = -3;

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let myWeek = prompt('Which day?');
switch (myWeek) {
    case '1':
        document.write('It is Monday. Study programming!!!');
        break;
    case '2':
        document.write('It is Tuesday. Study programming!!!');
        break;
    case '3':
        document.write('It is Wednesday. Study programming!!!');
        break;
    case '4':
        document.write('It is Thursday. Study programming!!!');
        break;
    case '5':
        document.write('It is Friday. Study programming!!!');
        break;
    case '6':
        document.write('It is Saturday. Study programming!!!');
        break;
    case '7':
        document.write('It is Sunday. Study programming!!!');
        break;
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = 1995;
if (year % 2 === 0) {
    console.log('intercalary year');
} else {
    console.log('normal year');
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let question = prompt('Яка «офіційна» назва JavaScript?');
if (question === 'ECMAScript') {
    document.write('You are right!');
} else {
    document.write('Do not know? ECMAScript!');
}