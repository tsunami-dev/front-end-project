fetch('https://regres.in/api/users', {
    method: 'POST',
    headers: {
        'Content -Type' : 'applacation/json'
    },
    body: JSON. stringify({
        name: 'User 1'
    })
}). then (res => {
    return res.JSON()
    })
    .then (data => console. log (data))
    .catch(error => console. log ( 'ERROR'))
let change = true

const menu = document.querySelector('#moble-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    change =!change
    
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    change ?  menu.classList.toggle('is-active') : menuLinks.classList.toggle('active')
});