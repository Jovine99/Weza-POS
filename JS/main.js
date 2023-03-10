// 
// Add event listener to all "Add to Cart" buttons
var addToCartButtons = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", addToCart);
}

// Function to add product to cart
function addToCart(itemname, itemprice) {
	
	// TODO: Implement cart functionality
	const orderlist = document.getElementById('orderlist');
 const orderitem = document.createElement('li');

 // add a text to a list
const orderitemname = document.createTextNode(itemname);
const orderitemprice = document.createTextNode(itemprice);
 orderitem.appendChild(orderitemname);
 // attach the list tag to (child) orderlist
 orderlist.appendChild(orderitem)
}
// Function to add item to cart
function addItemToCart(name, price, imageSrc) {
	var cartItems = document.getElementsByClassName("product-info")[0];
	var cartItemNames = cartItems.getElementsByClassName("product-name");
	
	// Check if item is already in cart
	for (var i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText === name) {
			alert("This item is already in your cart.");
			return;
		}
	}
	
	var cartItem = document.createElement("li");
	cartItem.classList.add("cart-item");
	var cartItemImage = document.createElement("div");
	cartItemImage.classList.add("cart-item-image");
	var image = document.createElement("img");
	image.src = imageSrc;
	image.alt = name;
	cartItemImage.appendChild(image);
	var cartItemInfo = document.createElement("div");
	cartItemInfo.classList.add("cart-item-info");
	var cartItemName = document.createElement("h4");
	cartItemName.classList.add("cart-item-name");
	cartItemName.innerText = name;
	var cartItemPrice = document.createElement("p");
	cartItemPrice.classList.add("cart-item-price");
	cartItemPrice.innerText = "$" + price;
	cartItemInfo.appendChild(cartItemName);
	cartItemInfo.appendChild(cartItemPrice);
	cartItem.appendChild(cartItemImage);
	cartItem.appendChild(cartItemInfo);
	cartItems.appendChild(cartItem);
	
	updateCartTotal(price);
}

// Function to update cart total
function updateCartTotal(price) {
	var cartTotal = document.getElementsByClassName("cart-total")[0];
	var total
}
 

