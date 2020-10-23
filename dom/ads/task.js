const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

function nou(){
    if (index === rotator.length - 1) {
        rotator[index].classList.remove('rotator__case_active');
        index = 0;
        rotator[index].classList.add('rotator__case_active');
    } else {
        rotator[index].classList.remove('rotator__case_active');
        rotator[index + 1].classList.add('rotator__case_active');
    } 
    index++;
}

setInterval(nou, 1000)
