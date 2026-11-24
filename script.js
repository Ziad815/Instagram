
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

toggle.addEventListener("click", () => {
    const isHidden = password.type === "password";

    password.type = isHidden ? "text" : "password";
    toggle.textContent = isHidden ? "Hide" : "Show";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    message.textContent =
        "Demo only: No login request was sent.";
    
    form.reset();
    password.type = "password";
    toggle.textContent = "Show";
});

