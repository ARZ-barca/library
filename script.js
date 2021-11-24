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

const cards = document.querySelector('.cards')

function displayBooks(myLibrary) {
    let card;
    for (let i = 0; i < myLibrary.length; i++) {
        card = document.createElement('div');
        let text;
        if (myLibrary[i].read) {
            text = 'Read'
        } else {
            text = 'Not Read'
        }
        card.innerHTML = `
                  <h3 class="book-title">
                    <ul>
                        <li>Title : ${myLibrary[i].name}</li> 
                        <li>Author : ${myLibrary[i].author}</li>
                        <li>Year : ${myLibrary[i].year}</li>
                        <li>Pages : ${myLibrary[i].pages}</li>
                        <li><button class="read-button" data-index="${i}">${text}</button></li>
                    </ul>
                  </h3>`;
        card.classList.add('card');
        cards.appendChild(card);
    }
}
//adding the form to the page with add book button
const addButton = document.querySelector('.add-button');
const form = document.querySelector('.form');
addButton.addEventListener('click', activeForm);
function activeForm() {
    form.classList.toggle('active');
}

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

}

//adding the cancel button functionality
const cancelButoon = document.querySelector('.cancel')
cancelButoon.addEventListener('click', activeForm)

//letting user change the read status
const readButtons = document.querySelectorAll('.read-button')
readButtons.forEach((element) =>  element.addEventListener('click', changeRead))
function changeRead(event) {
    
}

