// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = (a, b, c) => {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
};
console.log(minNum(3, 5, 1));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
};
console.log(maxNum(3, 5, 1));
// - створити функцію яка повертає найбільше число з масиву
let maxNumArr = arr => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
let arr = [3, 8, 1, 73, 10];
console.log(maxNumArr(arr));
// - створити функцію яка повертає найменьше число з масиву
let minNumArr = arr => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
console.log(minNumArr(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArr = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};
console.log(sumArr(arr));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let midSumArr = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
};
console.log(midSumArr(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxToMin = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const num of arg) {
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log(max);
    return min;
};
maxToMin(3, 8, 1, 73, 10);
// - створити функцію яка заповнює масив рандомними числами
let randomArr = [];
let randomPush = reps => {
    for (let i = 0; i < reps; i++) {
        randomArr.push(Math.floor(Math.random() * 10));
    }
};
randomPush(5);
console.log(randomArr);
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomNums = () => {
    console.log(Math.round(Math.random() * 100))
};
randomNums();
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArrLimit = [];
let randomLimit = (reps, limit) => {
    for (let i = 0; i < reps; i++) {
        randomArrLimit.push(Math.floor(Math.random() * limit));
    }
};
randomLimit(10, 123);
console.log(randomArrLimit);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let backwards = arr => {
    let backwardsArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        backwardsArr.push(arr[i]);
    }
    console.log(backwardsArr);
};
backwards([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);