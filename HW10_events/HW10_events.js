// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
let form1 = document.forms.form1;
form1.onsubmit = function (e){
e.preventDefault();
let person = {
    name: this.name.value,
    surname: this.surname.value,
    age: this.age.value
}
    let div = document.createElement(`div`)
  let json = JSON.stringify(person)
    div.innerText = json
    document.body.appendChild(div)

}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
    let number2 = localStorage.getItem(`count`)  || 0
    let numberElement = document.getElementById(`number`)
    let nextNumber =(+number2 +1).toString()
    numberElement.innerText = nextNumber.toString()
    localStorage.setItem(`count`, nextNumber.toString())
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
// let arr = []
// for (let i = 0; i < 100; i++) {
//     arr.push(i)
// }
//  let arrPage = 1
// let arrPrPage = 10
// let arrDiv = document.getElementById(`divThree`)
// let prev = document.getElementById(`prev`)
// let Next = document.getElementById(`next`)
//
// function foo (){
//     arrDiv.innerHTML = `arr`
//     let start = (arrPage -1) * arrPrPage
//     let nextPage = start +  arrPrPage
//
//     for (let i = start; i < nextPage; i++) {
//         if (i >= arr.length){
//             break
//         }
//         let item = arr[i]
//     }
// }
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let element = document.createElement(`div`)
let button = document.createElement(`button`)
let par = document.createElement(`p`)
element.appendChild(par)
button.innerText = `Clear`
button.onclick = () => element.style.display = `none`
par.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad architecto at aut autem consectetur dolore doloribus eaque eligendi expedita explicabo illo laboriosam nam officia praesentium, quis, quo rem saepe?`

document.body.append(element, button)
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form = document.forms.howOld
form.onsubmit = function (e) {
    e.preventDefault()
    if (this.age.value < 18){
        return alert(`Danger content`)
    }
    return alert(`Hello`)
}



// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається