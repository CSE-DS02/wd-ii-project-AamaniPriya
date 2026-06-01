document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("RegForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="number"]').value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message sent successfully!");

        form.reset();
    });
});