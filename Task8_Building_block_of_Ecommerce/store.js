// img effect
// const music = document.getElementById("music");
// const img = document.querySelector("img");

// music.addEventListener("mousemove", (e) => {
//   const x = e.clientX - e.target.offsetLeft;
//   const y = e.clientY - e.target.offsetTop;

//   img.style.transformOrigin = `${x}px ${y}px`;
//   img.style.transform = "scale(2)";
// });

// music.addEventListener("mouseleave", () => {
//   img.style.transformOrigin = "center center";
//   img.style.transform = "scale(1)";
// });

const cart_items = document.querySelector("#cart.cart-items");

//add to cart
var addToCartButtons = document.getElementsByClassName("shop-item-button");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-images")[0].src;
  addItemToCart(title, price, imageSrc);
  console.log(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartRowContents = `<div class="cart-item cart-column">
  <img class="cart-item-image" src=${imageSrc} width="100"
height="100">
<span class="cart-item-title">${title}</span>
</div>
<span class="cart-item-title">${price}</span>
<div class="cart-quantity cart-column">
<input class="cart-quantity-input" type="number" value="1">
<button class="btn btn-danger" type="button">REMOVE</button>
  </div>`;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartItems.appendChild(cartRow);
  const container = document.getElementById("container");
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerHTML = `<h4>Your Product:<span>${title}</span>is added to the cart</h4>`;
  container.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 2500);
}
if (
  e.target.className == "cart-btn-bottom" ||
  e.target.className == "cart-bottom" ||
  e.target.className == "cart-holder"
) {
  document.querySelector("#cart").style = "display:block;";
}
if (e.target.className == "cancel") {
  document.querySelector("#cart").style = "display:none;";
}

// var removeCartItemButtons = document.getElementsByClassName("btn-danger");
// console.log(removeCartItemButtons);
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//   var button = removeCartItemButtons[i];
//   button.addEventListener("click", function (event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//   });
// }
