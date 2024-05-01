/* СКРИПТ ДЛЯ КОРЗИНЫ*/
document.addEventListener('DOMContentLoaded', function() {
    const products = [
      {
        id: 1,
        name: 'JavaScript Developer',
        price: 150000,
        imageUrl: 'images/1.png'
      },
      {
        id: 2,
        name: 'React Developer',
        price: 190000,
        imageUrl: 'images/3.png'
      },
      {
        id: 3,
        name: 'Python Developer',
        price: 220000,
        imageUrl: 'images/5.png'
      }
    ];


    function updateCartCount() {
      const cartItems = getCartItems();
      cartCountElement.textContent = cartItems.reduce((total, item) => total + item.quantity, 0);
      cartItemsElement.innerHTML = cartItems.map(item => `<div>${item.product.name} (${item.quantity})</div>`).join('');
    }
            
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
  
    function addToCart(product) {
      const existingItem = cart.find(item => item.id === product.id);
  
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
  
      renderCart();
    }
  
    function removeFromCart(id) {
      const index = cart.findIndex(item => item.id === id);
  
      if (index !== -1) {
        cart.splice(index, 1);
        renderCart();
      }
    }
  
    function renderCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        cartItem.appendChild(img);
  
        const details = document.createElement('div');
        details.classList.add('cart-item-details');
  
        const name = document.createElement('h3');
        name.classList.add('cart-item-name');
        name.textContent = item.name;
        details.appendChild(name);
  
        const price = document.createElement('p');
        price.classList.add('cart-item-price');
        price.textContent = `${item.price} ₽ x ${item.quantity}`;
        details.appendChild(price);
  
        cartItem.appendChild(details);
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Удалить';
        removeButton.addEventListener('click', () => removeFromCart(item.id));
        cartItem.appendChild(removeButton);
  
        cartItemsContainer.appendChild(cartItem);
  
        total += item.price * item.quantity;
      });
  
      totalElement.textContent = `${total} ₽`;
    }
  
    const selectButtons = document.querySelectorAll('.button_click');
selectButtons.forEach(button => {
  const productId = button.getAttribute('data-product-id');
  button.addEventListener('click', () => {
    const product = products.find(product => product.id === parseInt(productId));
    if (product) {
      addToCart(product);
    } else {
      console.warn('Не удалось найти продукт для добавления в корзину.');
    }
  });
});

const cartCountElement = document.querySelector('.cart-count');
function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();

  // Обновите количество заказов
  cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}
function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);

  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();

    // Обновите количество заказов
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
}

  });
  