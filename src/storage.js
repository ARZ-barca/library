import createBook from "./dom";

function loadLocalStorage() {
  console.log(localStorage.getItem("library"));
  let libraryStorage = JSON.parse(localStorage.getItem("library"));
  // console.log(libraryStorage);
  if (libraryStorage !== null) {
    libraryStorage.forEach((book) => {
      createBook(book);
    });
  }
}

export default loadLocalStorage;