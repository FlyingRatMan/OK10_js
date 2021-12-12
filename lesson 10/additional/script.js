// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = event => {
//     console.log(`Name: ${event.target.tagName};`,
//         `Class-list: ${event.target.classList};`,
//         `ID: ${event.target.id};`,
//         `Height: ${event.target.clientHeight};`,
//         `Width: ${event.target.clientWidth};`)
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = event => {
//     let popup = document.createElement('div');
//     popup.classList.toggle('popup');
//
//     popup.style.position = 'relative';
//     popup.style.zIndex = '999';
//     popup.style.width = '200px';
//     popup.style.height = '150px';
//     popup.style.margin = 'auto';
//     popup.style.background = 'lightgrey';
//
//     popup.append(`Name: ${event.target.tagName};`,
//         `Class-list: ${event.target.classList};`,
//         `ID: ${event.target.id};`,
//         `Height: ${event.target.clientHeight};`,
//         `Width: ${event.target.clientWidth};`)
//     document.body.append(popup);
// }

// -- взять массив пользователей
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

const checkStatus = document.querySelector('#status');
const checkAge = document.querySelector('#age');
const checkCity = document.querySelector('#city');
const divList = document.querySelector('#list');

function renderList(users) {
    const oldUl = document.getElementById('userList');
    if (oldUl) {
        oldUl.remove();
    }
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'userList');
    for (const user of users) {
        const li = document.createElement('li');
        li.append(JSON.stringify(user));
        ul.append(li);
    }
    divList.append(ul);
}

function checked() {
    let users = usersWithAddress;

    if (checkStatus.checked) {
        users = users.filter(user => !user.status);
    }
    if (checkAge.checked) {
        users = users.filter(user => user.age > 29);
    }
    if (checkCity.checked) {
        users = users.filter(user => user.address.city === 'Kyiv');
    }

    renderList(users);
}

checkStatus.onclick = checked;
checkAge.onclick = checked;
checkCity.onclick = checked;

renderList(usersWithAddress);

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// let btnForward = document.createElement('button');
// let btnBack = document.createElement('button');
// let pInfo = document.createElement('p');
// pInfo.innerText = '';
// btnForward.append('Forward');
// btnBack.append('Back');
// document.body.append(btnBack, btnForward, pInfo);
//
// function toNextElement(element) {
//     if (element) {
//         pInfo.innerText = element.tagName;
//         btnForward.onclick = function () {
//             toNextElement(element.firstElementChild || element.nextElementSibling || element.parentElement.nextElementSibling);
//         };
//     }
// }
//
// toNextElement(document.body);

//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// const images = ['alpaca.jpg', 'banana.png', 'boba U4s.PNG', 'gateron.jpg', 'tangerine.jpg'];
// const btnNext = document.querySelector('.img-btn-next');
// const btnPrev = document.querySelector('.img-btn-prev');
// const img = document.querySelector('.img');
//
// btnPrev.onclick = function () {
//     const imgIndex = +img.getAttribute('data-index');
//     const prevIndex = imgIndex - 1 >= 0 ? imgIndex - 1 : images.length - 1;
//     img.src = images[prevIndex];
//     img.setAttribute('data-index', String(prevIndex));
// };
//
// btnNext.onclick = function () {
//     const imgIndex = +img.getAttribute('data-index');
//     const nextIndex = imgIndex + 1 < images.length ? imgIndex + 1 : 0;
//     img.src = images[nextIndex];
//     img.setAttribute('data-index', String(nextIndex));
// };
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// function highlightedText(e) {
//     let selection = document.getSelection();
//     let changedText = '<i>' + selection.toString() + '</i>';
//     let element = e.target;
//     let beginning = element.innerText.substring(0, selection.anchorOffset);
//     let ending = element.innerText.substring(selection.focusOffset);
//     element.innerHTML = beginning + changedText + ending;
// }
//
// document.onclick = highlightedText;