// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content').innerText;
// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules').innerText;
// -- замініть текст параграфа з id 'content' на будь-який інший
let newContent = 'It is a new text.';
document.getElementById('content').innerText = newContent;
// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = newContent;
// -- змініть кожному елементу колір фону на червоний
let elements = document.getElementsByClassName('target');
for (const element of elements) {
    element.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (const element of elements) {
    element.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let list = document.getElementById('rules').classList;
console.log(list);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let listItem = document.getElementsByClassName('fc_rules');
for (const item of listItem) {
    item.style.color = 'red';
}