import { addBook, removeBook, getLibrary } from "./book";

// reference to library and form to add books before form
const form = document.querySelector(".add-book");
const library = document.querySelector(".library");

// craetes a book both in dom and in library array
function createBook(title, author, pages) {
  let bookDiv = document.createElement("div");
  let book = addBook(title, author, pages);
  bookDiv.innerHTML = `
            <div class="title">${title}</div>
            <div class="by">By</div>
            <div class="author">${author}</div>
            <div class="pages">${pages}</div>
            <button type="button" class="read">Read</button>
            <button type="button" class="remove">Remove</button>`;
  bookDiv.classList.add("book");

  library.insertBefore(bookDiv, form);

  // functionality for read and remove buttons

  let changeReadButton = bookDiv.querySelector(".read");
  let removeButton = bookDiv.querySelector(".remove");

  function changeRead() {
    this.classList.toggle("have-read");
    book.changeRead();
  }
  function deleteBook() {
    bookDiv.remove();
    removeBook(book);
  }

  changeReadButton.addEventListener("click", changeRead);
  removeButton.addEventListener("click", deleteBook);
  // test
  console.log(getLibrary());
}

export default createBook;
