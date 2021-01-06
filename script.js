function submitForm(e){
    log.textContent = "Thank you. I will get back to you soon.";
    e.preventDefault();
}
const form = document.getElementById("contact")
const log = document.getElementById("log")
form.addEventListener('submit', submitForm)


