document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    if (!email || !password) {
        error.textContent = "Minden mező kitöltése kötelező!";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        error.textContent = "Hibás email vagy jelszó!";
        return;
    }

    error.style.color = "green";
    error.textContent = "Sikeres bejelentkezés!";

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
});
