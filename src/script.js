$(document).ready(function () {
    // Function to encode URL parameters
    function encodeURLParams(params) {
        return Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
    }

    // Function to redirect to public/product.html with encoded parameters
    function redirectToProductPage(product) {
        var params = {
            'name': product.name,
            'image': product.image,
            'price': product.price
        };

        var encodedParams = encodeURLParams(params);
        var productURL = '../public/product.html?' + encodedParams; // Adjust the path

        console.log("Generated Product URL: ", productURL); // Log the generated URL

        // Redirect to public/product.html with encoded parameters
        window.location.href = productURL;
    }

    // Click event handler for elements with the class .product
    $('.product').click(function (event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // Get data attributes from the clicked product card
        var name = $(this).data('name');
        var image = $(this).data('image');
        var price = $(this).data('price');

        console.log("Clicked Product: ", name, image, price); // Log the clicked product data

        // Redirect to the product page with encoded parameters
        redirectToProductPage({ name, image, price });
    });
});

