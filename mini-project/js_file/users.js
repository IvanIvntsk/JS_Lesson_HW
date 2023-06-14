fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then((users) => {
        let usersList = document.getElementsByClassName(`usersList`)[0]
        for (const user of users) {
            let div = document.createElement(`div`)
            div.innerHTML = `<b>ID user: ${user.id}</b> <i>${user.name}</i>`
            usersList.appendChild(div)

            let buttonDetails = document.createElement(`button`)
            buttonDetails.innerText = `Details`
            usersList.append(div,buttonDetails)

            let buttonPost = document.createElement(`button`)
            buttonPost.innerText = `post of current user`
            usersList.appendChild(buttonPost)

            buttonPost.onclick = () => {
                location.href = `../html_file/post.html?userId=${user.id}`
            }

            buttonDetails.onclick = () => {
                location.href = `../html_file/users-details.html?userId=${user.id}`
            }
        }

    })