let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function displayCartProducts() {
  const cardWrapper = document.querySelector('.card-wrapper');
  const uniqueCartItems = {};

  cart.forEach((item) => {
    if (uniqueCartItems[item.id]) {
      uniqueCartItems[item.id].quantity += 1;
    } else {
      uniqueCartItems[item.id] = { ...item, quantity: 1 };
    }
  });

  let result = "";


  for (const itemId in uniqueCartItems) {
    const item = uniqueCartItems[itemId];
    result += `
      <tr class="cart-item border-b">
        <td></td>
        <td class="relative">
          <img class="w-16" src="${item.img.singleImage}" alt="">
          <button>
            <i class="bi bi-x absolute top-1  -left-2 bg-vege-red cursor-pointer w-4 h-4 rounded-full grid text-vege-white text-center delete-cart" data-id="${item.id}"></i>
          </button>
        </td>
        <td class="py-2 text-xs">${item.name}</td>
        <td class="py-2 text-xs">$${item.price.newPrice.toFixed(2)}</td>
        <td class="py-2 text-xs text-center">${item.quantity}</td>
        <td class="py-2 text-xs text-center">$${(item.price.newPrice * item.quantity).toFixed(2)}</td>
      </tr>
    `;
  }

  cardWrapper.innerHTML = result;

  removeCartItems();

  addIncrementListeners();
  addDecrementListeners();
}

function addIncrementListeners() {
  const incrementButtons = document.querySelectorAll('.increment-button');
  incrementButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const id = e.target.dataset.id;
      incrementQuantity(id);
    });
  });
}

function addDecrementListeners() {
  const decrementButtons = document.querySelectorAll('.decrement-button');
  decrementButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const id = e.target.dataset.id;
      decrementQuantity(id);
    });
  });
}

function incrementQuantity(id) {
  const foundIndex = cart.findIndex((item) => item.id === Number(id));
  if (foundIndex !== -1) {
    cart[foundIndex].quantity++;
    updateCartCount();
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartProducts();
}

function decrementQuantity(id) {
  const foundIndex = cart.findIndex((item) => item.id === Number(id));
  if (foundIndex !== -1) {
    if (cart[foundIndex].quantity > 1) {
      cart[foundIndex].quantity--;
    } else {
      cart.splice(foundIndex, 1);
    }
    updateCartCount();
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartProducts();
}

function updateCartCount() {
  const cartItems = document.querySelector('.header-cart-count');
  cartItems.innerHTML = cart.length;
}

function removeCartItems() {
  const deleteBtns = document.querySelectorAll('.delete-cart');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const id = e.target.dataset.id;
      removeFromCart(id);
    });
  });
}

function removeFromCart(id) {
  const foundIndex = cart.findIndex((item) => item.id === Number(id));
  if (foundIndex !== -1) {
    if (cart[foundIndex].quantity > 1) {
      cart[foundIndex].quantity--;
    } else {
      cart.splice(foundIndex, 1);
    }
    updateCartCount();
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartProducts();
  saveCartValues();
}

function saveCartValues() {
  const cartTotal = document.getElementById('cart-total');
  const subTotal = document.getElementById('subtotal');
  const fastCargo = document.getElementById('fast-cargo');

  let itemsTotal = 0;

  cart.length > 0 && cart.map((item) => (itemsTotal += item.price.newPrice * item.quantity));

  subTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
  cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;

  const fastCargoPrice = 15;

  fastCargo.addEventListener('change', function (e) {
    if (e.target.checked) {
      cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`;
    }else{
      cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
    }
  });

}

saveCartValues()

document.addEventListener('DOMContentLoaded', function () {
  displayCartProducts();
});


