// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

function Address(street, suite, city, zipcode, lat, lng) {
    return {
        street,
        suite,
        city,
        zipcode,
        geo: {lat, lng}
    };
}

function Company(companyName, catchPhrase, bs) {
    return {
        companyName,
        catchPhrase,
        bs
    };
}

function Contact(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
    return {
        id,
        name,
        username,
        email,
        address: new Address(street, suite, city, zipcode, lat, lng),
        phone,
        website,
        company: new Company(companyName, catchPhrase, bs)
    };
}

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//          {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//          {/*some props and values*/},
//          {/*...*/},
//          {/*...*/},
//     ]
// }

function Attr(titleOfAttr, actionOfAttr) {
    return {
        titleOfAttr,
        actionOfAttr
    };
}

function Tag(titleOfTag, action, ...attrs) {
    const arr = [];

    for (let i = 0; i < attrs.length; i += 2) {
        arr.push(new Attr(attrs[i], attrs[i + 1]));
    }

    return {
        titleOfTag,
        action,
        attr: arr
    };
}

let a = new Tag('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href', 'Задает адрес документа, на который следует перейти.');
let div = new Tag('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');