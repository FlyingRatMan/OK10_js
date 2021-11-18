// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    let answer = a * b;
    return answer;
}

console.log(square(2, 4))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;

function squareSirc(r) {
    let answer = PI * r ** 2;
    return answer;
}

console.log(squareSirc(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCilind(h, r) {
    return 2 * PI * r * (r + h);
}

console.log(squareCilind(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
function outArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

let nums = [1, 3, 5];
outArr(nums);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function parag(text) {
    document.write(`<p>${text}</p>`);
}

parag('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listItem(li) {
    document.write(`<ul>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`</ul>`);
}

listItem('copy hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list(rep, li) {
    document.write(`<ul>`);
    for (let i = 0; i < rep; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}

list(3, 'okten');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function print(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}

let array = [1, 'string', true];
print(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function printOut(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}: ${arrElement.name} - ${arrElement.age}</div>`);
    }
}

let arrToPrint = [
    {id: 1, name: 'Olya', age: 26},
    {id: 1, name: 'Olya', age: 26},
    {id: 1, name: 'Olya', age: 26}
];

printOut(arrToPrint)