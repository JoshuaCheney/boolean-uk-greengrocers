/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

// pseudocode:

// 1.0 create the data:

const storeItems = [
  {
    id: `001-beetroot`,
    name: `Beetroot`,
    price: 0.50,
  },
{
    id: `002-carrot`,
    name: `carrot`,
    price: 0.30,
  },
{
    id: `003-apple`,
    name: `Apple`,
    price: 0.35,
  },
]
// console.log(storeItems)

// 2.0 create item bridge to ul

const ulStoreItem = document.querySelector(".store--item-list")


function renderStoreItems(storeItems) {
console.log(storeItems)
  for (let i = 0; i < storeItems.length; i++) {
    const item = storeItems[i];
    console.log(item)
    console.log(`assets/icons/${item.id}.svg`)
    // const storeLiEl = document.createElement("li")
    // ulEl.append(storeLiEl)
    
    // const imageDivEl = document.createElement("div")
    // storeLiEl.append(imageDivEl)
    // imageDivEl.classList.add("store--item-icon")

    // const imageEl = document.createElement("img");
    // const imgSrc = `assets/icons/${item.id}.svg`;
    // img.setAttribute("src", imgSrc);
    // imageDivEl.append(imageEl)
    
    // const addToCartButton = document.createElement("button")
    // storeLiEl.append(addToCartButton)
    // addToCartButton.innerText = "Add to cart"
  }
}

const storeItem = renderStoreItems(storeItems)