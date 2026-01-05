document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    if (!email || !password) {
        error.textContent = "Minden mező kitöltése kötelező!";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Érvénytelen email cím!";
        return;
    }

    error.style.color = "green";
    error.textContent = "Sikeres belépés (demo)";
});
