import { addBook, removeBook, setLocalStorage } from "./book";

// reference to library and form to add books before form
const form = document.querySelector(".add-book");
const library = document.querySelector(".library");

// craetes a book both in dom and in library array
function createBook(title, author, pages, read) {
  let bookDiv = document.createElement("div");
  let book = addBook(title, author, pages, read);
  // console.log(localStorage.library);
  let readText = book.read === true ? "Read" : "Not read";
  bookDiv.innerHTML = `
            <div class="title">${title}</div>
            <div class="by">By</div>
            <div class="author">${author}</div>
            <div class="pages">${book.pages} pages</div>
            <button type="button" class="read">${readText}</button>
            <button type="button" class="remove">Remove</button>`;
  bookDiv.classList.add("book");
  // console.log(book);
  library.insertBefore(bookDiv, form);

  // functionality for read and remove buttons

  let changeReadButton = bookDiv.querySelector(".read");
  let removeButton = bookDiv.querySelector(".remove");

  // check for when loading from storage
  if (book.read) {
    changeReadButton.classList.add("have-read");
  }

  function changeRead() {
    this.classList.toggle("have-read");
    book.read = !book.read;
    setLocalStorage();
    this.textContent = book.read === true ? "Read" : "Not read";
  }
  function deleteBook() {
    bookDiv.remove();
    removeBook(book);
  }

  changeReadButton.addEventListener("click", changeRead);
  removeButton.addEventListener("click", deleteBook);
}

export default createBook;
