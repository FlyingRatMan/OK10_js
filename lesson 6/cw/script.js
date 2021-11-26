// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
const normalizeName = name => {
    return name.replaceAll('.', ' ')
        .replaceAll('-', ' ')
        .replaceAll('_', ' ')
        .split(' ')
        .filter(w => w !== '')
        .join(' ');
};
console.log(normalizeName(n1));
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let array = [];
const fillArr = times => {
    for (let i = 0; i < times; i++) {
        array.push(Math.floor(Math.random() * 101))
    }
};
fillArr(7);
console.log(array);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(array.sort((a, b) => a - b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(array.filter(n => n % 2 === 0));
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(array.map(n => n.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    }
    return 0;
};
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter((duration) => duration.monthDuration > 5)
    .sort((a, b) => b.monthDuration - a.monthDuration));
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
const cutString = (str, n) => {
    // const arrOfStr = [];
    // while (str.length) {
    //     arrOfStr.push(str.substr(0, n));
    //     str = str.slice(n);
    // }
    // console.log(arrOfStr);
    // return arrOfStr;
    let arrOfStr = str.split('');
    let cleanArr = [];
    for (let i = 0, j = 0; i < arrOfStr.length; i++) {
        if (i % n === 0 && i !== 0) j++;
        if (!cleanArr[j]) {
            cleanArr[j] = arrOfStr[i];
        } else {
            cleanArr[j] += arrOfStr[i];
        }
    }
    console.log(cleanArr);
};
cutString('наслаждение',3); // [нас,лаж,ден,ие]