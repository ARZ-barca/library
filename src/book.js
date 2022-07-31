let library = [];

// updates the local storage
function setLocalStorage() {
  localStorage.setItem("library", JSON.stringify(library));
  console.log(localStorage.library);
}

// book factory function
function Book(title, author, pages, read) {
  return { title, author, pages, read };
}

// adds a book to library then returns it
function addBook(title, author, pages, read) {
  const newBook = Book(title, author, pages, read);

  library.push(newBook);
  // console.log(library);
  setLocalStorage();

  return newBook;
}

// removes a book from library
function removeBook(book) {
  let bookIndex = library.indexOf(book);
  if (bookIndex === 1) {
    return;
  }
  library.splice(bookIndex, 1);
  setLocalStorage();
}

function getLibrary() {
  return library;
}

function setLibrary(newLibrary) {
  library = newLibrary;
}

export { addBook, removeBook, getLibrary, setLibrary, setLocalStorage };
