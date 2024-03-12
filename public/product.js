// Use localStorage to store cart data
var cart = JSON.parse(localStorage.getItem('cart')) || [];

$(document).ready(function () {
    // Function to parse URL parameters
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Function to display product details
    function displayProductDetails() {
        var name = getParameterByName('name');
        var image = getParameterByName('image');
        var price = getParameterByName('price');

        // Update the HTML with product details
        var productDetailsDiv = $('.product-layout-container');
        productDetailsDiv.html(`
            <!-- img side -->
            <div class="img-layout">
                <img src="${image}" alt="${name}">
            </div>
            <div class="text-layout">
                <h5>${name}</h5>
                <h6>${price}</h6>
                <!-- Size of product input -->
                <form>
                    <label for="dropdown" id="size-label">Select a size:</label>
                    <select id="dropdown" name="dropdown" required>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    <div class="add-to-cart-layout">
                        <!-- Quantity -->
                        <input type="number"  name="quantity" id="quantity-input" min="1" required/>
                        <!-- Add to cart -->
                        <button type="button" id="add-to-cart-btn">Add To Cart</button>
                    </div>
                </form>
                <!-- Product details -->
                <p id="product-details-heading">Product Details</p>
                <p id="product-details-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet animi nobis perferendis, iusto nulla omnis voluptates perspiciatis minus, nemo officia delectus fugit expedita quod quia ab alias similique. Nostrum omnis sed mollitia quia voluptates?</p>
            </div>
        `);

        // Attach click event handler to the "Add To Cart" button
        $('#add-to-cart-btn').click(function () {
            addToCart(name, price, image);
        });
    }

    // Function to add product to the cart
    function addToCart(productName, productPrice, productImage) {
        var size = $('#dropdown').val();
        var quantity = $('#quantity-input').val();

        // Create a product object
        var product = {
            'name': productName,
            'size': size,
            'quantity': quantity,
            'price': productPrice,
            'image': productImage
        };

        // Add the product to the shopping cart
        cart.push(product);

        // Store the updated cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update the checkout icon
        updateCheckoutIcon();

        // Display all products on the checkout page
        displayAllProductsOnCheckout();
    }

    // Function to update the checkout icon
    function updateCheckoutIcon() {
        // Retrieve cart information from localStorage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Your logic to update the checkout icon with the number of items in the cart
        var cartItemCount = cart.length;

        // Update the checkout icon display
        var checkoutIcon = $('#icon-shopping-cart');
        checkoutIcon.text(cartItemCount);

        // Add a small red circle if there are items in the cart
        if (cartItemCount > 0) {
            checkoutIcon.css({
                'background-color': 'red',
                'color': 'white',
                'border-radius': '50%',
                'padding': '0.325rem',
                'font-size': '12px',
                'position': 'relative',
                'margin': '0 0.625rem 0 0'
            });
        } else {
            // Reset styles if the cart is empty
            checkoutIcon.removeAttr('style');
        }
    }


    




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
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Size: ${product.size}</p>
                    <p>Quantity: ${product.quantity}</p>
                    <p>Price: ${product.price}</p>
                    <button class="delete-icon" onclick="deleteProduct(${index})">
                        <i class="fas fa-trash-alt"></i> Delete
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

        // Update the checkout icon
        updateCheckoutIcon();

        // Display all products on the checkout page
        displayAllProductsOnCheckout();
    };

    // Call the function when the page loads
    displayProductDetails();
});









