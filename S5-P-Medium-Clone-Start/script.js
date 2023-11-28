
document.addEventListener('scroll', () => {
const bottone= document.querySelector('#navBut')


const nav = document.querySelector('nav');



if(window.scrollY > 300){
    nav.classList.add('scrolled');
    bottone.classList.add('scrolled');
}
else{
    nav.classList.remove('scrolled');
   bottone.classList.remove('scrolled');
}
})