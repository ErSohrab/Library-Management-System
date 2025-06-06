document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const Admin = document.getElementById("Admin").value;
        const password = document.getElementById("password").value;

        if (Admin === "sohrab" && password === "sohrab@1234") {
            document.getElementById("message").textContent = "Login successful!";
            document.getElementById("message").style.color = "green";
            window.location.href = "AdminMainPage.html";
        } else {
            document.getElementById("message").textContent = "Invalid Admin ID or password.";
        }
    });
});