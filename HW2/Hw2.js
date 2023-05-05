// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [`title`, `book`, `number`, `genre`, 123, true, false, `own`, 333, `one`]
console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj1 =  {
    title : `Red`,
    pageCount : 333,
    genre : `novel`,
}
console.log(obj1)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let obj2 = {
     title : `Animals`,
    pageCount : 222,
    genre : `encyclopedia`,
    authors : [
        `Vasiliy Black`,
        `Jack Red`]
}
console.log(obj2)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr2 = [
    {
        name : `Jon`,
        user :  `J0n`,
        password: `123`,
    },
    {
        name: `Bob`,
        user: `B0b`,
        password: `321`
    },
    {
        name: `Klark`,
        user: `Klark11`,
        password: `55555`,
    },
    {
        name: `Sergiy`,
        user: `Serg`,
        password: `jj321k`,
    },
    {
        name: `Ola`,
        user: `Jinlo`,
        password: `asda55`,
    },
    {
        name: `Ira`,
        user: `Ruka`,
        password: `1231231`,
    },
    {
        name: `Kira`,
        user: `Kiss`,
        password:`lop123`,
    },
    {
        name: `Oleksiy`,
        user:`Man`,
        password:`dsak4554`,
    },{
        name: `Ben`,
        user: `Big`,
        password: `losae123`
    },{
        name: `Kira`,
        user: `Kira123`,
        password: `kira 132`
    }
    ]
console.log(arr2[0].password)
console.log(arr2[1].password)
console.log(arr2[2].password)
console.log(arr2[3].password)
console.log(arr2[4].password)
console.log(arr2[5].password)
console.log(arr2[6].password)
console.log(arr2[7].password)
console.log(arr2[8].password)
console.log(arr2[9].password)
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1
if (x !== 0) {console.log(`Вірно`)}
else { console.log(`Невірно`)}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time =  25
if (time > 0 || time < 15){
    console.log(`перша`)}
else if (time > 15 || time < 30){
    console.log(`друга`)}
else if (time > 30 || time < 45){
    console.log(`третя`)}
else if (time > 45 || time < 59){
    console.log(`четверта`)}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 5
if(day > 1  < 10) {
    console.log(`перша`)
}
else if (day > 10 < 20){
    console.log(`друга`)
}
else if ( day > 20 < 31){
    console.log(`третя`)
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = 3
switch (week){
    case 1:
        console.log(`Monday`)
        break;
    case 2:
        console.log(`Tuesday`)
        break;
    case 3:
        console.log(`Wednesday`)
        break;
    case 4:
        console.log(`Thursday`)
        break;
    case 5:
        console.log(`Friday`)
        break;
    case 6:
        console.log(`Saturday`)
        break;
    case 7:
        console.log(`Sunday`)
        break;

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num = 1
let num1 = 2
if (num < num1){console.log(`друге >`)}
    else if (num > num1){
        console.log(`перше >`)
}else if (num === num2)
    {
        console.log(`Рівні`)
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1 = 2313
if  (x1 === `` || x1 === 2 || x1 === undefined || x1 === null)
x1  = `default`
{console.log(x1)}




