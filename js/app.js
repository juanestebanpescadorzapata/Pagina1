const hamb=document.querySelector('.menu');
const menu = document.querySelector('.menu-navegacion');



hamb.addEventListener('click', ()=>{

    menu.classList.toggle("spread")
})



window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
     && e.target != menu && e.target !=hamb){
    menu.classList.toggle("spread")
    }
})




document.getElementById('volverInicio').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
