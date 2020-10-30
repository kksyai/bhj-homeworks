const closePopup = document.querySelector('.modal__close');
const modalWindow = document.getElementById('subscribe-modal')

const getCookie = () => {
    const value = "; " + document.cookie;
    console.log(value)
    let parts = value.split("; " + 'window' + "=");
    console.log(parts)
    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    }
}

if(getCookie() !== 'close'){
    modalWindow.classList.add('modal_active');
}

closePopup.addEventListener('click', ()=>{
    modalWindow.classList.remove('modal_active');
    document.cookie = 'window=close';
})