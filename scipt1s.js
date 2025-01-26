
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total');

    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const removeBtn = item.querySelector('.remove-btn');
        const likeBtn = item.querySelector('.like-btn');
        const quantityElement = item.querySelector('.quantity');
        const itemPriceElement = item.querySelector('.item-price');
        const itemPrice = parseFloat(item.dataset.price);

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                itemPriceElement.textContent = `${itemPrice * quantity}fcfa`;
                updateTotalPrice();
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            itemPriceElement.textContent = `${itemPrice * quantity}fcfa`;
            updateTotalPrice();
        });

        removeBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const itemPrice = parseFloat(item.dataset.price);
            total += quantity * itemPrice;
        });
        totalPriceElement.textContent = `${total}fcfa`;
    }

    updateTotalPrice();
});
