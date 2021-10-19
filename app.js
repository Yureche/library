// ! Variables
const mainContainer = document.querySelector(".main-container");
let library = [];
// Buttons to open and close the form
const openFormButton = document.querySelector(".open-form");
const closeFormButton = document.querySelector(".close-form");
// Button to remove the bookCard

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

// ! Validating the form
const form = document.querySelector("form");
function validate(e) {
  if (inputFields.every((input) => input.value.trim() !== "")) {
    addBook();
    closeForm();
    library.at(-1).createBook();
  }
  inputFields.forEach((input) => {
    if (input.value.trim() == "") {
      // Add a class that defines an animation
      input.classList.add("error");
      // remove the class after the animation completes
      setTimeout(function () {
        input.classList.remove("error");
      }, 500);
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
  this.id = id;
}

function addBook() {
  library.push(
    new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked,
      imageInput.value,
      library.length
    )
  );
}

// Remove book from the page
function removeElement(id) {
  const elem = document.getElementById(id);
  localStorage.removeItem(id);
  library.splice(id);
  return elem.parentNode.removeChild(elem);
}

Book.prototype.changeReadStatus = function () {
  this.read === true ? (this.read = false) : (this.read = true);
};
Book.prototype.createBook = function () {
  let bookCard = document.createElement("div");
  bookCard.className = "book-card";
  bookCard.id = `${this.id}`;
  mainContainer.appendChild(bookCard);

  let removeBook = document.createElement("button");
  removeBook.className = "remove-book";
  removeBook.innerHTML = "&times;";
  bookCard.appendChild(removeBook);

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

  localStorage[this.id] = JSON.stringify(this);
  const removeBookCardButton = document.querySelectorAll(".remove-book");
  removeBookCardButton.forEach((button) => {
    button.addEventListener("click", () => {
      removeElement(this.id);
    });
  });
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

// createBookButton.addEventListener("click", () => {
//   addBook();
//   closeForm();
// });

// library.push(theHobbit, richPoorDad, atomicHabits);
library.forEach((object) => {
  localStorage[object.id] = JSON.stringify(object);
});

function jsonToObject() {
  library = [];
  for (let i = 0; i < localStorage.length; i++) {
    let book = JSON.parse(localStorage[i]);
    library.push(
      new Book(
        book.title,
        book.author,
        book.pages,
        book.read,
        book.image,
        book.id
      )
    );
  }
  library.forEach((book) => {
    book.createBook();
  });
}

window.onload = () => {
  jsonToObject();
};
