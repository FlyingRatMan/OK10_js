// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let square = (a, b) => a * b;
square(2, 4);
// - створити функцію яка обчислює та повертає площу кола
const PI = 3.14;
let squareSirc = r => PI * r ** 2;
squareSirc(3);
// - створити функцію яка обчислює та повертає площу циліндру
let squareCilind = (h, r) => 2 * PI * r * (r + h);
squareCilind(5, 2);
// - створити функцію яка приймає масив та виводить кожен його елемент
let outArr = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
};

let nums = [1, 3, 5];
outArr(nums);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let parag = text => document.write(`<p>${text}</p>`);
parag('hello');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listItem = li => {
    document.write(`<ul>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`</ul>`);
};

listItem('copy hello');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list = (rep, li) => {
    document.write(`<ul>`);
    for (let i = 0; i < rep; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
};

list(3, 'okten');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let print = arr => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
};

let array = [1, 'string', true];
print(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let printOut = arr => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}: ${arrElement.name} - ${arrElement.age}</div>`);
    }
};

let arrToPrint = [
    {id: 1, name: 'Olya', age: 26},
    {id: 1, name: 'Olya', age: 26},
    {id: 1, name: 'Olya', age: 26}
];

printOut(arrToPrint);