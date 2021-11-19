// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function show(a, b) {
    if (b === undefined) {
        console.log(a)
    } else {
        console.log(a + b)
    }
}

show('hello', 'okten');
show('bye');
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sum(arr, array) {
    let sumArr = arr.map((num, i) => num + array[i]);
    // let sumArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     sumArr.push(arr[i] + array[i]);
    // }
    console.log(sumArr)
}

sum([1, 2, 3], [4, 5, 6])
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
function key(arr) {
    let keys = [];
    for (const item of arr) {
        keys = keys.concat(Object.keys(item))
    }
    console.log(keys)
}

key([{name: 'Dima', age: 13}, {model: 'Camry'}])
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function values(arr) {
    let values = [];
    for (const item of arr) {
        values = values.concat(Object.values(item));
    }
    console.log(values)
}

values([{name: 'Dima', age: 13}, {model: 'Camry'}])
