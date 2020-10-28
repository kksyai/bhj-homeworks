const body = document.querySelector('body');

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

function showTooltip(ev){
    let toolTip = document.createElement('div');
    toolTip.classList.add('tooltip');
    toolTip.innerText = ev.target.title;
    toolTip.style.display = "block";  

    let coords = getCoords(ev.target);
    toolTip.style.left = coords.left + "px";
    toolTip.style.top = coords.bottom + "px";
    
    ev.target.after(toolTip);
}

body.addEventListener('click', (event)=>{
    event.preventDefault();
    if(event.target.nextElementSibling == null){
        showTooltip(event);
    } else if(event.target.nextElementSibling.classList.contains('tooltip')){  //
        event.target.nextElementSibling.remove(); //style.display = "none";
    } else {
        showTooltip(event)
    }

})

