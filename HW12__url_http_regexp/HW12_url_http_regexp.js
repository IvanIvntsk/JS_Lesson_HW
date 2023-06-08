// зробити файл users.html

// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

// let url = new URL (`http://jsonplaceholder.typicode.com/users`)
// console.log(url)

fetch(`http://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(value => console.log(value))

//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (   ХХХ - айді користувача)
fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(value => {
        let usersList = document.getElementById(`usersList`)

        value.forEach(user => {
            let creatLi = document.createElement(`li`)
            let link = document.createElement(`a`)

            link.href = `user-details.html?id=${user.id}`
            link.innerText = `ID: ${user.id}, Name: ${user.name}`


            creatLi.appendChild(link)
            usersList.appendChild(creatLi)

        })

        // console.log(usersList)
    })


