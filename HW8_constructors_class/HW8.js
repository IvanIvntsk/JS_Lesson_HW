// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let newArr = [
    new User(0,`Ben`,`Simsons`, `email@.com`, 1233),
    new User(1,`Sem`,`Simsons`, `email@.com`, 1234),
    new User(2,`Din`,`Simsons`, `email@.com`, 1235),
    new User(5,`Julia`,`Simsons`, `email@.com`, 1236),
    new User(4,`Ira`,`Simsons`, `email@.com`, 1237),
    new User(3,`Klara`,`Simsons`, `email@.com`, 1238),
    new User(6,`Dima`,`Simsons`, `email@.com`, 1239),
    new User(7,`Olya`,`Simsons`, `email@.com`, 1241),
    new User(8,`Stiv`,`Simsons`, `email@.com`, 1242),
    new User(9,`Taras`,`Simsons`, `email@.com`, 1243),
];
console.log(newArr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterArr = newArr.filter(filterId => filterId.id %2 === 0)
console.log(filterArr)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArr = newArr.sort(function (a,b){
 return a.id - b.id
})
console.log(sortArr)
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
let client = [
    new Client(0,`Ben`,`Simsons`, `email@.com`, 1233,[`Product1`, `Product2`, `Product3`]),
    new Client(1,`Sem`,`Simsons`, `email@.com`, 1234,[`Product1`, `Product2`,`Product3`]),
    new Client(2,`Din`,`Simsons`, `email@.com`, 1235,[`Product1`, `Product2`]),
    new Client(5,`Julia`,`Simsons`, `email@.com`, 1236,[`Product1`, `Product2`]),
    new Client(4,`Ira`,`Simsons`, `email@.com`, 1237,[`Product1`, `Product2`,`Product3`]),
    new Client(3,`Klara`,`Simsons`, `email@.com`, 1238,[`Product1`, `Product2`]),
    new Client(6,`Dima`,`Simsons`, `email@.com`, 1239,[`Product1`, `Product2`]),
    new Client(7,`Olya`,`Simsons`, `email@.com`, 1241,[`Product1`, `Product2`]),
    new Client(8,`Stiv`,`Simsons`, `email@.com`, 1242,[`Product1`, `Product2`]),
    new Client(9,`Taras`,`Simsons`, `email@.com`, 1243,[`Product1`, `Product2`]),
]
console.log(client)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort = client.sort(function (a, b){
    return a.order.length - b.order.length
})
console.log(clientSort)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufactur, year, maxspeed, engine, drivers){
    this.model = model;
    this.manufactur = manufactur;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
    this.drivers = drivers;
    this.drive = function (msg){
        console.log(`Їдемо зі швидкістю ${this.maxspeed} км/год`)
    }
    this.info = function (model, manufactur, YearCar){
        console.log(`Model: ${this.model}, Manufactur: ${this.manufactur}, Year Car: ${this.year}`)
    }
    this.increaseMaxSpeed = function (newSpeed){
        console.log(this.maxspeed + newSpeed)
    }
    this.changeYear = function (newValue) {
        console.log(this.year = newValue)

    }
    this.addDriver = function (driver){
        console.log(this.drivers = driver)
    }

}
    let addCar = new Car(`Skoda`,`VG`, 2020, 220, 2)
    addCar.drive()
    addCar.info()
    addCar.increaseMaxSpeed(10)
    addCar.changeYear(2023)
    addCar.addDriver([`Ihor`,`Pro`])
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, manufactur, year, maxspeed, engine, drivers) {
        this.model = model;
        this.manufactur = manufactur;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
        this.drivers = drivers;
    }
        drive(msg){
            console.log(`Їдемо зі швидкістю ${this.maxspeed} км/год`)
        }
        info(model, manufactur, YearCar){
            console.log(`Model: ${this.model}, Manufactur: ${this.manufactur}, Year Car: ${this.year}`)
        }
        increaseMaxSpeed(newSpeed){
            console.log(this.maxspeed + newSpeed)
        }
        changeYear (newValue) {
            console.log(this.year = newValue)

        }
        addDriver(driver){
            console.log(this.drivers = driver)
        }

    }
    let addCar2 = new Car(`Skoda`,`VG`, 2020, 220, 2)
addCar.drive()
addCar.info()
addCar.increaseMaxSpeed(10)
addCar.changeYear(2023)
addCar.addDriver([`Ihor`,`Pro`])

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
    constructor(Name, age, size) {
        this.Name = Name;
        this.age = age;
        this.size = size;
    }
}
class Prince{
    constructor(Name, age, search) {
        this.Name = Name;
        this.age = age;
        this.search = search;
    }
    findPopelushka(arr){
        for (let searching of arr){
            if (searching.size === this.search){
                return searching
            }
        }
    }
}
let arrPopelushka = [
    new Popelushka(`Klara`,20,33),
    new Popelushka(`Kara`,21,35),
    new Popelushka(`Kira`,25,38),
    new Popelushka(`Mara`,27,25),
    new Popelushka(`Sara`,33,22),
    new Popelushka(`Dara`,18,42),
    new Popelushka(`Kola`,24,24),
    new Popelushka(`Yula`,13,31),
    new Popelushka(`Julia`,56,38),
    new Popelushka(`Mira`,86,40)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = new Prince (`Sem`,22,25)
console.log(prince.findPopelushka(arrPopelushka))
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку