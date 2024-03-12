// Use localStorage to store cart data
var cart = JSON.parse(localStorage.getItem('cart')) || [];

$(document).ready(function () {
    // Function to display all products on the checkout page
    function displayAllProductsOnCheckout() {
        // Assuming you have a container with the id 'checkout-container' to display products
        var checkoutContainer = $('#checkout-container');

        // Clear the existing content
        checkoutContainer.html('');

        // Loop through all products in the cart
        cart.forEach(function(product, index) {
            // Create HTML for each product
            var productHTML = `
                <div class="product-item">
                    <div id="checkout-img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div id="checkout-name">
                        <h3>${product.name}</h3>
                    </div>
                    <div id="checkout-size">
                        <p>Size: ${product.size}</p>
                    </div>
                    <div id="checkout-amount">
                        <p>Quantity: ${product.quantity}</p>
                    </div>
                    <div id="checkout-price">
                        <p>Price: ${product.price}</p>
                    </div>
                    <button class="delete-icon" onclick="deleteProduct(${index})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;

            // Append the product HTML to the checkout container
            checkoutContainer.append(productHTML);
        });
    }

    // Function to delete product from the cart
    window.deleteProduct = function(index) {
        // Remove the product at the specified index
        cart.splice(index, 1);

        // Store the updated cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Display all products on the checkout page
        displayAllProductsOnCheckout();
    };

    // Display all products on the checkout page when it loads
    displayAllProductsOnCheckout();
});








