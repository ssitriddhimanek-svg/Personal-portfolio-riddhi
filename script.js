// 1. Contact Me Button
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// 2. View Project Button
function showMessage(projectName) {
    alert(projectName + " project will be available soon!");
}


// 3. Contact Form
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("formMessage");

    message.textContent =
        "Thank you, " + name + "! Your message has been received.";

    document.querySelector("form").reset();
}