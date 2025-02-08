document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const container = document.querySelector("#cartContainer");

    function updateCartUI() {
        container.innerHTML = ""; // Clear container

        if (cart.length === 0) {
            container.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("cart-item");
            productDiv.innerHTML = `
        <div class="image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="itme">
            <div class="itme-name">
                <h2>${item.name}</h2>
            </div>
            <div class="itme-detail">
                <p class="detail">${item.detail}</p>
            </div>
            <div class="itme-price">
                <h4 class="prce">Price:<br> ${item.price}</h4>
            </div>
        </div>
        <div class="delete">
            <button class="delete-btn" data-index="${index}">delete</button>
        </div>
        <hr>
    `;
            container.appendChild(productDiv);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = parseInt(this.getAttribute("data-index"), 10);
                cart.splice(index, 1); // Remove the item from the array
                localStorage.setItem("cartItems", JSON.stringify(cart)); // Update localStorage
                updateCartUI(); // Refresh UI
            });
        });
    }

    updateCartUI(); // Initialize UI on page load
});
