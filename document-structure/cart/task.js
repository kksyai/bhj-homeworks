const products = document.querySelector('.products')
console.log(products)

products.addEventListener('click', event =>{
    console.log(event.target)

    let quantity = event.target.parentElement.querySelector('.product__quantity-value')
    if (event.target.classList.contains('product__quantity-control_dec') && quantity.innerText > 1){
        quantity.innerText--
    }
    if (event.target.classList.contains('product__quantity-control_inc')){
        quantity.innerText++
    }

    if(event.target.classList.contains('.product__add')){
        const chart = document.createElement('.chart__product');

    }






})