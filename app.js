
let library = []

let card;
let title;
let author;
let pages;
let read;
let label;

const titleInput = document.querySelector("#name-input")
const authorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const readInput = document.querySelector("#read-input")
const addBookButton = document.querySelector(".add-book")


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBook() {
    let book = new Book(titleInput.value, authorInput.value, pagesInput.value,readInput.value);
    library.push(book);
    book.addBook();
}

addBookButton.addEventListener('click', function() {
    createBook();
})

// Function to create book card and push  to page
Book.prototype.addBook = function() {
    card = document.createElement("div")
    card.classList.add("book-card");
    title = document.createElement("h1");
    title.textContent = titleInput.value;
    author = document.createElement("h2");
    author.textContent = authorInput.value;
    pages = document.createElement("h3");
    pages.textContent = pagesInput.value;
    read = document.createElement("input");
    read.name = "read"
    read.type = "checkbox";
    
    label = document.createElement("label");
    label.htmlFor = "read"
    label.innerHTML = "read";
    document.body.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
}

// ! Function to load existing books 
// function pushBookToLibrary() {
//     library.forEach(book => {
//         card = document.createElement("div")
//         card.classList.add("book-card");
//         title = document.createElement("h1");
//         title.textContent = book.name;
//         author = document.createElement("h2");
//         author.textContent = book.author;
//         pages = document.createElement("h3");
//         pages.textContent = book.pages;
//         read = document.createElement("input");
//         read.name = "read"
//         read.type = "checkbox";
        
//         label = document.createElement("label");
//         label.htmlFor = "read"
//         label.innerHTML = "read";
//         document.body.appendChild(card);
//         card.appendChild(title);
//         card.appendChild(author);
//         card.appendChild(pages);
//         card.appendChild(read);
//     })    
// }

// pushBookToLibrary();



