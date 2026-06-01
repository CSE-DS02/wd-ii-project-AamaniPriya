document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("LoginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        
        if (username === "admin" && password === "1234") {
            alert("Login Successful!");
            window.location.href = "main.html";
        } else {
            alert("Invalid Username or Password.");
        }
    });
});