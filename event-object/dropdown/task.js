const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
console.log(dropdownValue);
console.log(dropdownItems);
const dropdown = document.querySelector('.dropdown');




dropdown.addEventListener('click', (event)=>{
    console.log(event.target)
    dropdownValue.textContent = event.target.textContent
    event.preventDefault()
    dropdown.lastElementChild.classList.toggle('dropdown__list_active')
})

