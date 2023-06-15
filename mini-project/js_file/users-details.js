let userId = new URL (location.href).searchParams.get(`userId`);

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then((user) => {
        let usersList = document.getElementsByClassName(`usersList`)[0]

        let ul = document.createElement(`ul`)

        usersList.appendChild(ul)
        info(user, ul)

        let buttonPost = document.createElement(`button`)
        buttonPost.innerText = `Post of current user`
        usersList.appendChild(buttonPost)

        buttonPost.classList.add(`buttonPost`)

        buttonPost.onclick = () => {
            location.href = `../html_file/post.html?userId=${user.id}`
        }

    })
function liCreator(key, obj, parent) {
    let li = document.createElement(`li`)
    li.innerHTML = `<b>${key}</b> ${obj}`
    parent.appendChild(li)

    li.style.listStyle = `none`
}

function ulCreator(key, obj, parent){
    let li = document.createElement(`li`)
    let ul = document.createElement(`ul`)

    ul.style.listStyle = `none`
    li.style.listStyle = `none`

    li.innerHTML = `<b>${key}:</b>`

    parent.appendChild(li)
    li.appendChild(ul)

    info(obj, ul)
}

function info(obj, parent) {
    for (let key in obj) {
        if (typeof obj[key] === `object`) {
            ulCreator(key, obj[key], parent)
        } else {
            liCreator(key, obj[key], parent)
        }
    }
}