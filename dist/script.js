function showPopup(title, price, stock) {
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-price').innerText = price;
  document.getElementById('quantity').max = stock;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function addToCart() {
  const title = document.getElementById('popup-title').innerText;
  const quantity = document.getElementById('quantity').value;
  alert(`Added ${quantity} ${title}(s) to cart.`);
  closePopup();
}
