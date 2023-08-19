/**header active when window scroll
 */
var header = document.querySelector("[data-header]");
console.log(header);
var showElementsroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
window.addEventListener("scroll", showElementsroll);
/**end of header active */

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
function Go_to_cart() {
  window.open("Cart.html", "_self");
}
cart_page.addEventListener("click", Go_to_cart);
