document.addEventListener("DOMContentLoaded", function() {
    
    // --- Cart Badge Logic (Same as before) ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBadge = document.querySelector('.cart-badge');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartBadge.textContent = cartCount;
            let originalText = this.textContent;
            this.textContent = "Added!";
            this.classList.remove('btn-outline-dark', 'btn-dark');
            this.classList.add('btn-success', 'text-white');
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('btn-success', 'text-white');
                this.classList.add('btn-dark'); // Reverts to dark style
            }, 1000);
        });
    });
});

// --- Image Switcher Function ---
function changeImage(src) {
    document.getElementById('currentImg').src = src;
    // Note: In a real theme, you would also toggle the 'active-thumb' class here
}

// --- Quantity Input Logic ---
function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value > 1){
        value--;
        document.getElementById('number').value = value;
    }
}