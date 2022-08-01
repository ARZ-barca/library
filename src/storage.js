import createBook from "./dom";
// loads the books in storage
function loadLocalStorage() {
  let libraryStorage = JSON.parse(localStorage.getItem("library"));
  if (libraryStorage !== null) {
    libraryStorage.forEach((book) => {
      createBook(book.title, book.author, book.pages, book.read);
    });
  }
}

export default loadLocalStorage;
