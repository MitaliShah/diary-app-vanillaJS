const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.querySelector(".entry-textbox");

let addEntryToDom = function (event) {
  event.preventDefault();
  console.log(entryTextbox.value);
};

entryForm.addEventListener("submit", addEntryToDom);
