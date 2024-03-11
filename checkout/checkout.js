// Retrieve cart data from localStorage
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display products on the checkout page
function displayProductsOnCheckout(index) {
    // Assuming you have a container with the id 'checkout-container' to display products
    var checkoutContainer = $('#checkout-container');

    // Get the product at the specified index
    var product = cart[index];

    // Create HTML for the product
    var productHTML = `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Size: ${product.size}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: ${product.price}</p>
        </div>
    `;

    // Append the product HTML to the container
    checkoutContainer.html(productHTML);
}

// Call the function to display the recently added product on page load
displayProductsOnCheckout(cart.length - 1);

