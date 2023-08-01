


function addToCart(product, price, quantity) {

    let cart = localStorage.getItem("cart")
  
    
    cart = JSON.parse(cart)
    if (cart == null){
        cart = []
    }

    let found = false;
    console.log(typeof cart)
    if (cart.length > 0) {
        cart.forEach(element => {
            if (element.product == product){
                element.quantity += 1;
                found = true;
            }
        });
    }
   
    if (!found) {
        cart.push({ product, price, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Added to cart");
}

// Event listener to handle form submissions

let product_add = document.getElementById("product-add")
console.log(product_add)

product_add.addEventListener('submit', (event) => {
    event.preventDefault();
    
        const quantityInput = document.querySelector('.quantity-text');
        const quantityValue = parseInt(quantityInput.value, 10);

        const priceElement = document.querySelector('.product-price');
        const priceText = priceElement.textContent;
        const priceValue = parseFloat(priceText.replace(/[€$]/g, ''));

        const productNameElement = document.querySelector('.product-name');
        const productName = productNameElement.textContent;

        console.log('Product Price:', priceValue);

        console.log('Quantity', quantityValue)

        console.log('Product Name', productName)

        addToCart(productName, priceValue, quantityValue)
        alert("Added to cart!!")
        let cart = localStorage.getItem("cart")
        console.log(cart)
    
});
