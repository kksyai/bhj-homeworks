
const link = Array.from(document.querySelectorAll('.menu__link'))

    link.forEach(element => {
         element.addEventListener('click', () => {
             if(element.nextElementSibling){
                 element.nextElementSibling.classList.add('menu_active');
             } 
        });
    });

