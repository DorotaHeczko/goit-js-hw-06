// pobieram referencje i dodaje dodaje zdarzenie blur do inputa
const inputEl = document.getElementById("#validation-input");
console.log(inputEl)

inputEl.addEventListener("blur", () => {
  

    if (inputEl.value.length === +inputEl.dataset.length) {
      inputEl.className = "valid";
    } else inputEl.className = "invalid";
  
});