const pollTitle = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
let indexAnswer;
let idPoll;

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText)
        pollTitle.innerText = data.data.title;
        idPoll = data.id
        console.log('idPoll', idPoll)
    
        data.data.answers.forEach((element, index) => {
            pollAnswers.innerHTML += `<button class="poll__answer">${element}</button>`
            indexAnswer = index;
            console.log(index)

        })
        pollAnswers.addEventListener('click', ()=>{
            console.log('выбран ответ №', indexAnswer);
            alert('Спасибо, ваш голос засчитан!');

            // let xhr2 = new XMLHttpRequest();
            // xhr2.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            // xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
            // xhr2.send(`vote=${idPoll}&answer=${indexAnswer}`);

        })
    };
};

//let url = new URL()


//pollTitle.innerText = data.title;


