// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle (a, b){
    let result = a * b;
    return result;
}
let rec = rectangle(2, 2)
console.log(rec)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r){
    let result = Math.PI * r ** 2
    return result
}
let cir = circle(5)
console.log(cir)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder (r, h) {
    let result = 2 * Math.PI * r * h + 2 * Math.PI * r ** 2
    return result
}
let cyl = cylinder(3, 3)
console.log(cyl)
// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, `Bob`, true]
function element (arr){
for (tElement of arr){
    console.log(tElement)
}
}
element(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(parag) {
    document.write(`<p>${parag}</p>`)
}
paragraph(`None text`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function elementLi(text){
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
elementLi(`None text`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function elementLi2(text, ser) {
    document.write(`<ul>`)
    {
        for (let i = 0; i < ser; i++)
            document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
elementLi2(`NoneText`, 3 )
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let full = [123, `NoneText`, undefined]
function fullA (arr){
    document.write(`<ul>`)
    for (let temp of arr){
        document.write(`<li> ${temp} </li>`)
    }
    document.write(`</ul>`)
}
fullA(arr)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr3 = [
    {id: 0, name:`Ola`, age: 25},
    {id: 1, name: `Ihor`, age: 33},
    {id: 2, name: `Nori`, age: 32},
    {id: 3, name: `Ken`, age: 44},
    {id: 4, name: `Tim`, age: 23},
    {id: 5, name: `Sem`, age: 65},
    {id: 6, name: `Bob`, age: 23},
    {id: 7, name: `Kola`, age: 11}
]
function users (arr){
    for (user1 of arr){
        document.write(`<div> ID: ${user1.id} - Name: ${user1.name} - Age: ${user1.age} </div>`)
    }
}
users(arr3)
// - створити функцію яка повертає найменьше число з масиву
let arrMin = [1, 4, 23, 2]
function arr4 (arr){
    let result = 0
    for (let i = 0 ; i < arr; i ++ ){

        if (result > arr[i]){
            result = arr[i]
        }
    }
    return result
}
console.log(arr4(arrMin))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) /0/->13
function sum (arr){
    let result = 0
    for (let num of arr){
        result = result + num
    }
    return result
}
console.log(sum([1,2,10]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
let inko = arr[index1]
let inko2 = arr[index2]
    arr[index1]=inko
    arr[index2]=inko2
    return arr
}
console.log(swap([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250