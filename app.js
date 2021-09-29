// ! Variables
const addBookButton = document.querySelector('.add-button');
const mainContainer = document.querySelector('.main-container');
let library = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBook(bookTitle) {
    let titleInput = prompt("What is the book title: ");
    let authorInput = prompt("Who is the book author: ");
    let pagesInput = prompt("How many pages? ");
    let readInput = prompt("Have you read the book yet?");
    bookTitle = new Book(titleInput, authorInput, pagesInput, readInput);
    library.push(bookTitle);

    
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    mainContainer.appendChild(bookCard);
    let title = document.createElement('h1');
    title.classList.add('book-title');
    bookCard.appendChild(title);
    title.innerHTML = `${bookTitle.title}`;
    let author = document.createElement('h3');
    author.classList.add('author');
    author.innerHTML = `Author: ${bookTitle.author}`;
    bookCard.appendChild(author);
    let pages = document.createElement('h4');
    pages.classList.add('pages');
    pages.innerHTML = `Pages: ${bookTitle.pages}`;
    bookCard.appendChild(pages);
    let readLabel = document.createElement('h4');
    readLabel.classList.add('read-label');
    readLabel.innerHTML = "Have you read the book? ";
    bookCard.appendChild(readLabel);
    let readCheckBox = document.createElement('input');
    readCheckBox.type = 'checkbox';
    readCheckBox.classList.add('readInput');
    readLabel.appendChild(readCheckBox);
}

addBookButton.addEventListener('click', () => {
    createBook("Hobbit");
})

