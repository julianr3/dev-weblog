const commentHandler = (event) => {

    event.preventDefault();

    const title = document.querySelector("#inputTitle").value;
    const content = document.querySelector("#inputContext").value;

    const body = {
        title,
        content
    }

    console.log(body)

    fetch("/api/posts", {
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