// Get the form and product list elements
const productForm = document.querySelector('#product-form');
const productList = document.querySelector('#product-list');

// Add a submit event listener to the form
productForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values from the form
  const name = productForm.querySelector('#product-name').value;
  const description = productForm.querySelector('#product-description').value;
  const price = productForm.querySelector('#product-price').value;
  const image = productForm.querySelector('#product-image').value;

  // Create a new product object
  const newProduct = {
    name: name,
    description: description,
    price: price,
    image: image
  };

  // Add the new product to the product list
  const productItem = document.createElement('li');
  productItem.innerHTML = `
    <img src="${newProduct.image}" alt="${newProduct.name}">
    <div>
      <h4>${newProduct.name}</h4>
      <p>${newProduct.description}</p>
      <span>${newProduct.price} USD</span>
    </div>
  `;
  productList.appendChild(productItem);

  // Clear the form inputs
  productForm.reset();
});
