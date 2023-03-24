
const emailEl = document.querySelector(".login-form")


emailEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Proszę uzupełnić wszystkie pola.");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}


