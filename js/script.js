const entryForm = document.getElementById("entryForm");

let addEntryToDom = function (event) {
  event.preventDefault();
};

entryForm.addEventListener("submit", addEntryToDom);
