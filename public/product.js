$(document).ready(function() {
    // function to parse url parameters
    function getParameterByName(name, url) {
        if(!url) url = window.location.href;
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
                    <label for="dropdown">Select an option:</label>
                    <select id="dropdown" name="dropdown">
                        <option value="option1">S</option>
                        <option value="option2">M</option>
                        <option value="option3">L</option>
                    </select>
                    <div class="add-to-cart-layout">
                        <!-- Quantity -->
                        <input type="number"  name="quantity" id="quantity-input"/>
                        <!-- Add to cart -->
                        <button type="submit">Add To Cart</button>
                    </div>
                </form>
                <!-- Product details -->
                <p id="product-details-heading">Product Details</p>
                <p id="product-details-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet animi nobis perferendis, iusto nulla omnis voluptates perspiciatis minus, nemo officia delectus fugit expedita quod quia ab alias similique. Nostrum omnis sed mollitia quia voluptates?</p>
            </div>
        `);
    
    }

      // Call the function when the page loads
      displayProductDetails();
});