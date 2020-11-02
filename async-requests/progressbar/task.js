let form = document.getElementById('form');
const progress = document.getElementById('progress')

form.addEventListener('submit', (event)=> {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    
    event.preventDefault();

    xhr.upload.onprogress = function() {
        progress.value += 0.1;
    };

   xhr.upload.onloadend = function() {
       progress.value = 1;
       alert( 'Данные полностью загружены на сервер!' );
    }

    xhr.send(formData);
})
