let holeNumber = document.querySelectorAll(".hole");

let dead = Number(document.getElementById('dead').innerHTML);
let lost = Number(document.getElementById('lost').innerHTML);
console.log("lost", lost);

holeNumber.forEach((element)=>{
element.addEventListener('click', ()=>{
    document.getElementById('lost').innerHTML =
    element.classList.contains('hole_has-mole') ? 
    document.getElementById('dead').innerHTML = ++dead : 
    document.getElementById('lost').innerHTML = ++lost;
    if(dead == 10) {
        alert('win');
    }if(lost == 5) {
        alert('loose');
    }
})
})


