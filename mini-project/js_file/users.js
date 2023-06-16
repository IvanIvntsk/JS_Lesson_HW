fetch(`http://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then((users) => {
        let usersList = document.getElementsByClassName(`usersList`)[0]
        for (const user of users) {
            let div = document.createElement(`div`)
            div.innerHTML = `User №${user.id}&nbsp<b>${user.name}</b>`
            usersList.appendChild(div)

            let buttonDetails = document.createElement(`button`)
            buttonDetails.innerText = `Details`
            usersList.append(div,buttonDetails)

            // let buttonPost = document.createElement(`button`)
            // buttonPost.innerText = `Post of current user`
            // usersList.appendChild(buttonPost)

            div.classList.add(`divMainBlock`)
            buttonDetails.classList.add(`buttonDetails`)
            // buttonPost.classList.add(`buttonPost`)

            // buttonPost.onclick = () => {
            //     location.href = `../html_file/post.html?userId=${user.id}`
            // }

            buttonDetails.onclick = () => {
                location.href = `../html_file/users-details.html?userId=${user.id}`
            }
        }

    })