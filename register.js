document.getElementById("RegForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.querySelector('input[type="text"]').value.trim();
    let email = document.querySelector('input[type="email"]').value.trim();
    let password = document.querySelector('input[type="password"]').value.trim();

    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }


    let user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");


    window.location.href = "account.html";
});