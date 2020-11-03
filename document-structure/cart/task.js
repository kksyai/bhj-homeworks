const products = document.querySelector('.products')
const cartProducts = document.querySelector('.cart__products');

function findInArray(element) {
    element.innerText === quantity.innerText;
}

products.addEventListener('click', event =>{

    let quantity = event.target.parentElement.querySelector('.product__quantity-value')
    if (event.target.classList.contains('product__quantity-control_dec') && quantity.innerText > 1){
        quantity.innerText--;
    }
    if (event.target.classList.contains('product__quantity-control_inc')){
        quantity.innerText++;
    }

    if(event.target.classList.contains('product__add')){
        console.log(Array.from(document.querySelectorAll('.cart__product')))

        function findInArray(element) {
            console.log('id array element', element.dataset.id)
            console.log('id select element', event.target.closest('.product').dataset.id)
            element.dataset.id === event.target.closest('.product').dataset.id;
        }
        

        let result = Array.from(document.querySelectorAll('.cart__product')).find(findInArray)
        console.log(result)
        
        cartProducts.innerHTML += 
        `<div class="cart__product" data-id=${event.target.closest('.product').dataset.id}>
            <img class="cart__product-image" src=${event.target.closest('.product').firstElementChild.nextElementSibling.getAttribute('src')}>
            <div class="cart__product-count">${quantity.innerText}</div>
        </div>`
    }

    
})