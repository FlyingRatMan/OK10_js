// Все робити за допомоги js.
// - створити блок,
let block = document.createElement('div');
// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.background = 'lightgrey';
block.style.color = 'blue';
block.style.fontSize = '36px';
// - додати цей блок в body.
document.body.append(block);
// - клонувати його повністю, та додати клон в body.
document.body.append(block.cloneNode(true));

// - Є масив:
let arr = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let ul = document.getElementsByClassName('menu');
for (const item of arr) {
    let li = document.createElement('li');
    li.append(item);
    ul[0].append(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.append(`${item.title} ${item.monthDuration}`);
    document.body.append(div);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = item.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration;
    div.append(h1, p);
    document.body.append(div);
}