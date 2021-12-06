// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let element = document.getElementById('text');
let btn1 = document.getElementById('btn1');

btn1.onclick = function () {
    element.style.display = 'none';
}
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.getElementById('btn2');

btn2.onclick = function () {
    btn2.style.display = 'none';
}
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.getElementById('input');
let btn3 = document.getElementById('btn3');

btn3.onclick = function () {
    if (+input.value < 18) {
        console.log('You are not adult.')
    } else {
        console.log('Your age is valid.')
    }
}
//
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementById('menu');
let items = menu.children;

menu.onclick = function () {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('hidden');
    }
}
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'title1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'title2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'title3', body: 'lorem ipsum dolo sit ameti'},
];

for (const comment of comments) {
    let commentDiv = document.createElement('div');
    let title = document.createElement('h2');
    title.append(comment.title);
    let body = document.createElement('p');
    body.append(comment.body);
    let btn = document.createElement('button');
    btn.append('hide');
    commentDiv.append(title, body, btn);
    document.body.append(commentDiv);

    btn.onclick = function () {
        body.style.display = 'none';
    }
}

