
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4){
        const loader = document.querySelector('.loader');
        loader.classList.remove('loader_active');

        let data = JSON.parse(xhr.responseText);
        const item = document.getElementById('items');
        const list = data.response.Valute;
        for(let key in list){
            item.innerHTML += `<div class="item">
            <div class="item__code">${list[key].CharCode}</div>
            <div class="item__value">${list[key].Value}</div>
            <div class="item__currency">руб</div>
            </div>`
        }
     }
}