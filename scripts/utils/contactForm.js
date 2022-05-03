// DOM ELEMENTS FORM FIELDS VALIDATION
let modal = document.getElementById('contact_modal');
let firstName = document.getElementById('prenom');
let lastName = document.getElementById('nom');
let email = document.getElementById('email');
let message = document.getElementById('message');
let closeForm = document.querySelector('.contact-button');

 

// LISTENER
modal.addEventListener("submit", submitForm);
closeForm.addEventListener("click", closeModal);

// OPEN AND SEND FORM
function displayModal() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.focus();
}
function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
} 

function submitForm(e) {
    e.preventDefault();
    console.log('Prénom : ' + firstName.value);
    console.log('Nom : ' + lastName.value);
    console.log('Email : ' + email.value);
    console.log('Message : ' + message.value);
    closeModal();    
}
