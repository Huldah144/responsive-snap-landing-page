
let dropdownImg = document.querySelectorAll('.dropdown .nav-link');

dropdownImg.forEach((item)=>{

    // console.log(item);
    item.addEventListener('click', e =>{
        e.preventDefault();

        // console.log(e.target.firstElementChild)

        let dropdownIcon = e.target.firstElementChild

        // console.log(dropdownIcon);
        if(dropdownIcon.getAttribute('src') === './assets/img/icon-arrow-down.svg'){
            dropdownIcon.setAttribute('src', './assets/img/icon-arrow-up.svg')
        }else{
            dropdownIcon.setAttribute('src', './assets/img/icon-arrow-down.svg')
        }

        let navItem = e.target.parentElement;

        navItem.classList.toggle('show')


    })
    // item.addEventListener('click',  function(e) {
    //     e.preventDefault();

    //     console.log(e)
    // })
})



let menuIcon = document.querySelector('.btn-menu img')

menuIcon.addEventListener('click', function(){
    const navbarNav = document.querySelector('.navbar-container');
    const body = document.querySelector('body');

    navbarNav.classList.add('show')
    body.classList.add('overlay')
})

let menuIconX = document.querySelector('.btn-nav-icon');

menuIconX.addEventListener('click', function(){
    let navbarNav = document.querySelector('.navbar-container');
    let body = document.querySelector('body');

    navbarNav.classList.remove('show');
    body.classList.remove('overlay');
})
