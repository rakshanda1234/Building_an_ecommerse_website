const cart_items = document.querySelector("#cart.cart-items");

// window.addEventListener("load", () => {
//   console.log("loaded");
// });
// //add to cart
// var addToCartButtons = document.getElementsByClassName("shop-item-button");
// for (var i = 0; i < addToCartButtons.length; i++) {
//   var button = addToCartButtons[i];
//   button.addEventListener("click", addToCartClicked);
// }

// function addToCartClicked(event) {
//   var button = event.target;
//   var shopItem = button.parentElement.parentElement;
//   var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
//   var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
//   var imageSrc = shopItem.getElementsByClassName("shop-images")[0].src;
//   addItemToCart(title, price, imageSrc);
//   console.log(title, price, imageSrc);
// }

const parentContainer = document.getElementById("EcommerceContainer");
parentContainer.addEventListener("click", (e) => {
  if (e.target.className == "shop-item-button") {
    const id = e.target.parentNode.parentNode.id;
    const imageSrc = document.querySelector(`#${id}img`).src;
    const title = document.querySelector(`#${id}h3`).innerText;
    const price =
      e.target.parentNode.firstElementChild.firstElementChild.innerText;
    let total_cart_price = document.querySelector("#total-value").innerText;
    if (document.querySelector(`#in-cart-${id}`)) {
      alert("This item is already added to the cart");
      return;
    }

    document.querySelector(".cart-number").innerText =
      parseInt(document.querySelector(".cart-number").innerText) + 1;
    // function addItemToCart(title, price, imageSrc) {
    var cart_item = document.createElement("div");
    cart_item.classList.add("cart-row");

    var cart_items = document.getElementsByClassName("cart-items")[0];
    cart_item.innerHTML = `<div class="cart-item cart-column">
  <img class="cart-item-image" src=${imageSrc} width="100"
height="100">
<span class="cart-item-title">${title}</span>
</div>
<span class="cart-item-title">${price}</span>
<div class="cart-quantity cart-column">
<input class="cart-quantity-input" type="number" value="1">
<button class="btn btn-danger" type="button">REMOVE</button>
  </div>`;

    //   cartRow.innerHTML = cartRowContents;
    //   cartItems.append(cartRow);
    cart_items.appendChild(cart_items);

    const container = document.getElementById("container");
    const notification = document.createElement("div");
    notification.style.backgroungColor = iserror ? "red" : "green";
    notification.classList.add("notification");
    notification.innerHTML = `<h4>Your Product:<span>${title}</span>is added to the cart</h4>`;
    container.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 2500);
  }

  // document.addEventListener("click", (e) => {
  //   if (e.target.className == "shop-item-button") {
  //     showNotification(data.message, false);
  //   }
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
  if (e.target.className == "purchase-btn") {
    if (parseInt(document.querySelector(".cart-number").innerText) == 0) {
      alert("you have Nothing in cart, Add some products to purchase!");
      return;
    }
    alert("Thanks for the purchase");
    cart_items.innerHTML = "";
    document.querySelector(".cart-number").innerText = 0;
    document.querySelector("#total-value").innerText = `0`;
  }

  //   function showProductsInCart(list of products) {
  //     cart_items.innerHTML = "";
  //     document.querySelector(".cart-number").innerText = 0;
  //     //   document.querySelector("#total-value").innerText = `0`;
  //   }

  //   if ((e.target.innerText = "REMOVE")) {
  //     let total_cart_price = document.querySelector("#total-value").innerText;
  //     total_cart_price =
  //       parseFloat(total_cart_price).toFixed(2) -
  //       parseFloat(
  //         document.querySelector(
  //           `${e.target.parentNode.parentNode.id}.cart-price`
  //         ).innerText
  //       ).toFixed(2);
  //     document.querySelector(".cart-number").innerText =
  //       parseInt(document.querySelector(".cart-number").innerText) - 1;
  //     document.querySelector(
  //       "#total-value"
  //     ).innerText = `${total_cart_price.toFixed(2)}`;
  //     e.target.parentNode.parentNode.remove();
  //   }
});
// var removeCartItemButtons = document.getElementsByClassName("btn-danger");
// console.log(removeCartItemButtons);
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//   var button = removeCartItemButtons[i];
//   button.addEventListener("click", function (event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//   });
// }
// }
