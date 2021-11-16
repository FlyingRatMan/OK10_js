// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrNum = [1, 4, 73, 9, 104];
// console.log(arrNum);
// let arrStr = ['hello', 'nice', 'to', 'meet', 'you'];
// console.log(arrStr);
// let arrMix = [7, 'seven', '7', 0 === 0, NaN];
// console.log(arrMix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrEmpty = [];
// arrEmpty[0] = 1;
// arrEmpty[3] = 4;
// arrEmpty[6] = 7;
// console.log(arrEmpty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>something here</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>something here ${[i]}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let t = 1;
// while (t < 21) {
//     document.write(`<h1>some text here</h1>`);
//     t++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// while (t < 21) {
//     document.write(`<h1>some text here ${[t]}</h1>`);
//     t++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numArr = [1, 4, 73, 9, 104, 1, 4, 73, 9, 104];
// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let strArr = ['hello', 'nice', 'to', 'meet', 'you', 'hello', 'nice', 'to', 'meet', 'you'];
// for (let i = 0; i < strArr.length; i++) {
//     console.log(strArr[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let mixArr = [7, 'seven', '7', true, NaN, 7, 'seven', '7', false, NaN];
// for (let i = 0; i < mixArr.length; i++) {
//     console.log(mixArr[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let i = 0; i < mixArr.length; i++) {
    if (typeof mixArr[i] === typeof true) {
        console.log(mixArr[i])
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < mixArr.length; i++) {
    if (typeof mixArr[i] === typeof 1) {
        console.log(mixArr[i])
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let i = 0; i < mixArr.length; i++) {
    if (typeof mixArr[i] === typeof ' ') {
        console.log(mixArr[i])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let emptyArr = [];
emptyArr[0] = 1;
emptyArr[1] = 2;
emptyArr[2] = 3;
emptyArr[3] = '4';
emptyArr[4] = '5';
emptyArr[5] = '6';
emptyArr[6] = true;
emptyArr[7] = true;
emptyArr[8] = false;
emptyArr[9] = false;
for (let i = 0; i < emptyArr.length; i++) {
    console.log(emptyArr[i])
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 11; i++) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 101; i++) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 101; i += 2) {
    console.log(i);
    document.write(`${i}`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i < 101; i += 2) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i}`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 1; i < 101; i += 2) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`${i}`)
    }
}