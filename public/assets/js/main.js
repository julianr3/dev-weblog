const logoutHandler = () => {

    fetch("/api/users/logout", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
    })
    .then((response) => {
        window.location.href = "/"
    })
}

document.querySelector("#logout").addEventListener("click", logoutHandler)
