// DOM ELEMENTS FORM FIELDS VALIDATION
let modal = document.getElementById("contact_modal");
let firstName = document.getElementById("prenom");
let lastName = document.getElementById("nom");
let email = document.getElementById("email");
let message = document.getElementById("message");
let closeForm = document.querySelector(".contact-button");

const modalForm = document.querySelector("#contact_modal"); // select the modal by it's id and add all the elements inside modal which you want to make focusable
const  focusableElements = "button, a, input, textarea, [role=\"button\"], [tabindex=\"0\"]";
const firstFocusableElement = modalForm.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modalForm.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

document.addEventListener("keydown", function(e) {
  let isTabPressed = e.key === "Tab" || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();

// LISTENER
modal.addEventListener("submit", submitForm);
closeForm.addEventListener("click", closeModal);

// OPEN AND SEND FORM
displayModal();
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
    console.log("Prénom : " + firstName.value);
    console.log("Nom : " + lastName.value);
    console.log("Email : " + email.value);
    console.log("Message : " + message.value);
    closeModal();    
}


