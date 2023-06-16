let postId = new URL (location.href).searchParams.get(`postId`)

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then (response => response.json())
    .then(result =>{
        let details = result;
        console.log(details)

        let detailPost = document.getElementById(`detailPost`)
        let h1 = document.createElement(`h1`)
        let p = document.createElement(`p`)
        let id = document.createElement(`p`)
        let div = document.createElement(`div`)

        div.append(h1, id, p)
        h1.innerHTML = `<i>Title:</i> 
        <br>
        ${details.title}`
        id.innerHTML = `<b>Post ID:</b> ${details.id}`
        p.innerHTML = `<b>Body:</b> <br>${details.body}`

        div.classList.add(`divTitle`)
        id.classList.add(`idTitle`)

        detailPost.appendChild(div)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then (response => response.json())
            .then(result =>{
                let comments = result
                console.log(comments)

                let ul = document.createElement(`ul`)
                ul.classList.add(`ulStyle`)

                for (const comment of comments) {

                    let li = document.createElement(`li`)
                    li.classList.add(`liStyle`)

                    ul.appendChild(li)

                    let id = document.createElement(`p`)
                    let name = document.createElement(`h2`)
                    let email = document.createElement(`h3`)
                    let body = document.createElement(`p`)

                    id.innerHTML = `<h2>Comment</h2> <b>ID:</b> ${comment.id}`
                    name.innerHTML = `Name: ${comment.name}`
                    email.innerHTML = `Email: ${comment.email}`
                    body.innerHTML = `${comment.body}`

                    li.append(id, name, email, body)

                    detailPost.appendChild(ul)

                }
            })


    })