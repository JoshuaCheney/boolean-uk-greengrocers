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
  {
    id: `004-apricot`,
    name: `Apricot`,
    price: 0.40,
  },
  {
    id: `005-avocado`,
    name: `Avacado`,
    price: 0.40,
  },
  {
    id: `006-bananas`,
    name: `Bananas`,
    price: 0.40,
  },
  {
    id: `007-bell-pepper`,
    name: `Bell Pepper`,
    price: 0.40,
  },
  {
    id: `008-berry`,
    name: `Berry`,
    price: 0.40,
  },
  {
    id: `009-blueberry`,
    name: `Blueberry`,
    price: 0.40,
  },
  {
    id: `010-eggplant`,
    name: `Eggplant`,
    price: 0.40,
  },
]
// console.log(storeItems)

// 2.0 create item bridge to ul


// function renderStoreItems(storeItems) {
// console.log(storeItems)
//   for (let i = 0; i < storeItems.length; i++) {
//     const item = storeItems[i];
//     console.log(item)
//     console.log(`assets/icons/${item.id}.svg`)




//     // const storeLiEl = document.createElement("li")
//     // ulEl.append(storeLiEl)
    
//     // const imageDivEl = document.createElement("div")
//     // storeLiEl.append(imageDivEl)
//     // imageDivEl.classList.add("store--item-icon")

//     // const imageEl = document.createElement("img");
//     // const imgSrc = `assets/icons/${item.id}.svg`;
//     // img.setAttribute("src", imgSrc);
//     // imageDivEl.append(imageEl)
    
//     // const addToCartButton = document.createElement("button")
//     // storeLiEl.append(addToCartButton)
//     // addToCartButton.innerText = "Add to cart"
//   }
// }

// const storeItem = renderStoreItems(storeItems)

const storeItemListEl = document.querySelector(".store--item-list")
console.log("ul bridge: ", storeItemListEl)

// step one write the function (declaration)
//step two write the paramater 
function renderStoreItems(storeItems) {
  console.log("inside the renderStoreItems: ", storeItems)

  //step 5 do something with the data
  //step 6 if data is an aray use a loop
  //step 6.1 is data is an object use .notation to access data
  for (let i = 0; i < storeItems.length; i++) {
    const item = storeItems[i];
    console.log("item: ", item)

    const listItemEl = document.createElement("li")
    // console.log(listItemEl)

    const imageDiv = document.createElement("div")
    imageDiv.classList.add("store--item-icon")
    listItemEl.append(imageDiv)
    // console.log(imageDiv)


    const imageEl = document.createElement("img")
    imageEl.src = `assets/icons/${item.id}.svg`
    imageEl.classList.add("store--item-icon")
    imageDiv.append(imageEl)
    // console.log("image element: ", imageEl)

    const addToCartButton = document.createElement("button")
    addToCartButton.innerText = "Add to cart"
    console.log(addToCartButton)
    listItemEl.append(addToCartButton)

    storeItemListEl.append(listItemEl)
    // console.log("append list: ", storeItemListEl)

  } 
}

//step 3 call the function
renderStoreItems(storeItems)
//step 4 give the function an argument
//step 4.1 check its correct with console.log

// <li>
//   <div class="store--item-icon">
//     <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
//   </div>
//   <button>Add to cart</button>
// </li>

const cartItems = [
  {
    item: {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    quantity: 1
  },
  {
    item: {
      id: `002-carrot`,
      name: `carrot`,
    },
    quantity: 1
  },
  {
    item: {
      id: `003-apple`,
      name: `Apple`,
    },
    quantity: 1
  },
  {
    item: {
      id: `004-apricot`,
      name: `Apricot`,
    },
    quantity: 1
  },
  {
    item: {
      id: `005-avocado`,
      name: `Avacado`,
    },
    quantity: 1
  },
  {
    item: {
      id: `006-bananas`,
      name: `Bananas`,
    },
    quantity: 1
  },
  {
    item: {
      id: `007-bell-pepper`,
    name: `Bell Pepper`,
    },
    quantity: 1
  },
  {
    item: {
      id: `008-berry`,
      name: `Berry`,
    },
    quantity: 1
  },
  {
    item: {
      id: `009-blueberry`,
      name: `Blueberry`,
    },
    quantity: 1
  },
  {
    item: {
      id: `010-eggplant`,
      name: `Eggplant`,
    },
    quantity: 1
  },
]
console.log("cartItemsList: ", cartItems)
console.log("typeof: ", typeof cartItems)

const cartItemListEl = document.querySelector(".cart--item-list")
console.log("ul bridge: ", cartItemListEl)

//add to cart fucntion()

// 1.0: Write the function (declaration)
// 1.1: Write the console.log("Inside function: ", data)
// 1.2: Write the parameter (optional)

function addToCart(storeItems, cartItems) {
  console.log("Inside function: ", cartItems)

  const newCartItem = {
    item: storeItem,
    quantity: 1
  };

  // I Don't Know What I'm Doing Here

  // addToCart(storeItem[0])
  // addToCart(storeItem[0])
  // addToCart(storeItem[1])
  // addToCart(storeItem[1])
  // cartItems.push(newCartItem);
  // console.log("updated cart item: ", cartItems)

  // 3.0 Do something with the data inside the function
  // 3.1 If data is an array use a for loop
  // 3.2 If data is an object use dot notation to access stored info
  // const itemId = cartitems.id


  // 4.0 Return updated data (optional)
}
// 2.0 Call the function
// 2.1 Give the function an argument
// 2.2 Check it's correct with the console.log

addToCart(storeItems[0])
addToCart(storeItems[0])
addToCart(storeItems[1])
addToCart(storeItems[1])
cartItems.push(newCartItem);
console.log("updated cart item: ", cartItems)

// addToCart(storeItem[0])
// console.log(storeItem)
//if if

//input: an object of storeItem
//output: 


//create function for event listener

function removeFromCart(storeItems, cartItems) {
  console.log("inside remove from cart: ", removeFromCart);

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    console.log(cartItem);

    if (cartItem.quantity > 1) {
      cartItem.quantity = i--;
    }
  }
}