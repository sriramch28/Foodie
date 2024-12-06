function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "user";
    const correctPassword = "password123";

    const message = document.getElementById("message");

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}

