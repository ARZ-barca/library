import createBook from "./dom";

const form = document.querySelector(".add-book");

const formCover = document.querySelector(".add-book-cover");
const formCancel = document.querySelector(".cancel-add-book");

const titleInput = form.querySelector(".title-input");
const authorInput = form.querySelector(".author-input");
const pagesInput = form.querySelector(".pages-input");

const titleError = form.querySelector(".title-error");
const authorError = form.querySelector(".author-error");
const pagesError = form.querySelector(".pages-error");

titleInput.addEventListener("input", () => {
  checkTitleInput();
});

authorInput.addEventListener("input", () => {
  checkAuthorInput();
});

pagesInput.addEventListener("input", () => {
  checkPagesInput();
});

function checkTitleInput() {
  if (!titleInput.checkValidity()) {
    titleError.classList.add("active");
    if (titleInput.validity.tooLong) {
      titleError.textContent = "max le nght is 20 characters";
    }
    if (titleInput.validity.valueMissing) {
      titleError.textContent = "title is required";
    }
  } else {
    titleError.classList.remove("active");
    titleError.textContent = "";
  }
}

function checkAuthorInput() {
  if (!authorInput.checkValidity()) {
    authorError.classList.add("active");
    if (authorInput.validity.tooLong) {
      authorError.textContent = "max lenght is 20 characters";
    }
    if (authorInput.validity.tooShort) {
      authorError.textContent = "min lenght is 3 characters";
    }
    if (authorInput.validity.patternMismatch) {
      authorError.textContent = "only alphabetic characters";
    }
    if (authorInput.validity.valueMissing) {
      authorError.textContent = "author is required";
    }
  } else {
    authorError.classList.remove("active");
    authorError.textContent = "";
  }
}

function checkPagesInput() {
  if (!pagesInput.checkValidity()) {
    pagesError.classList.add("active");
    if (pagesInput.validity.rangeUnderflow) {
      pagesError.textContent = "must be more than 1";
    }
    if (pagesInput.validity.patternMismatch) {
      pagesError.textContent = "only numbers";
    }
    if (pagesInput.validity.valueMissing) {
      pagesError.textContent = "pages is required as a number";
    }
  } else {
    pagesError.classList.remove("active");
    pagesError.textContent = "";
  }
}

function activateForm() {
  formCover.addEventListener("click", (e) => {
    e.target.classList.add("hide");
  });
  formCancel.addEventListener("click", (e) => {
    formCover.classList.remove("hide");
  });
  form.addEventListener("submit", (e) => {
    checkTitleInput();
    checkAuthorInput();
    checkPagesInput();
    if (form.checkValidity()) {
      createBook(titleInput.value, authorInput.value, pagesInput.value, false);
      resetInputs(
        [titleInput, authorInput, pagesInput],
        [titleError, authorError, pagesError]
      );
    }
    e.preventDefault();
  });
}

function resetInputs(inputs, errors) {
  inputs.forEach((input) => {
    input.value = "";
  });
  errors.forEach((error) => {
    error.textContent = "";
    error.classList.remove("active");
  });
}

export default activateForm;
