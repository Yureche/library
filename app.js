const mainContainer = document.querySelector(".main-container"),
  openFormButton = document.querySelector(".open-form"),
  closeFormButton = document.querySelector(".close-form"),
  overlay = document.querySelector(".overlay"),
  formContainer = document.querySelector(".form-container"),
  inputFields = Array.from(document.querySelectorAll(".input")),
  titleInput = document.getElementById("title"),
  authorInput = document.getElementById("author"),
  pagesInput = document.getElementById("pages"),
  imageInput = document.getElementById("img-url"),
  readInput = document.getElementById("read"),
  form = document.querySelector("form");
let library = [];
function removeElement(id) {
  const bookToRemove = document.getElementById(id);
  return (
    localStorage.removeItem(id),
    library.splice(id),
    bookToRemove.parentNode.removeChild(bookToRemove)
  );
}
function openForm() {
  (formContainer.style.display = "flex"),
    (overlay.style.opacity = 1),
    (overlay.style.pointerEvents = "all");
}
function closeForm() {
  (formContainer.style.display = "none"),
    (overlay.style.opacity = 0),
    (overlay.style.pointerEvents = "none");
}
// function Book(title, author, pages, read, img, id) {
//   (this.title = title),
//     (this.author = author),
//     (this.pages = pages),
//     (this.read = read),
//     (this.image = img),
//     (this.id = id);
// }

class Book {
  constructor(title, author, pages, read, img, id) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read),
      (this.image = img),
      (this.id = id);
  }

  createBook() {
    let bookCard = document.createElement("div");
    (bookCard.className = "book-card"),
      (bookCard.id = `${this.id}`),
      mainContainer.appendChild(bookCard);
    let removeBook = document.createElement("button");
    (removeBook.className = "remove-book"),
      (removeBook.innerHTML = "&times;"),
      bookCard.appendChild(removeBook);
    let bookTitle = document.createElement("h2");
    (bookTitle.className = "book-title"),
      (bookTitle.innerText = ` ${this.title}`),
      bookCard.appendChild(bookTitle);
    let bookImage = document.createElement("img");
    (bookImage.className = "book-image"),
      (bookImage.src = this.image),
      bookCard.appendChild(bookImage);
    let bookAuthor = document.createElement("p");
    (bookAuthor.className = "book-author"),
      (bookAuthor.innerText = `Author: ${this.author}`),
      bookCard.appendChild(bookAuthor);
    let bookPages = document.createElement("p");
    (bookPages.innerText = `Pages: ${this.pages}`),
      bookCard.appendChild(bookPages);
    let readStatusContainer = document.createElement("div");
    bookCard.appendChild(readStatusContainer),
      (readStatusContainer.className = "read-container");
    let readStatusLabel = document.createElement("p");
    (readStatusLabel.innerText = "Read:  "),
      readStatusContainer.appendChild(readStatusLabel);
    let switchLabel = document.createElement("label");
    (switchLabel.className = "switch"),
      readStatusContainer.appendChild(switchLabel);
    let readStatus = document.createElement("input");
    (readStatus.type = "checkbox"),
      (readStatus.checked = this.read),
      (readStatus.id = "read-switch"),
      switchLabel.appendChild(readStatus);
    let switchSpan = document.createElement("span");
    (switchSpan.className = "slider round"),
      switchLabel.appendChild(switchSpan),
      (localStorage[this.id] = JSON.stringify(this));
    removeBook.addEventListener("click", function (e) {
      removeElement(e.target.parentNode.id);
    });
    readStatus.addEventListener("change", this.changeReadStatus);
  }

  changeReadStatus() {
    let thisBook = library[this.parentNode.parentNode.parentNode.id];
    thisBook.read = !thisBook.read;
    localStorage[thisBook.id] = JSON.stringify(thisBook);
  }
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

function validate(e) {
  inputFields.every((e) => "" !== e.value.trim()) &&
    (addBook(), closeForm(), library.at(-1).createBook()),
    inputFields.forEach((field) => {
      "" == field.value.trim() &&
        (field.classList.add("error"),
        setTimeout(function () {
          field.classList.remove("error");
        }, 500));
    }),
    form.reset();
  e.preventDefault();
}

function jsonToObject() {
  library = [];
  for (let i = 0; i < localStorage.length; i++) {
    let currentBook = JSON.parse(localStorage[i]);
    library.push(
      new Book(
        currentBook.title,
        currentBook.author,
        currentBook.pages,
        currentBook.read,
        currentBook.image,
        currentBook.id
      )
    );
  }
  library.forEach((book) => {
    book.createBook();
  });
}

openFormButton.addEventListener("click", () => {
  openForm();
}),
  closeFormButton.addEventListener("click", () => {
    closeForm();
  }),
  form.addEventListener("submit", validate);
library.forEach((book) => {
  localStorage[book.id] = JSON.stringify(book);
}),
  jsonToObject();
