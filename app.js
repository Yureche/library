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

const inputFields = Array.from(document.querySelectorAll(".input"));

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const imageInput = document.getElementById("img-url");
const readInput = document.getElementById("read");

let defaultImgUrl = "./Images/notAvailable.jpg";

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
      library.push();
    }
  });

  e.preventDefault();
}

form.addEventListener("submit", validate);

function Book(title, author, pages, read, image, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
}

function addBook() {
  library.push(
    new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked,
      imageInput.value
    )
  );
}

Book.prototype.changeReadStatus = function () {
  this.read === true ? (this.read = false) : (this.read = true);
};
Book.prototype.createBook = function () {
  let bookCard = document.createElement("div");
  bookCard.className = "book-card";
  mainContainer.appendChild(bookCard);

  let bookTitle = document.createElement("h2");
  bookTitle.className = "book-title";
  bookTitle.innerHTML = ` ${this.title}`;
  bookCard.appendChild(bookTitle);

  let bookImage = document.createElement("img");
  bookImage.className = "book-image";
  bookImage.src = this.image;
  bookCard.appendChild(bookImage);

  let bookAuthor = document.createElement("p");
  bookAuthor.className = "book-author";
  bookAuthor.innerHTML = `Author: ${this.author}`;
  bookCard.appendChild(bookAuthor);

  let pages = document.createElement("p");
  pages.innerHTML = `Pages: ${this.pages}`;
  bookCard.appendChild(pages);

  let readContainer = document.createElement("div");
  bookCard.appendChild(readContainer);
  readContainer.className = "read-container";
  let readLabel = document.createElement("p");
  readLabel.innerHTML = "Read:  ";
  readContainer.appendChild(readLabel);
  let switchLabel = document.createElement("label");
  switchLabel.className = "switch";
  readContainer.appendChild(switchLabel);
  let switchInput = document.createElement("input");
  switchInput.type = "checkbox";
  switchInput.checked = readInput.checked;
  switchInput.id = "read-switch";
  switchLabel.appendChild(switchInput);
  let switchSlider = document.createElement("span");
  switchSlider.className = "slider round";
  switchLabel.appendChild(switchSlider);
};
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
  addBook();
  closeForm();
});
