// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let name = document.forms.userForm.name;
let age = document.forms.userForm.age;
let btnUser = document.getElementById('btnUser');

let saveUser = (userName, userAge) => {
    let user = {
        name: userName,
        age: userAge,
    };
    localStorage.setItem('user', JSON.stringify(user));
};

btnUser.onclick = () => {
    saveUser(name.value, age.value);
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.forms.carForm.model;
let type = document.forms.carForm.type;
let volume = document.forms.carForm.volume;
let btnCar = document.getElementById('btnCar');

let saveCar = (carModel, carType, carVolume) => {
    let cars = JSON.parse(localStorage.getItem('car')) || [];
    cars.push({carModel, carType, carVolume});
    localStorage.setItem('car', JSON.stringify(cars));
}

btnCar.onclick = () => {
    saveCar(model.value, type.value, volume.value);
}