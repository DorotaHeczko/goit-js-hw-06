const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 // szukam elem, tworzę nowe li 

const newList = document.querySelector("#ingredients");
let li = document.createElement("li");

// iteruję po tablicy, dodaję klasę

ingredients.forEach(function (e, i) {
 li = document.createElement("li");
  li.textContent = e;
  li.classList.add("item");
  newList.append(li);
  
});

console.log(li)

