// ! Variables
const mainContainer = document.querySelector(".main-container");
let library = [];
// Buttons to open and close the form
const openFormButton = document.querySelector(".open-form");
const closeFormButton = document.querySelector(".close-form");

const createBookButton = document.querySelector("#submit-book");
// Create book Form
const overlay = document.querySelector(".overlay");
const formContainer = document.querySelector(".form-container");

const inputFields = Array.from(
  document.querySelectorAll(".input:not(#img-url)")
);

// ! Validating the form
const form = document.querySelector("form");
function validate(e) {
  inputFields.forEach((input) => {
    if (input.value.trim() == "") {
      // Add a class that defines an animation
      input.classList.add("error");
      // remove the class after the animation completes
      setTimeout(function () {
        input.classList.remove("error");
      }, 500);
    } else if (inputFields.every((input) => input.value.trim() !== "")) {
      closeForm();
    }
  });

  e.preventDefault();
}

form.addEventListener("submit", validate);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function openForm() {
  formContainer.style.display = "flex";
  overlay.style.opacity = 1;
  overlay.style.pointerEvents = "all";
}

function closeForm() {
  formContainer.style.display = "none";
  overlay.style.opacity = 0;
  overlay.style.pointerEvents = "none";
}
openFormButton.addEventListener("click", () => {
  openForm();
});

closeFormButton.addEventListener("click", () => {
  closeForm();
});

createBookButton.addEventListener("click", () => {
  // createBook();
});
