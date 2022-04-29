const signUpHandler = (event) => {

    event.preventDefault();

    const name = document.querySelector("#inputName").value;
    const email = document.querySelector("#inputEmail").value;
    const password = document.querySelector("#inputPassword").value;

    const body = {
        name,
        email,
        password
    }

    console.log(body)

    fetch("/api/users/signup", {
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
            alert("Sign up failed!")
            return;
        }
        window.location.href = "/"
    })
}

document.querySelector("#signUpForm").addEventListener("submit", signUpHandler)