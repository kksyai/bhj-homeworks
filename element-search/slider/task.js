
const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');

const sliders = Array.from(document.querySelectorAll('.slider__item'));

let index = sliders.findIndex(element => {
    console.log(element);
    return element.classList.contains('slider__item_active');
});

right.addEventListener('click', ()=>{
    sliders[index].classList.remove('slider__item_active');
    (index === sliders.length - 1)?
        (index = 0,
        sliders[index].classList.add('slider__item_active')):
        (sliders[index + 1].classList.add('slider__item_active'));
    index++;
})

left.addEventListener('click', ()=>{
    sliders[index].classList.remove('slider__item_active');
    index--;
    (index === 0)?
        (index = sliders.length - 1,
        sliders[index].classList.add('slider__item_active')):
        (sliders[index].classList.add('slider__item_active'));
})


// // let x = 0

// let findIndex = function(){
//     let x = 0;
//     sliders.findIndex((element, index) => {
//         if (element.classList.contains('slider__item_active')) {
//             x = index;
//             return x; 
//         }
//     })
// }

// right.addEventListener('click', (event)=> {
//     console.log(findIndex(event));
// })
    // console.log(x)


            //thisArg.classList.toggle('slider__item_active');
            // console.log(element.nextElementSibling)
            // if(element.classList.contains('slider__item_active')){
            //     element.classList.toggle('slider__item_active')
            //     element.nextElementSibling.classList.toggle('slider__item_active')
            // } 



//     findIndex();

//     sliders[x].classList.remove('slider__item_active');
    
//     if (x === sliders.length - 1){
//         x = 0;
//         sliders[x].classList.add('slider__item_active');
//     } else {
//         sliders[x + 1].classList.add('slider__item_active');
//     }
    
 //})

// left.addEventListener('click', ()=> {

//     findIndex();

//     sliders[x].classList.remove('slider__item_active');
    
//     if (x === 0){
//         x = sliders.length - 1;
//         sliders[x].classList.add('slider__item_active');
//     } else {
//         sliders[x - 1].classList.add('slider__item_active');
//     }
    
// })

