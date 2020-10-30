const autorization = document.getElementById('signin');
const submitAutorize = document.getElementById('signin__btn');
const autorizeForm = document.getElementById('signin__form');
const wellcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

let formData = new FormData(autorizeForm);

autorization.classList.add('signin_active');

submitAutorize.addEventListener('click', (event) => {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    //xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(formData);
    xhr.onload = () => {
    let serverFedback = JSON.parse(xhr.responseText);
    //console.log(serverFedback.success)

        if(serverFedback.success === false) {
            alert("«Неверный логин/пароль»")
        } else {
            localStorage.getItem('user_id', serverFedback['user_id'])
            wellcome.classList.add('welcome_active');
            userId.innerText = serverFedback['user_id'];
        }

    }
    //let feedback = JSON.parse(xhr.responseText);
    //console.log(feedback)
})

//if()