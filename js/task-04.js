
/// pobieram ref do elem
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

// dodaje zdarzenie zwększające wartość licznika
increment.addEventListener("click", (event) => {
  counterValue++;
  value.textContent = counterValue;
});
// dodaję zdarzenie zmienijszające wartość licznika
decrement.addEventListener("click", (event) => {
  counterValue--;
  value.textContent = counterValue;
});