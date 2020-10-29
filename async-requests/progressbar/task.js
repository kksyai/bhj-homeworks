let formData = new FormData(document.forms.flox);
const progress = document.getElementById('progress')
const send = document.getElementById('send')

send.addEventListener('click', ()=> {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    xhr.send()

    xhr.upload.onprogress = event =>{
        progress = event.loaded;
    }

})
