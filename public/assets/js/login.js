const loginHandler = (event) => {

    event.preventDefault();

    const email = document.querySelector("#inputEmail").value;
    const password = document.querySelector("#inputPassword").value;

    const body = {
        email,
        password
    }

    console.log(body)

    fetch("/api/users/login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    })
    .then((response) => response.json() )
    .then((data) => {
        console.log(data)
        if(!data.user) {
            alert("Login failed!")
            return;
        }
        window.location.href = "/"
    })
}

document.querySelector("#loginForm").addEventListener("submit", loginHandler)