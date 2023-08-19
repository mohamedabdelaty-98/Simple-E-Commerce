"use strict";
/**add event on element
 */
var addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (var i = 0; i < elem.length; i++)
      elem[i].addEventListener(type, callback);
  } else {
    elem.addEventListener(elem, callback);
  }
};
/**end event on element */
/**navbartoggle
 */
var navbar = document.querySelector("[data-navbar]");
var navbarlinks = document.querySelectorAll("[data-nav-link]");
var navTogglers = document.querySelectorAll("[data-nav-toggler]");
var overlay = document.querySelector("[data-overlay]");
var toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};
addEventOnElem(navTogglers, "click", toggleNavbar);

var closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElem(navbarlinks, "click", closeNavbar);
/**end of navbar */

/**header active when window scroll
 */
var header = document.querySelector("[data-header]");
// back to top
var backTopBtn = document.querySelector("[data-back-top-btn]");
console.log(header);
var showElementsroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};
window.addEventListener("scroll", showElementsroll);
/**end of header active */

/**slider
 */
const curseral_slide = document.querySelector(".slide_img");
const slideimges = document.querySelectorAll(".slide_img img");
//buttons
const prevBtn = document.querySelector("#prevbtn");
const nextBtn = document.querySelector("#nextbtn");
// counter
let counter = 0;
// original width
const size = slideimges[0].clientWidth;
function next_btn() {
  if (counter >= slideimges.length - 1) return;
  curseral_slide.style.transition = "transform 0.4s  ease-in-out";
  counter++;
  curseral_slide.style.transform = "translateX(" + -size * counter + "px)";
}
nextBtn.addEventListener("click", next_btn);

prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  curseral_slide.style.transition = "transform 0.4s  ease-in-out";
  counter--;
  curseral_slide.style.transform = "translateX(" + -size * counter + "px)";
});
// when transition end start from begain
curseral_slide.addEventListener("transitionend", function () {
  if (slideimges[counter].id === "last_clone") {
    curseral_slide.style.transition = "none";
    counter = slideimges.length - 2;
    curseral_slide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (slideimges[counter].id === "first_clone") {
    curseral_slide.style.transition = "none";
    counter = slideimges.length - counter;
    curseral_slide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
setInterval(next_btn, 3000);
/**end of slider */
// Filter Categories
var filterbtns = document.querySelectorAll("[data-filter-btn]");

// var filterbox = document.querySelector("[]");
var lastclicked = filterbtns[0];
var filter = function () {
  lastclicked.classList.remove("active");
  this.classList.add("active");
  lastclicked = this;
};
addEventOnElem(filterbtns, "click", filter);
// end of Filter Categories

/**cart */
// all product
var products = "";
var allproduct = document.getElementById("all_product");
function displayall() {
  products.forEach((element) => {
    container_product.innerHTML += ` <div class="col" >  <div class="card card_img mb-5 myclass" style="width: 20rem;">
    <img src="${element.image}" class="card-img-top myclass" alt="...">
    <ul class="card-action-list">
    <li><button class="card-action-btn add_cart" aria-label="add to cart" title="add to cart" onclick="add_to_cart(${element.id})">
        <ion-icon name="add-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn" aria-label="add to cart" title="add to cart" id="add_cart">
        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn" aria-label="add to whishlist" title="add to whishlist">
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon></button>
    </li>
  </ul>
    <div class="card-body">
    <h3 class="card-title">${element.name}</h3>
    <p class="card-text"><h5 class="card-title">$${element.price}.00</h5></p>
    </div>
    </div></div>`;
  });
}
var display_decor = document.getElementById("deco_disp");
function displaydecor() {
  container_product.innerHTML = "";
  products.forEach((element) => {
    if (element.category === "decoration") {
      container_product.innerHTML += ` <div class="col" >  <div class="card card_img mb-5 myclass" style="width: 20rem;">
    <img src="${element.image}" class="card-img-top myclass" alt="...">
    <ul class="card-action-list">
    <li><button class="card-action-btn add_cart" aria-label="add to cart" title="add to cart" onclick="add_to_cart(${element.id})">
        <ion-icon name="add-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn" aria-label="add to cart" title="add to cart" id="add_cart" onclick="Go_to_cart()">
        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn" aria-label="add to whishlist" title="add to whishlist">
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon></button>
    </li>
  </ul>
    <div class="card-body">
    <h3 class="card-title">${element.name}</h3>
    <p class="card-text"><h5 class="card-title">$${element.price}.00</h5></p>
    </div>
    </div></div>`;
    }

    // console.log(element.id);
  });
}
var display_accessor = document.getElementById("accessor_disp");
function displayaccessor() {
  container_product.innerHTML = "";
  products.forEach((element) => {
    if (element.category === "accessory") {
      container_product.innerHTML += ` <div class="col" >  <div class="card card_img mb-5 myclass" style="width: 20rem;">
    <img src="${element.image}" class="card-img-top myclass" alt="...">
    <ul class="card-action-list">
    <li><button class="card-action-btn add_cart" aria-label="add to cart" title="add to cart" onclick="add_to_cart(${element.id})">
        <ion-icon name="add-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn" aria-label="add to cart" title="add to cart" id="add_cart" onclick="Go_to_cart()">
        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn" aria-label="add to whishlist" title="add to whishlist">
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon></button>
    </li>
  </ul>
    <div class="card-body">
    <h3 class="card-title">${element.name}</h3>
    <p class="card-text"><h5 class="card-title">$${element.price}.00</h5></p>
    </div>
    </div></div>`;
    }
  });
}
var display_furniture = document.getElementById("furniture_disp");
function displayfurniture() {
  container_product.innerHTML = "";
  products.forEach((element) => {
    if (element.category === "furniture") {
      container_product.innerHTML += ` <div class="col" >  <div class="card card_img mb-5 myclass" style="width: 20rem;">
      <img src="${element.image}" class="card-img-top myclass" alt="...">
      <ul class="card-action-list">
      <li><button class="card-action-btn add_cart" aria-label="add to cart" title="add to cart" onclick="add_to_cart(${element.id})">
          <ion-icon name="add-outline" aria-hidden="true"></ion-icon></button>
      </li>
  
      <li><button class="card-action-btn" aria-label="add to cart" title="add to cart" id="add_cart" onclick="Go_to_cart()">
          <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon></button>
      </li>
  
      <li><button class="card-action-btn" aria-label="add to whishlist" title="add to whishlist">
          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon></button>
      </li>
    </ul>
      <div class="card-body">
      <h3 class="card-title">${element.name}</h3>
      <p class="card-text"><h5 class="card-title">$${element.price}.00</h5></p>
      </div>
      </div></div>`;
    }
  });
}

function displayProducts(products) {
  products.forEach((element) => {
    container_product.innerHTML += ` <div class="col" >  <div class="card card_img mb-5 myclass" style="width: 20rem;">
    <img src="${element.image}" class="card-img-top myclass" alt="...">
    <ul class="card-action-list">
    <li><button class="card-action-btn add_cart" aria-label="add to cart" title="add to cart" onclick="add_to_cart(${element.id})">
        <ion-icon name="add-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn " aria-label="add to cart" title="add to cart" onclick="Go_to_cart()">
        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon></button>
    </li>

    <li><button class="card-action-btn" aria-label="add to whishlist" title="add to whishlist">
        <ion-icon name="heart-outline" aria-hidden="true"></ion-icon></button>
    </li>
  </ul>
    <div class="card-body">
    <h3 class="card-title">${element.name}</h3>
    <p class="card-text"><h5 class="card-title">$${element.price}.00</h5></p>
    </div>
    </div></div>`;
  });
  allproduct.addEventListener("click", displayall);
  display_decor.addEventListener("click", displaydecor);
  display_accessor.addEventListener("click", displayaccessor);
  display_furniture.addEventListener("click", displayfurniture);
}
function getAllProduct() {
  fetch("./JS/allProducts.json")
    .then((response) => response.text())
    .then((json) => (products = JSON.parse(json)))
    .then((products) => {
      displayProducts(products);
    })
    .catch((error) => {
      console.log(error);
    });
}
getAllProduct();
// End of display product
// add items to cart
var itemadded = localStorage.getItem("ProductInCard")
  ? JSON.parse(localStorage.getItem("ProductInCard"))
  : [];
//add lenght from localstorage
var counter_card = itemadded.length;
function add_to_cart(id) {
  let clicked = products.find((item) => item.id === id);
  // check code
  const itemExists = itemadded.some((item) => item.id === clicked.id);
  if (!itemExists) {
    itemadded.push(clicked);
    counter_card++;
  } else {
    let i = itemadded.find((item) => item.id === clicked.id);
    i.Numberofitem++;
    counter_card++;
  }
  // end of check code
  localStorage.setItem("ProductInCard", JSON.stringify(itemadded));
  document.getElementById("item_card").innerHTML = counter_card;
  localStorage.setItem("num", counter_card);
}
if (itemadded) {
  document.getElementById("item_card").innerHTML = localStorage.getItem("num");
}

function Go_to_cart() {
  window.open("Cart.html", "_self");
}
cart_page.addEventListener("click", Go_to_cart);
// end filter card
// cart counter
