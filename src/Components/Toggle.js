
const hamburger = document.getElementsByClassName('hamburger')[0];
const Navbar = document.getElementsByClassName('Nav')[0];
hamburger.addEventListener('click', ()=>{
    console.log("clicked")
    Navbar.classList.toggle('active')
})