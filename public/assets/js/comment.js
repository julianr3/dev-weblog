const commentHandler = (event) => {

    event.preventDefault();

    const content = document.querySelector("#inputContext").value;
    const post_id = document.querySelector("#postId").textContent;

    const body = {
        content,
        post_id
    }

    console.log(body)

    fetch("/api/comments", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => response.json() )
    .then((data) => {
        console.log(data)
        if(data.errors) {
            return;
        }
        window.location.href = "/dashboard"
    })
}

document.querySelector("#submitBtn").addEventListener("click", commentHandler)