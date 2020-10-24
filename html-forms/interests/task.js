const interests = document.querySelector('.interests_main');
const check = document.querySelectorAll('.interest__check')

interests.addEventListener('change', event => {
    const parent = event.target.parentElement;
    const childrens = Array.from(parent.nextElementSibling.querySelectorAll('.interest__check'));
   
    childrens.forEach(element => {
        event.target.checked ? element.checked = true : element.checked = false
    })
})
