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
                        <option value="option1">S</option>
                        <option value="option2">M</option>
                        <option value="option3">L</option>
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

        // Pass the index of the recently added product
        displayProductsOnCheckout(cart.length - 1);
    }

    // Function to update the checkout icon
    function updateCheckoutIcon() {
        // Your logic to update the checkout icon with the number of items in the cart
        // This could involve counting the elements in the 'cart' array
        var cartItemCount = cart.length;

        // Update the checkout icon display
        $('#checkout-icon').text(cartItemCount);
    }

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

    // Call the function when the page loads
    displayProductDetails();
});




