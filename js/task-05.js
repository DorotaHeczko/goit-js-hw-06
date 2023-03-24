
// pobieram referencje do inputa

const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

//dodaje zdarzenie 
inputEl.addEventListener("input", () => {
  spanEl.innerHTML = !inputEl.value ? "anonymous" : inputEl.value;
});
