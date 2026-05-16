window.onload = function() {
  const grid = document.getElementById('telefon-grid');
 
  if (!grid) return;

  const products = [
    {title: "iPhone 15 Pro Max", price: "115000", thumbnail: "https://unsplash.com"},
    {title: "Samsung Galaxy S24 Ultra", price: "125000", thumbnail: "https://unsplash.com"},
    {title: "Xiaomi 14 Ultra", price: "95000", thumbnail: "https://unsplash.com"},
    {title: "Google Pixel 8 Pro", price: "85000", thumbnail: "https://unsplash.com"},
    {title: "OnePlus 12", price: "72000", thumbnail: "https://unsplash.com"},
    {title: "Asus ROG Phone 8", price: "105000", thumbnail: "https://unsplash.com"},
    {title: "Nothing Phone (2)", price: "58000", thumbnail: "https://unsplash.com"},
    {title: "Sony Xperia 1 VI", price: "115000", thumbnail: "https://unsplash.com"},
    {title: "Realme GT 6", price: "52000", thumbnail: "https://unsplash.com"},
    {title: "Poco F6 Pro", price: "48000", thumbnail: "https://unsplash.com"},
    {title: "Honor Magic6 Pro", price: "92000", thumbnail: "https://unsplash.com"},
    {title: "Motorola Edge 50 Ultra", price: "82000", thumbnail: "https://unsplash.com"},
    {title: "iPhone 15", price: "75000", thumbnail: "https://unsplash.com"},
    {title: "Samsung Galaxy A55", price: "38000", thumbnail: "https://unsplash.com"},
    {title: "Infinix NOTE 40 Pro", price: "26000", thumbnail: "https://unsplash.com"}
  ];

  grid.innerHTML = '';
 
  products.forEach(product => {
    const card = `
      <div class="product-card">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Цена: ${product.price} ₽</p>
        <button>Купить</button>
      </div>
    `;
    grid.insertAdjacentHTML('beforeend', card);
  });
};