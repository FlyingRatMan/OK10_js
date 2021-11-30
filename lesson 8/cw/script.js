// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює class елемнту з id main_header на назву групи в якій ви вчитесь (mon-year)
let header = document.getElementById('main_header');
header.removeAttribute('id');
header.classList.add('sep-2021');
// b) робить шириниу елементу ul 400px
let list = document.getElementsByTagName('ul');
list[0].style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const elem of linkList) {
    elem.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let textLinkList = document.querySelector('.listElement2').innerText;
// e) отримує всі елементи li та змінює ім колір фону на сірий
let listItem = document.querySelectorAll('.linkList');
for (const item of listItem) {
    item.style.background = 'lightgrey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let anchor = document.getElementsByTagName('a');
for (const item of anchor) {
    item.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const item of anchor) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const item of anchor) {
    item.classList.add(`element_${item.innerText}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
colorOne = prompt('Your fav color');
for (const item of subHeader) {
    item.style.background = colorOne;
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const item of subHeader) {
    if (item.innerText === 'content 2 segment'){
        item.style.color = prompt('Your fav color');
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let contentOne = document.getElementsByClassName('content_1');
contentOne[0].innerText = prompt('Enter any text here');
// l) отримати елементи p та змінити їм padding на 20px
let paragraphs = document.getElementsByTagName('p');
for (const item of paragraphs) {
    item.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let textTwo = document.getElementsByClassName('text2');
textTwo[0].innerText = 'sep-2021';