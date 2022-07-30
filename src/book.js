const library = [];

// prototype for book object
const bookMethods = {
  changeRead() {
    this.read = !this.read;
  },
  changeTitle(newTitle) {
    this.title = newTitle;
  },
  changeAuthor(newAuthor) {
    this.author = newAuthor;
  },
  changepages(newPages) {
    this.pages = newPages;
  },
};

// book factory function
function Book(title, author, pages, read) {
  const bookProps = { title, author, pages, read };
  return Object.assign(bookProps, bookMethods);
}

// adds a book to library then returns it
function addBook(title, author, pages) {
  const newBook = Book(title, author, pages);
  library.push(newBook);
  return newBook;
}

// removes a book from library
function removeBook(book) {
  let bookIndex = library.indexOf(book);
  if (bookIndex === 1) {
    return;
  }
  library.splice(bookIndex, 1);
}

function getLibrary() {
  return library;
}

export { addBook, removeBook, getLibrary };
