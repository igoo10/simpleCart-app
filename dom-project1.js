document.addEventListener('DOMContentLoaded', function() {
    // Function to update the total price
    function updateTotalPrice() {
      const items = document.querySelectorAll('.card');
      let total = 0;
      
      items.forEach(item => {
        const price = parseFloat(item.querySelector('.unit-price').innerText.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        total += price * quantity;
      });
  
      document.querySelector('.total').innerText = `${total} $`;
    }
  
    // Event delegation for dynamically added elements
    document.querySelector('.list-products').addEventListener('click', function(e) {
      const target = e.target;
      
      if (target.classList.contains('fa-plus-circle')) {
        const quantityElem = target.nextElementSibling;
        let quantity = parseInt(quantityElem.innerText);
        quantityElem.innerText = ++quantity;
        updateTotalPrice();
      }
      
      if (target.classList.contains('fa-minus-circle')) {
        const quantityElem = target.previousElementSibling;
        let quantity = parseInt(quantityElem.innerText);
        if (quantity > 0) {
          quantityElem.innerText = --quantity;
          updateTotalPrice();
        }
      }
      
      if (target.classList.contains('fa-trash-alt')) {
        target.closest('.card').remove();
        updateTotalPrice();
      }
      
      if (target.classList.contains('fa-heart')) {
        const heartIcon = target;
        heartIcon.classList.toggle('liked');
      }
    });
  
    // Style for liked heart icon
    const style = document.createElement('style');
    style.innerHTML = `
      .fa-heart.liked {
        color: red;
      }
    `;
    document.head.appendChild(style);
  });
  