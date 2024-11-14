const imagenes= document.querySelectorAll('.img-galeria');
const  imagenesLight=document.querySelector('.agregar');

const contenedorLight= document.querySelector('.imagen-light');

const hamburguer1= document.querySelector('.menu')

const galeriaf=document.querySelectorAll('.tote')

galeriaf.forEach(imagen =>{
    imagen.addEventListener('click',() =>{
    aparecerImagen(imagen.getAttribute('src'))
    })
})

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',() =>{
    aparecerImagen(imagen.getAttribute('src'))
    })
})


contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity ='1'
    }
})

const aparecerImagen=(imagen)=>{
    imagenesLight.src= imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity='0'
    
}