const textArea = document.getElementById('editor');

if(localStorage.getItem('text') === null){
    textArea.value = null;
}

textArea.addEventListener('change', ()=>{
    let inputText = textArea.value;
    localStorage.setItem('text', inputText);
})

textArea.innerText = localStorage.text;