// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a;
let b;
if (a > b) {
    console.log(a)
} else if (a === b) {
    console.log('equal')
} else {
    console.log(b)
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment;
if (apartment <= 20) {
    console.log('first')
} else if (apartment <= 48 && apartment > 20) {
    console.log('second')
} else if (apartment > 20 && apartment < 91) {
    console.log('third')
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number;
if (number === 10) {
    console.log('correct')
} else {
    console.log('wrong')
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x;
if (typeof x === typeof 1) {
    console.log('1')
} else if (typeof x === typeof '1') {
    console.log('2')
} else if (typeof x === typeof true) {
    console.log('3')
} else if (typeof x === typeof {} || typeof []) {
    console.log('4')
} else {
    console.log('idk whats that')
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temp;
if (temp >= 10 && temp <= 22) {
    console.log('go study')
} else {
    console.log('study from home')
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let prize;
switch (prize) {
    case '1':
        console.log('car');
        break;
    case '2':
        console.log('phone');
        break;
    case '3':
        console.log('laptop');
        break;
    case '4':
        console.log('flowers');
        break;
    case '5':
        console.log('camera');
        break;
    default:
        console.log('choose a number from 1 to 5');
}