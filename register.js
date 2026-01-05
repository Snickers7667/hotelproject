document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const pass1 = document.getElementById("regPassword").value;
    const pass2 = document.getElementById("regPassword2").value;
    const error = document.getElementById("registerError");

    if (!name || !email || !pass1 || !pass2) {
        error.textContent = "Minden mező kötelező!";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Érvénytelen email cím!";
        return;
    }

    if (pass1.length < 6) {
        error.textContent = "A jelszó legalább 6 karakter!";
        return;
    }

    if (pass1 !== pass2) {
        error.textContent = "A jelszavak nem egyeznek!";
        return;
    }

    error.style.color = "green";
    error.textContent = "Sikeres regisztráció (demo)";
});
