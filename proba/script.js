const form = document.getElementById("bookingForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        document.getElementById("result").textContent =
            "Foglalás sikeres! Emailben jelentkezünk.";
    });
}
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.4)";
    } else {
        nav.style.boxShadow = "none";
    }
});
