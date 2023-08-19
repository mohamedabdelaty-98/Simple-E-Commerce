/** section Cart*/
//add lenght from localstorage to cart
var itemadded = localStorage.getItem("ProductInCard")
  ? JSON.parse(localStorage.getItem("ProductInCard"))
  : [];
if (itemadded) {
  document.getElementById("item_card").innerHTML = itemadded.length;
}
// Display product in cart

var ss = document.getElementById("cart");
var none_cart = document.getElementById("cart_none");

function displayitems(allproducts = []) {
  let products =
    JSON.parse(localStorage.getItem("ProductInCard")) || allproducts;

  // Clear the existing content before updating
  ss.innerHTML = "";

  if (products.length === 0) {
    none_cart.innerHTML = `<div class="content_cart_none">
    <div class="cart_display_empty">
    <img src="./images/Cart_1.jpg" alt="" />
    </div>
  </div>`;
  } else {
    none_cart.innerHTML = ""; // Clear the "empty cart" message

    products.forEach((element) => {
      ss.innerHTML += ` <div class="content_cart">
      <div class="cart_dispaly_imag">
        <img src="${element.image}" alt="" />
      </div>
      <div class="cart_display_text">
        <p>${element.name}</p>
        <p>Ordered Items: ${element.Numberofitem}</p>
        <p>Price: $${element.price * element.Numberofitem}.00</p>
        <button class="remove-button" onclick="deleteItem(${
          element.id
        })"  onclick="remove(${element.Numberofitem})">Remove</button>
      </div>
    </div>`;
    });
  }
}

displayitems();
var counter_delet = localStorage.getItem("num");
function deleteItem(id) {
  let productitem = localStorage.getItem("ProductInCard");
  if (productitem) {
    let items = JSON.parse(productitem);
    let clicked = items.find((item) => item.id === id);
    // decrease items
    if (clicked && clicked.Numberofitem > 1) {
      clicked.Numberofitem--;
    } else {
      // If Numberofitem is 1 , remove the entire product from the cart
      items = items.filter((item) => item.id !== id);
    }

    // Update the localStorage and the display
    localStorage.setItem("ProductInCard", JSON.stringify(items));
    displayitems(items);
    // Update the total counter
    counter_delet--; // Decrease by 1 regardless of the Numberofitem
    localStorage.setItem("num", counter_delet);
    document.getElementById("item_card").innerHTML = counter_delet;
  }
}
if (itemadded) {
  document.getElementById("item_card").innerHTML = counter_delet;
}
