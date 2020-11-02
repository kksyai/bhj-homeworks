const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input')
const messages = document.querySelector( '.chat-widget__messages' );

const messageText = [
    'Добрый день', 
    'Спасибо, хорошего дня', 
    'Для решения вашей проблемы свяжитесь с оператором',
    'До нового годв мы на самоизоляции',
    'Все на удаленке',
    'Перезвоните нам завтра'
]

function randomInteger(max) {
    let rand = Math.random() * (max + 1);
    return Math.floor(rand);
  }

chatWidget.addEventListener('click', ()=> {
    chatWidget.classList.add('chat-widget_active');
    chatInput.classList.add('focused');
});

chatInput.addEventListener('keyup', (event)=>{
    if((event.key === 'Enter') && (chatInput.value !== '')){
        messages.innerHTML += 
        `<div class="message message_client">
            <div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
            <div class="message__text">${chatInput.value}</div>
        </div>`
        chatInput.value = '';

        messages.innerHTML += 
        `<div class="message">
        <div class="message__time">${new Date().toTimeString().slice(0, 5)}</div>
        <div class="message__text">${messageText[randomInteger(messageText.length - 1)]}</div>
    </div>`

        //messages.lastElementChild.scrollIntoView(false);
        messages.parentElement.scrollTop = 9999;
    }
})



