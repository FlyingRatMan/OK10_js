// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// function createForm() {
//     let form = document.createElement('form');
//
//     for (let i = 0; i < 2; i++) {
//         let input = document.createElement('input');
//         input.setAttribute('name', 'input' + [i]);
//         form.append(input);
//     }
//
//     return form;
// }
//
// document.body.append(createForm(), createForm());
//
// let btn = document.createElement('button');
// btn.append('get info');
// document.body.append(btn);
//
// btn.addEventListener('click', function () {
//     let inputs = document.querySelectorAll('input');
//     inputs.forEach(input => console.log(input.value));
// })


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


// let inputRow = document.createElement('input');
// let inputCol = document.createElement('input');
// let inputInside = document.createElement('input');
// let btnInputs = document.createElement('button');
// btnInputs.innerText = 'Create a table';
//
// btnInputs.addEventListener('click', function () {
//     let table = document.createElement('table');
//     table.style.border = '2px solid black';
//     for (let i = 0; i < inputRow.value; i++) {
//         let tr = document.createElement('tr');
//         tr.style.border = '2px solid black';
//         for (let j = 0; j < inputCol.value; j++) {
//             let td = document.createElement('td');
//             td.innerText = inputInside.value;
//             td.style.border = '2px solid black';
//             tr.append(td);
//         }
//         table.append(tr);
//     }
//     document.body.append(table);
// })
//
// document.body.append(inputRow, inputCol, inputInside, btnInputs);


// (Додатковачастина для завдання)
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів - кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку.

let swearing = ['fuck', 'shit', 'asshole', 'bitch', 'cant', 'wanker'];

let inputCheck = document.createElement('input');
let btnCheck = document.createElement('button');
btnCheck.innerText = 'Check your word';

// btnCheck.addEventListener('click', function () {
//     for (let i = 0; i < swearing.length; i++) {
//         if (inputCheck.value === swearing[i]) {
//             alert('Watch your tongue!');
//         } else {
//             alert('Well done!')
//         }
//     }
// })

document.body.append(inputCheck, btnCheck);

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

btnCheck.addEventListener('click', function () {
    let toCheck = inputCheck.value.split(' ');
    for (const string of toCheck) {
        for (let i = 0; i < swearing.length; i++) {
            if (string === swearing[i]) {
                console.log('Watch your tongue!');
            }
        }
    }
})