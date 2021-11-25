let myLibrary = [];

function Book(name, author, year, pages, read) {
    this.name = name,
    this.author = author,
    this.year = year,
    this.pages = pages,
    this.read = read
}

Book.prototype.changeRead = function() {
    this.read = !this.read
}

function addBookToLibrary(name, author, year, pages, read) {
    let newBook = new Book(name, author, year, pages, read);
    myLibrary.push(newBook);
}
//adding the book from my library as a card to cards
const cards = document.querySelector('.cards')
function createCard(book) {
    let card = document.createElement('div')
    let text;
    if (book.read) {
        text = 'Read'
    } else {
        text = 'Not Read'
    }
    card.innerHTML = `
    <h3 class="book-title">
      <ul>
          <li>Title : ${book.name}</li> 
          <li>Author : ${book.author}</li>
          <li>Year : ${book.year}</li>
          <li>Pages : ${book.pages}</li>
      </ul>
          <div class="card-buttons"><button class="read-button" data-index="${myLibrary.indexOf(book)}">${text}</button>
          <button class="remove-button">Remove</button></div>   
    </h3>`;
    card.classList.add('card');
    card.setAttribute("data-index",`${myLibrary.indexOf(book)}`);
    //changing the read status
    let readButton = card.querySelector('button')
    if (book.read) {
        readButton.style.backgroundColor = 'green'
    } else {
        readButton.style.backgroundColor = 'red'
    }
    readButton.addEventListener('click', (event) => {
        book.changeRead();
        if (book.read) {
            readButton.textContent = 'Read';
            readButton.style.backgroundColor = 'green'
        } else {
            readButton.textContent = 'Not Read';
            readButton.style.backgroundColor = 'red'
        }
    });
    //using the remove button
    let removeButton = card.querySelector('button[class="remove-button"]')
    removeButton.addEventListener('click', (event) => {
        card.remove();
        myLibrary.splice(myLibrary.indexOf(book),1)
    })
    cards.appendChild(card);
}
// add book button functionality
const addButton = document.querySelector('.add-button');
const form = document.querySelector('.form');
addButton.addEventListener('click', activeForm);
function activeForm() {
    form.classList.toggle('active');
}
// escape key functionality and enter key when form is on functionality
window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        form.classList.remove('active')
    }
    if (event.keyCode === 13 && form.getAttribute('class').includes('active')) {
        addBook()
    }
})
//adding the book to library
const addToLibrary = document.querySelector('.add-to-library') ;
addToLibrary.addEventListener('click', addBook);
function addBook() {
    let title = document.querySelector('#title-input').value
    let author = document.querySelector('#author-input').value
    let year = document.querySelector('#year-input').valueAsNumber
    let pages = document.querySelector('#pages-input').valueAsNumber
    let read = document.querySelector('#read-input').checked
    if (!title || !author || !year || !pages){
        alert('You need to fill title, author, year and pages fields!')
        return;
    }
    addBookToLibrary(title, author, year, pages, read)
    console.log(myLibrary)
    createCard(myLibrary[myLibrary.length - 1])
}
//adding the cancel button functionality
const cancelButton = document.querySelector('.cancel');
cancelButton.addEventListener('click', activeForm);

//adding the remove button for each card



//garbage code
/*

function displayBooks(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i])
    }
}
//adding the form to the page with add book button


//adding the book to library
const addToLibrary = document.querySelector('.add-to-library') ;
addToLibrary.addEventListener('click', addBook);
function addBook(event) {
    let title = document.querySelector('#title-input').value
    let author = document.querySelector('#author-input').value
    let year = document.querySelector('#year-input').valueAsNumber
    let pages = document.querySelector('#pages-input').valueAsNumber
    let read = document.querySelector('#read-input').checked
    if (!title || !author || !year || !pages){
        alert('You need to fill title, author, year and pages fields!')
        return;
    }
    addBookToLibrary(title, author, year, pages, read)












    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {card.remove()});
    displayBooks(myLibrary);
    //uncomment bellow line if you want the form to disapear after adding the book
    //activeForm()
    const readButtons = document.querySelectorAll('.read-button');
    readButtons.forEach((element) => element.addEventListener('click', changeRead));
    function changeRead(event) {
        myLibrary[Number(event.target.getAttribute('data-index'))].changeRead()
        displayBooks(myLibrary);
        console.log(1)
    }
}

//adding the cancel button functionality
const cancelButoon = document.querySelector('.cancel');
cancelButoon.addEventListener('click', activeForm);

//letting user change the read status
function changeReadFunc(){
    let cards = document.querySelectorAll('.card');
    const readButtons = document.querySelectorAll('.read-button');
    readButtons.forEach((element) => element.addEventListener('click', changeRead));
    function changeRead(event) {
        myLibrary[Number(event.target.getAttribute('data-index'))].changeRead()
        cards.forEach((card) => {card.remove()});
        displayBooks(myLibrary);
        console.log(1)
    }
}
*/