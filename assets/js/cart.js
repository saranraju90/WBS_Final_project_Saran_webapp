


function calculateTotalPrice(item) {
    return item.price * item.quantity;
  }

// Function to display the cart items on the cart page
function displayCartItems() {
    console.log("Displaying cart items")
    const cartBody = document.getElementById('cart-body');
    if (typeof(cartBody) != 'undefined' && cartBody != null) {
        cartBody.innerHTML = '';

        let totalAmount = 0;

        let cart = JSON.parse(localStorage.getItem("cart"))


        for (const item of cart) {
            const total = calculateTotalPrice(item);
            totalAmount += total;

            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${total.toFixed(2)}</td>
            `;
            cartBody.appendChild(row);
        }

        // Add a row to display the total amount
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `
            <td colspan="3">Total:</td>
            <td>$${totalAmount.toFixed(2)}</td>
        `;
        cartBody.appendChild(totalRow);

    } else {
        console.log("No cart items to display")
    }
    
}

  // Call the displayCartItems function to populate the cart page

displayCartItems()