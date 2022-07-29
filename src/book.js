const library = [];

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

function Book(title, author, pages) {
  let bookProps = { title, author, pages, read: false };
  return Object.assign(bookProps, bookMethods);
}

function addBook(title, author, pages) {
  let newBook = Book(title, author, pages);
  library.push(newBook);
}

function removeBook() {}
