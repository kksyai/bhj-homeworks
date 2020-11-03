const textArea = document.getElementById('editor');

textArea.innerText = localStorage.getItem('text');

textArea.addEventListener('keyup', ()=>{
    localStorage.setItem('text', textArea.value);
    textArea.innerText = localStorage.text;
})

