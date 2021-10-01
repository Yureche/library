// ! Variables
const mainContainer = document.querySelector(".main-container");
let library = [];
// Create Book Form
const form = document.querySelector(".form-container");
const closeFormButton = document.querySelector(".close-form");
const openFormButton = document.querySelector(".open-form");
const overlay = document.querySelector(".overlay");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function openForm() {
  if (form.style.display === "flex") {
    return;
  }
  form.style.display = "flex";
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "all";
}

function closeForm() {
  form.style.display = "none";
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
}

openFormButton.addEventListener("click", () => {
  openForm();
});

closeFormButton.addEventListener("click", () => {
  closeForm();
});
