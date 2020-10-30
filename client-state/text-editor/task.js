const textArea = document.getElementById('editor');

textArea.addEventListener('change', ()=>{
    let inputText = textArea.value;
    localStorage.setItem('text', inputText);
})

textArea.innerText = localStorage.text;