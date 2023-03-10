// Create a new product object
const newProduct = {
  name: "New Product",
  description: "This is a new product.",
  price: 9.99,
  image: "path/to/image.jpg"
};

// Add the new product object to an array of products
const products = [
  {
    name: "Product A",
    description: "This is Product A.",
    price: 19.99,
    image: "path/to/image-a.jpg"
  },
  {
    name: "Product B",
    description: "This is Product B.",
    price: 29.99,
    image: "path/to/image-b.jpg"
  },
  // Add more products as needed
  newProduct
];

// Loop through the array of products and create a new product display element for each one
const productSection = document.querySelector("#product-section");
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
    <img class="product-image" src="${product.image}" alt="${product.name} Image">
    <h3 class="product-name">${product.name}</h3>
    <p class="product-description">${product.description}</p>
    <span class="product-price">$${product.price.toFixed(2)}</span>
  `;
  productSection.appendChild(productElement);
}
