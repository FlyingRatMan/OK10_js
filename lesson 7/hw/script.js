// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrOfUsers = [];
const fillArr = (arr, clas, reps) => {
    for (let i = 0; i < reps; i++) {
        arr.push(new clas(i, 'Name' + [i], 'Surname', 'email@example.com', '012345678' + [i]))
    }
};
fillArr(arrOfUsers, User, 10);
console.log(arrOfUsers);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenUsers = arrOfUsers.filter(item => item.id % 2 === 0);
// let evenUsers = arrOfUsers.filter((item, index) => index % 2 === 0);
console.log(evenUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по (зростанню) спаданню (sort)
let sortedUsers = arrOfUsers.sort((a, b) => b.id - a.id);
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let arrOfClients = [];
fillArr(arrOfClients, Client, 10);
arrOfClients[0].order = ['apples', 'bananas', 'oranges'];
arrOfClients[1].order = ['sugar', 'flour'];
arrOfClients[2].order = ['meat', 'salad', 'souce', 'potato'];
arrOfClients[3].order = ['potato', 'carrot', 'fish', 'bread'];
arrOfClients[4].order = ['bread', 'cheese', 'ham', 'salad', 'tomatoes'];
arrOfClients[5].order = ['tomatoes', 'peppers', 'cucumbers', 'onions'];
arrOfClients[6].order = ['cake'];
arrOfClients[7].order = ['vodka', 'tomato juice', 'celery', 'tabasco'];
arrOfClients[8].order = ['pizza', 'coke'];
arrOfClients[9].order = ['sushi'];
console.log(arrOfClients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = arrOfClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);