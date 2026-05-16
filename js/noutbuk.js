window.onload = function() {
  const grid = document.getElementById('noutbuk-grid');
 
  if (!grid) return;

  const products = [
    {title: "MacBook Pro M3 Max", price: "245000", thumbnail: "https://unsplash.com"},
    {title: "ASUS ROG Strix SCAR", price: "215000", thumbnail: "https://unsplash.com"},
    {title: "Lenovo Legion Pro 7i", price: "185000", thumbnail: "https://unsplash.com"},
    {title: "HP Pavilion Plus 14", price: "78000", thumbnail: "https://unsplash.com"},
    {title: "Dell XPS 16", price: "195000", thumbnail: "https://unsplash.com"},
    {title: "Razer Blade 16", price: "275000", thumbnail: "https://unsplash.com"},
    {title: "Acer Predator Helios", price: "145000", thumbnail: "https://unsplash.com"},
    {title: "MSI Titan GT77", price: "325000", thumbnail: "https://unsplash.com"},
    {title: "Huawei MateBook X Pro", price: "135000", thumbnail: "https://unsplash.com"},
    {title: "Gigabyte AORUS 16", price: "125000", thumbnail: "https://unsplash.com"},
    {title: "Samsung Galaxy Book4", price: "145000", thumbnail: "https://unsplash.com"},
    {title: "ASUS Zenbook DUO", price: "165000", thumbnail: "https://unsplash.com"},
    {title: "MacBook Air M3", price: "120000", thumbnail: "https://unsplash.com"},
    {title: "Acer Aspire 3", price: "42000", thumbnail: "https://unsplash.com"},
    {title: "Lenovo IdeaPad Slim 3", price: "48000", thumbnail: "https://unsplash.com"}
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