// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function getClassList(element) {
    let arr = [];

    if (element.classList.length) {
        arr.push(element.classList.value)
    }
    if (element.children) {
        for (const child of element.children) {
            arr = arr.concat(getClassList(child));
        }
    }

    return arr;
}

console.log(getClassList(document.body));