const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

greetingElement.textContent = greeting;
// =========================================
// CONTACT FORM VALIDATION
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been submitted.";

    contactForm.reset();
});
// =========================================
// JQUERY INTERACTIVE GALLERY
// =========================================

$(document).ready(function () {

    $(".gallery-thumb").on("click", function () {

        const image = $(this).attr("src");
        const title = $(this).data("title");
        const description = $(this).data("description");

        $("#mainGalleryImage").attr("src", image);
        $("#galleryTitle").text(title);
        $("#galleryDescription").text(description);

    });

});