const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.querySelector(".entry-textbox");

let addEntryToDom = function (event) {
  event.preventDefault();
  const entryDiv = document.createElement("div");
  entryDiv.className = "single-entry";
  entryDiv.innerText = entryTextbox.value;
  entriesSection.appendChild(entryDiv);
};

entryForm.addEventListener("submit", addEntryToDom);
