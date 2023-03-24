// szukam elementu po klasie 

const numberOfItems = document.querySelectorAll(".item"); 
console.log(`Number of categories ${numberOfItems.length}`);

//znajduję listę kategorii oraz jej długość

for (const element of numberOfItems) {
    
    console.log(`Category: ${element.children[0].innerText}`);

    console.log(`Elements: ${element.children[1].children.length}`);
}