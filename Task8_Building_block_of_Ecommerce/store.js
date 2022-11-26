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
  //   const WhichbuttonclickedID = event.target.id;
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
  //   alert(`product "${title}" is successfully added to cart`);
  const container = document.getElementById("container");
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerHTML = `<h4>Your Product : <span>${name}</span> is added to the cart<h4>`;
  container.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 2500);
}
