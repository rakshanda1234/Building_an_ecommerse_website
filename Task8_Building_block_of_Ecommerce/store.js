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

// function addItemToCart(title, price, imageSrc) {
//   //   const WhichbuttonclickedID = event.target.id;
//   var cartRow = document.createElement("div");
//   cartRow.classList.add("cart-row");
//   var cartItems = document.getElementsByClassName("cart-items")[0];
//   var cartRowContents = `<div class="cart-item cart-column">
//   <img class="cart-item-image" src=${imageSrc} width="100"
// height="100">
// <span class="cart-item-title">${title}</span>
// </div>
// <span class="cart-item-title">${price}</span>
// <div class="cart-quantity cart-column">
// <input class="cart-quantity-input" type="number" value="1">
// <button class="btn btn-danger" type="button">REMOVE</button>
//   </div>`;
//   cartRow.innerHTML = cartRowContents;
//   cartItems.append(cartRow);

const cart_items = document.querySelector("#cart .cart-items");
document.addEventListener("click", (e) => {
  if (e.target.className == "shop-item-button") {
    const id = e.target.parentNode.parentNode.id;
    const name = document.querySelector(`#${id} h3`).innerText;
    const img_src = document.querySelector(`#${id} img`).src;
    const price = e.target.parentNode.firstElementChild.innerText;
    let total_cart_price = document.querySelector("#total-value").innerText;
    if (document.querySelector(`#in-cart-${id}`)) {
      alert("This item is already added to the cart");
      return;
    }
    document.querySelector(".cart-number").innerText =
      parseInt(document.querySelector(".cart-number").innerText) + 1;
    const cart_item = document.createElement("div");
    cart_item.classList.add("cart-row");
    cart_item.setAttribute("id", `in-cart-${id}`);
    total_cart_price = parseFloat(total_cart_price) + parseFloat(price);
    total_cart_price = total_cart_price.toFixed(2);
    document.querySelector("#total-value").innerText = `${total_cart_price}`;
    cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
    </span>
    <span class='cart-price cart-column'>${price}</span>
    <span class='cart-quantity cart-column'>
        <input type="text" value="1">
        <button>REMOVE</button>
    </span>`;
    cart_items.appendChild(cart_item);

    const container = document.getElementById("container");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `<h4>Your Product : <span>${name}</span> is added to the cart<h4>`;
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
  if (e.target.className == "purchase-btn") {
    if (parseInt(document.querySelector(".cart-number").innerText) === 0) {
      alert("You have Nothing in Cart , Add some products to purchase !");
      return;
    }
    alert("Thanks for the purchase");
    cart_items.innerHTML = "";
    document.querySelector(".cart-number").innerText = 0;
    document.querySelector("#total-value").innerText = `0`;
  }

  if (e.target.innerText == "REMOVE") {
    let total_cart_price = document.querySelector("#total-value").innerText;
    total_cart_price =
      parseFloat(total_cart_price).toFixed(2) -
      parseFloat(
        document.querySelector(
          `#${e.target.parentNode.parentNode.id} .cart-price`
        ).innerText
      ).toFixed(2);
    document.querySelector(".cart-number").innerText =
      parseInt(document.querySelector(".cart-number").innerText) - 1;
    document.querySelector(
      "#total-value"
    ).innerText = `${total_cart_price.toFixed(2)}`;
    e.target.parentNode.parentNode.remove();
  }
});
