const autorization = document.getElementById('signin');
const submitAutorize = document.getElementById('signin__btn');
const wellcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if(localStorage.getItem('user_id')) {
    wellcome.classList.add('welcome_active');
    userId.innerText = localStorage.getItem('user_id');
} else {
    autorization.classList.add('signin_active');
}


submitAutorize.addEventListener('click', (event) => {
    const autorizeForm = document.getElementById('signin__form');
    let formData = new FormData(autorizeForm);

    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    
    xhr.onload = () => {
    let serverFedback = JSON.parse(xhr.responseText);

        if(serverFedback.success === false) {
            alert("«Неверный логин/пароль»")
        } else {
            localStorage.setItem('user_id', serverFedback['user_id'])
            autorization.classList.remove('signin_active');

            wellcome.classList.add('welcome_active');
            userId.innerText = localStorage.getItem('user_id');
        }
    }

    xhr.send(formData);
})

//if()