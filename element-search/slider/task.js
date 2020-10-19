const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');

const sliders = Array.from(document.querySelectorAll('.slider__item'));

console.log(sliders.length);
let x = 0

let findIndex = function(){
    sliders.forEach(element => {
        if (element.classList.contains('slider__item_active')) {
            x = sliders.indexOf(element);
        }
    })
}

right.addEventListener('click', ()=> {

    findIndex();

    sliders[x].classList.remove('slider__item_active');
    
    if (x === sliders.length - 1){
        x = 0;
        sliders[x].classList.add('slider__item_active');
    } else {
        sliders[x + 1].classList.add('slider__item_active');
    }
    
})

left.addEventListener('click', ()=> {

    findIndex();

    sliders[x].classList.remove('slider__item_active');
    
    if (x === 0){
        x = sliders.length - 1;
        sliders[x].classList.add('slider__item_active');
    } else {
        sliders[x - 1].classList.add('slider__item_active');
    }
    
})

