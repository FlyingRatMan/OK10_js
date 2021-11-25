// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world';
let lorem = 'lorem ipsum';
let js = 'javascript is cool';

console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(js.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(hello.toUpperCase().toLowerCase());
console.log(lorem.toUpperCase().toLowerCase());
console.log(js.toUpperCase().toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let string = 'Каждый охотник желает знать';
const stringToArray = str => {
    return str.split(" ");
}
console.log(stringToArray(string));
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
const delete_characters = (str, length) => {
    return str.substring(0, length);
}
console.log(delete_characters(string, 7));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let string2 = "HTML JavaScript PHP";
const insert_dash = str => {
    // return str.toUpperCase().replaceAll(" ", "-");
    return str.split(' ').join('-').toUpperCase();
};
console.log(insert_dash(string2));
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const firstUp = str => {
    let string = str.trim();
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
};
console.log(firstUp(js));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalize = str => {
    return str.split(' ').map(firstUp).join(' ');
};
console.log(capitalize(string));